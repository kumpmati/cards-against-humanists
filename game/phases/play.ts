import { PhaseConfig } from "boardgame.io";

export enum PlayStages {
  submitAnswer = "submitAnswer",
  waitForAnswers = "waitForAnswers",

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
          submitAnswer: () => {},
        },
      },

      // Czar picks the winner
      [PlayStages.chooseWinner]: {
        moves: {
          chooseWinner: () => {},
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
