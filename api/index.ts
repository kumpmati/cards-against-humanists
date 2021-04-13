export const setMatchID = (id: string) =>
  localStorage.setItem("cahum-match-id", id);

export const getMatchID = () => localStorage.getItem("cahum-match-id");

export const setPlayerInfo = (data: PlayerInfo) =>
  localStorage.setItem("cahum-player-info", JSON.stringify(data));

export const getPlayerInfo = (): PlayerInfo =>
  JSON.parse(localStorage.getItem("cahum-player-info"));

export interface PlayerInfo {
  token: string;
  playerID: string;
  playerName: string;
}
