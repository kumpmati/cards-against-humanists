import { Game } from "boardgame.io";

export const Cahum: Game = {
  name: "cahum",

  // Function that returns the initial value of G.
  // setupData is an optional custom object that is
  // passed through the Game Creation API.
  setup: (ctx, setupData) => ({}),

  // Optional function to validate the setupData before
  // matches are created. If this returns a value,
  // an error will be reported to the user and match
  // creation is aborted.
  validateSetupData: (setupData, numPlayers) => "setupData is not valid!",

  // Function that allows you to tailor the game state to a specific player.
  playerView: (G, ctx, playerID) => {},

  // The seed used by the pseudo-random number generator.
  seed: "teekkarilakki",

  phases: {},

  // The minimum and maximum number of players supported
  // (This is only enforced when using the Lobby server component.)
  minPlayers: 2,

  // Disable undo feature for all the moves in the game
  disableUndo: true,
};
