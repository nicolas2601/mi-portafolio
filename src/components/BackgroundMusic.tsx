import { useEffect, useRef, useState } from "react";
import { createFadeSteps, clampVolume } from "../lib/audio";
import { p5Audio } from "../lib/p5-assets";

const DEFAULT_VOLUME = 0.35;
const VOLUME_STORAGE_KEY = "p5-bgm-volume";
const ENABLED_STORAGE_KEY = "p5-bgm-enabled";
const FADE_STEP_COUNT = 12;
const FADE_INTERVAL_MS = 24;
const RESUME_EVENTS = ["pointerdown", "keydown"] as const;

// Storage can throw (private mode, blocked cookies): music must still work.
function readStorage(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string): void {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Preferences are optional.
  }
}

function readStoredVolume(): number {
  const storedVolume = Number(readStorage(VOLUME_STORAGE_KEY));
  return Number.isFinite(storedVolume) && storedVolume > 0
    ? clampVolume(storedVolume)
    : DEFAULT_VOLUME;
}

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const fadeIntervalRef = useRef<number | undefined>(undefined);
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(true);
  const startingRef = useRef(false);

  const stopFade = () => {
    if (fadeIntervalRef.current === undefined) return;
    window.clearInterval(fadeIntervalRef.current);
    fadeIntervalRef.current = undefined;
  };

  const fadeTo = (target: number, pauseAfterFade = false) => {
    const audio = audioRef.current;
    if (!audio) return;

    stopFade();
    const steps = createFadeSteps(audio.volume, clampVolume(target), FADE_STEP_COUNT);
    let stepIndex = 0;
    fadeIntervalRef.current = window.setInterval(() => {
      audio.volume = clampVolume(steps[stepIndex] ?? target);
      stepIndex += 1;
      if (stepIndex < steps.length) return;
      stopFade();
      audio.volume = clampVolume(target);
      if (pauseAfterFade) audio.pause();
    }, FADE_INTERVAL_MS);
  };

  const start = async (targetVolume: number) => {
    const audio = audioRef.current;
    if (!audio || startingRef.current) return false;

    startingRef.current = true;
    try {
      audio.volume = 0;
      await audio.play();
      setIsPlaying(true);
      fadeTo(targetVolume);
      return true;
    } catch {
      setIsPlaying(false);
      return false;
    } finally {
      startingRef.current = false;
    }
  };

  useEffect(() => {
    const storedVolume = readStoredVolume();
    setVolume(storedVolume);
    setHasInteracted(readStorage(ENABLED_STORAGE_KEY) !== null);

    // Browsers block autoplay: a returning visitor who left music on gets it
    // back on their first click or key press, never before.
    if (readStorage(ENABLED_STORAGE_KEY) !== "1") return;
    const resume = () => {
      RESUME_EVENTS.forEach((name) => window.removeEventListener(name, resume));
      void start(storedVolume);
    };
    RESUME_EVENTS.forEach((name) => window.addEventListener(name, resume));

    return () => {
      RESUME_EVENTS.forEach((name) => window.removeEventListener(name, resume));
      stopFade();
    };
  }, []);

  const handleToggle = async () => {
    setHasInteracted(true);
    if (isPlaying) {
      setIsPlaying(false);
      writeStorage(ENABLED_STORAGE_KEY, "0");
      fadeTo(0, true);
      return;
    }

    const started = await start(volume);
    if (started) writeStorage(ENABLED_STORAGE_KEY, "1");
  };

  const handleVolumeChange = (nextVolume: number) => {
    const next = clampVolume(nextVolume);
    setVolume(next);
    writeStorage(VOLUME_STORAGE_KEY, String(next));
    if (audioRef.current && isPlaying) fadeTo(next);
  };

  return (
    <div className="p5-music" role="group" aria-label="Background music" data-playing={isPlaying}>
      <button
        className="p5-music__button"
        type="button"
        data-playing={isPlaying}
        data-hint={!hasInteracted}
        aria-pressed={isPlaying}
        onClick={handleToggle}
      >
        <span className="p5-music__bars" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="p5-music__label">Music</span>
      </button>
      <input
        className="p5-music__slider"
        type="range"
        min="0.05"
        max="1"
        step="0.05"
        value={volume}
        tabIndex={isPlaying ? 0 : -1}
        aria-label="Background music volume"
        onChange={(event) => handleVolumeChange(Number(event.currentTarget.value))}
      />
      <audio ref={audioRef} preload="none" loop src={p5Audio.background} />
    </div>
  );
}
