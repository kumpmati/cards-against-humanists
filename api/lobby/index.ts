import axios from "axios";
import { getMatchID, getPlayerInfo, setMatchID, setPlayerInfo } from "..";
import { API_URL } from "../constants";
import {
  CreateMatchOptions,
  GetMatchOptions,
  JoinMatchOptions,
  LeaveMatchOptions,
} from "./types";

export const createMatch = async (opts: CreateMatchOptions) => {
  const response = await axios.post(`${API_URL}/games/cahum/create`, opts);
  const { matchID } = response.data;

  setMatchID(matchID);

  return matchID;
};

export const getMatch = async (opts: GetMatchOptions) => {
  try {
    const res = await axios.get(
      `${API_URL}/games/cahum/${opts.matchID.toLowerCase()}`
    );
    return res.data;
  } catch {
    return null;
  }
};

export const joinMatch = async (id: string, opts: JoinMatchOptions) => {
  try {
    const res = await axios.post(
      `${API_URL}/games/cahum/${id.toLowerCase()}/join`,
      opts
    );
    const { playerCredentials } = res.data;

    setMatchID(id);
    setPlayerInfo({
      playerID: opts.playerID,
      playerName: opts.playerName,
      token: playerCredentials,
    });

    return playerCredentials;
  } catch {
    return null;
  }
};

export const leaveMatch = async (id: string, opts: LeaveMatchOptions) => {
  try {
    const res = await axios.post(`${API_URL}/games/cahum/${id}/leave`, opts);
    return res.data;
  } catch {
    return null;
  }
};

export const leaveCurrentMatch = async () => {
  const info = getPlayerInfo();

  const res = await leaveMatch(getMatchID(), {
    playerID: info.playerID,
    credentials: info.token,
  });

  if (res) setMatchID(null);
  return res;
};
