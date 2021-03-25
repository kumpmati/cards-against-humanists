import { Client } from "boardgame.io/react";
import { SocketIO } from "boardgame.io/multiplayer";
import { Cahum } from "../../game";
import { getMatchID, getPlayerToken } from "../../api";
import { useEffect, useState } from "react";
import Board from "./Board";

const Debug = () => {
  const [matchID, setMatchID] = useState(null);
  const [playerToken, setPlayerToken] = useState(null);

  useEffect(() => {
    setMatchID(getMatchID());
    setPlayerToken(getPlayerToken());
  }, []);

  const url = process.env.NEXT_PUBLIC_API_URL;

  const Game = Client({
    game: Cahum,
    board: Board,
    multiplayer: SocketIO({ server: url }),
  });

  return <Game playerID={"0"} matchID={matchID} credentials={playerToken} />;
};

export default Debug;
