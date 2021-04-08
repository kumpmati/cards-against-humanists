import { PhaseConfig } from "boardgame.io";
import { chooseWinner, revealCard, submitAnswer } from "./moves";

export enum PlayStages {
  submitAnswer = "submitAnswer",
  waitForAnswers = "waitForAnswers",

  czarReveals = "czarReveals",

  waitForCzar = "waitForCzar",
  chooseWinner = "chooseWinner",
}

/**
 * Phase where the actual gameplay happens
 */
const play: PhaseConfig = {
  turn: {
    stages: {
      // players other than the Czar submit their answers
      [PlayStages.submitAnswer]: {
        moves: { submitAnswer },
      },

      // Czar picks the winner
      [PlayStages.chooseWinner]: {
        moves: { chooseWinner },
      },

      // Czar reveals answers one by one
      [PlayStages.czarReveals]: {
        moves: { revealCard },
      },

      [PlayStages.waitForAnswers]: {
        moves: {},
      },

      [PlayStages.waitForCzar]: {
        moves: {},
      },
    },
  },
};

export default play;
