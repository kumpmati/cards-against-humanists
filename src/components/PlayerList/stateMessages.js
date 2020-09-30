/*
 * Messages based on game status
 */
export default {
	WAITING_FOR_PLAYERS: () => "Waiting for players...",
	START_GAME: () => "Starting game",
	SHOW_WINNER: () => "Winner:",
	GAME_LOOP: () => "New round...",

	CZAR_CHOOSES_WINNER: (isCzar) =>
		isCzar ? "Choose a winner" : "The Czar is choosing a winner",

	PLAYERS_SUBMIT_ANSWERS: (isCzar) =>
		isCzar ? "Wait for players to submit their cards" : "Submit your card(s)",
};
