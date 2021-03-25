import axios from "axios";
import { setMatchID, setPlayerInfo } from "..";
import { API_URL } from "../constants";
import { CreateMatchOptions, GetMatchOptions, JoinMatchOptions } from "./types";

export const createMatch = async (opts: CreateMatchOptions) => {
  const response = await axios.post(`${API_URL}/games/cahum/create`, opts);
  const { matchID } = response.data;

  setMatchID(matchID);

  return matchID;
};

export const getMatch = async (opts: GetMatchOptions) => {
  const res = await axios.get(`${API_URL}/games/cahum/${opts.matchID}`);
  return res.data;
};

export const joinMatch = async (id: string, opts: JoinMatchOptions) => {
  const res = await axios.post(`${API_URL}/games/cahum/${id}/join`, opts);
  const { playerCredentials } = res.data;

  setMatchID(id);
  setPlayerInfo({
    playerID: opts.playerID,
    playerName: opts.playerName,
    token: playerCredentials,
  });

  return playerCredentials;
};
