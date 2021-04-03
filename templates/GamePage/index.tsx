import { Client } from "boardgame.io/react";
import { SocketIO } from "boardgame.io/multiplayer";
import { useLayoutEffect, useState } from "react";
import { getMatchID, getPlayerInfo, PlayerInfo } from "../../api";
import { Cahum } from "../../game";
import Board from "./Board";

const GameRenderer = () => {
  const [matchID, setMatchID] = useState(null);
  const [playerInfo, setPlayerInfo] = useState<PlayerInfo>(null);

  useLayoutEffect(() => {
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

export default GameRenderer;
