// helper
const safe = (obj, data) => (obj ? data : {});

/*
 * Compare two possibly nested objects based on value
 */
export const compareValues = (obj1, obj2) =>
  JSON.stringify(obj1) === JSON.stringify(obj2);

/*
 * Parse data needed for PlayerList component from game data
 */
export const parsePlayerData = data =>
  safe(data, {
    players: data.players,
    current_czar: data.game.current_czar,
    game_status: data.game.game_status,
    host: data.game.host,
  });

/*
 * Parse data needed for Table component from game data
 */
export const parseTableData = data =>
  safe(data, {
    current_question: data.table.current_question,
    submitted_cards: data.table.submitted_cards,
    current_czar: data.game.current_czar,
    game_status: data.game.game_status,
  });

/*
 * Parse data needed for Hand component from game data
 */
export const parseHandData = data =>
  safe(data, {
    cards: data.table.cards,
    current_question: data.table.current_question,
    current_czar: data.game.current_czar,
    game_status: data.game.game_status,
  });
