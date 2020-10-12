// gets nested object fields safely
const get = (obj, ...args) =>
  args.reduce((obj, level) => obj && obj[level], obj);

// compares two objects by value
export const compareValues = (obj1, obj2) =>
  JSON.stringify(obj1) === JSON.stringify(obj2);

// helpers
const getGameStatus = d => get(d, "game", "game_status");
const getCurrentCzar = d => get(d, "game", "current_czar");
const getCurrentQuestion = d => get(d, "table", "current_question");

/*
 * Parse data needed for PlayerList component from game data
 */
export const parsePlayerData = d => ({
  players: get(d, "players"),
  host: get(d, "game", "host"),
  timer_end_date: get(d, "game", "timer_end_date"),
  current_czar: getCurrentCzar(d),
  game_status: getGameStatus(d),
});

/*
 * Parse data needed for Table component from game data
 */
export const parseTableData = d => ({
  submitted_cards: get(d, "table", "submitted_cards"),
  winning_cards: get(d, "table", "winning_cards"),
  current_question: getCurrentQuestion(d),
  current_czar: getCurrentCzar(d),
  game_status: getGameStatus(d),
});

/*
 * Parse data needed for Hand component from game data
 */
export const parseHandData = d => ({
  cards: get(d, "table", "cards"),
  current_question: getCurrentQuestion(d),
  current_czar: getCurrentCzar(d),
  game_status: getGameStatus(d),
});
