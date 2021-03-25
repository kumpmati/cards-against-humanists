import { Game } from "boardgame.io";

export const Cahum: Game = {
  name: "cahum",

  phases: {
    a: {
      start: true,
      next: "b",
    },
    b: {},
  },
};
