import { useEffect, useRef, useState } from "react";
import { createFadeSteps, clampVolume } from "../lib/audio";
import { p5Audio } from "../lib/p5-assets";

const DEFAULT_VOLUME = 0.35;
const VOLUME_STORAGE_KEY = "p5-bgm-volume";
const FADE_STEP_COUNT = 12;
const FADE_INTERVAL_MS = 24;

function readStoredVolume(): number {
  if (typeof window === "undefined") return DEFAULT_VOLUME;

  const storedVolume = Number(window.localStorage.getItem(VOLUME_STORAGE_KEY));
  return Number.isFinite(storedVolume)
    ? clampVolume(storedVolume)
    : DEFAULT_VOLUME;
}

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const fadeIntervalRef = useRef<number | undefined>(undefined);
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const [isPlaying, setIsPlaying] = useState(false);

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

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const storedVolume = readStoredVolume();
    setVolume(storedVolume);
    audio.volume = storedVolume;

    return () => stopFade();
  }, []);

  const handleToggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      setIsPlaying(false);
      fadeTo(0, true);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
      fadeTo(volume);
    } catch {
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (nextVolume: number) => {
    const next = clampVolume(nextVolume);
    setVolume(next);
    window.localStorage.setItem(VOLUME_STORAGE_KEY, String(next));
    if (audioRef.current && !isPlaying) audioRef.current.volume = next;
    if (audioRef.current && isPlaying) fadeTo(next);
  };

  return (
    <div className="p5-music" aria-label="Background music controls">
      <button
        className="p5-music__button"
        type="button"
        data-playing={isPlaying}
        aria-pressed={isPlaying}
        aria-label={isPlaying ? "Turn background music off" : "Turn background music on"}
        onClick={handleToggle}
      >
        BGM {isPlaying ? "ON" : "OFF"}
      </button>
      <label>
        <span className="sr-only">Background music volume</span>
        <input
          className="p5-music__slider"
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={volume}
          aria-label="Background music volume"
          onChange={(event) => handleVolumeChange(Number(event.currentTarget.value))}
        />
      </label>
      <audio ref={audioRef} preload="none" src={p5Audio.background} />
    </div>
  );
}
