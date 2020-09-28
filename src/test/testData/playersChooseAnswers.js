export default {
  game_status: "TEST_PLAYERS_CHOOSE_ANSWERS",

  // name of czar
  current_czar: "Player 1",

  // list of players with scores
  players: [
    { name: "Player 1", score: 0 },
    { name: "Player 2", score: 1 },
    { name: "Player 3", score: 200 },
  ],

  current_question: {
    text: "___ is the best way to test your code.",
    required_cards: 2,
  },

  // cards in hand
  cards: [
    { text: "Unit tests" },
    { text: "Crying" },
    { text: "console.log" },
    { text: "Debugger" },
  ],
};
