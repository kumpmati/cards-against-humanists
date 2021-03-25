export const setMatchID = (id: string) =>
  localStorage.setItem("cahum-match-id", id);

export const getMatchID = () => localStorage.getItem("cahum-match-id");

export const setPlayerToken = (token: string) =>
  localStorage.setItem("cahum-player-token", token);

export const getPlayerToken = () => localStorage.getItem("cahum-player-token");
