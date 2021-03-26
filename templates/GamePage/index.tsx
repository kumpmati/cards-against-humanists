import { Client } from "boardgame.io/react";
import { SocketIO } from "boardgame.io/multiplayer";
import { useEffect, useState } from "react";
import { getMatchID, getPlayerInfo, PlayerInfo } from "../../api";
import { Cahum } from "../../game";
import Board from "./Board";

const Debug = () => {
  const [matchID, setMatchID] = useState(null);
  const [playerInfo, setPlayerInfo] = useState<PlayerInfo>(null);

  useEffect(() => {
    setMatchID(getMatchID());
    setPlayerInfo(getPlayerInfo());
  }, []);

  const url = process.env.NEXT_PUBLIC_API_URL;
  const Game = Client({
    game: Cahum,
    board: Board,
    multiplayer: SocketIO({ server: url }),
  });

  return (
    <Game
      matchID={matchID}
      playerID={playerInfo?.playerID}
      credentials={playerInfo?.token}
    />
  );
};

export default Debug;
