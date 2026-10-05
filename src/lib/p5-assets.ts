import card from "../assets/p5/card.webp";
import char1 from "../assets/p5/char1.webp";
import char2 from "../assets/p5/char2.webp";
import char3 from "../assets/p5/char3.webp";
import hero from "../assets/p5/hero.webp";
import icon1 from "../assets/p5/icon1.webp";
import icon2 from "../assets/p5/icon2.webp";
import icon3 from "../assets/p5/icon3.webp";
import jokerFace from "../assets/p5/jokerface2.webp";
import mainF from "../assets/p5/mainf.webp";
import mainM from "../assets/p5/mainm.webp";
import mainM2 from "../assets/p5/mainm2.webp";
import newSign from "../assets/p5/newsign.webp";
import chainChronicle from "../assets/p5/p5_joker_chain_chronicle_1.webp";
import promoChapter7 from "../assets/p5/p5mmchapter7promo2.webp";
import dialogue2 from "../assets/p5/p5s_protagonist_dialogue2.webp";
import dialogue3 from "../assets/p5/p5s_protagonist_dialogue3.webp";

/**
 * Single import point for third-party Persona 5 fan assets.
 * Replacing a file under src/assets/p5 with original art must not require
 * editing any page or component: import from here, never by direct path.
 */
export const p5Assets = {
  card,
  char1,
  char2,
  char3,
  hero,
  icon1,
  icon2,
  icon3,
  jokerFace,
  mainF,
  mainM,
  mainM2,
  newSign,
  chainChronicle,
  promoChapter7,
  dialogue2,
  dialogue3,
} as const;

export const p5Audio = {
  background: "/audio/background.mp3",
  select: "/audio/select.mp3",
} as const;

export const p5Fonts = {
  display: "/fonts/Persona5main.ttf",
} as const;
