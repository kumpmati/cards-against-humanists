/*
 * Messages based on game status
 */
export default {
  WAITING_FOR_PLAYERS: () => "Odotetaan pelaajia...",
  START_GAME: () => "Aloitetaan peliä...",
  SHOW_WINNER: () => "Voittaja:",
  GAME_LOOP: () => "Uusi kierros",

  CZAR_CHOOSES_WINNER: isCzar =>
    isCzar ? "Valitse voittaja" : "Czar valitsee voittajaa...",

  PLAYERS_SUBMIT_ANSWERS: isCzar =>
    isCzar ? "Odota, että pelaajat pelaavat korttinsa" : "Pelaa korttisi",
};
