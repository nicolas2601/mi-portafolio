import dialogue2 from "../assets/p5/p5s_protagonist_dialogue2.webp";
import jokerFace from "../assets/p5/jokerface2.webp";
import portrait from "../assets/p5/portrait.webp";

/**
 * Single import point for third-party Persona 5 fan assets and the owner's
 * stylized portrait. Replacing a file under src/assets/p5 with other art must
 * not require editing any page or component: import from here, never by path.
 */
export const p5Assets = {
  dialogue2,
  jokerFace,
  portrait,
} as const;

export const p5Audio = {
  background: "/audio/background.mp3",
  select: "/audio/select.mp3",
} as const;

export const p5Fonts = {
  display: "/fonts/Persona5main.ttf",
} as const;
