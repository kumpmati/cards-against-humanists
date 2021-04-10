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
        moves: {
          submitAnswer: { move: submitAnswer, client: false },
        },
      },

      // Czar picks the winner
      [PlayStages.chooseWinner]: {
        moves: {
          chooseWinner: { move: chooseWinner, client: false },
        },
      },

      // Czar reveals answers one by one
      [PlayStages.czarReveals]: {
        moves: {
          revealCard: { move: revealCard, client: false },
        },
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
