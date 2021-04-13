import { Game } from "boardgame.io";
import play from "./phases/play";
import waitForPlayers from "./phases/waitForPlayers";
import { CahumG } from "./types";

/**
 * CLIENT-SIDE
 */
export const Cahum: Game<CahumG> = {
  name: "cahum",

  // The seed used by the pseudo-random number generator.
  seed: "teekkarilakki",

  phases: {
    waitForPlayers,
    play: play,
  },
};
