/*
 * Messages based on game status
 */
export default {
  WAITING_FOR_PLAYERS: () => "Odotetaan pelaajia...",
  START_GAME: () => "Aloitetaan peli...",
  SHOW_WINNER: () => "Voittaja:",
  GAME_LOOP: () => "Uusi kierros...",

  CZAR_CHOOSES_WINNER: isCzar =>
    isCzar ? "Valitse paras kortti" : "Czar valitsee voittajaa...",

  PLAYERS_SUBMIT_ANSWERS: isCzar =>
    isCzar
      ? "Odota, että muut pelaajat pelaavat korttinsa..."
      : "Pelaa korttisi...",
};
