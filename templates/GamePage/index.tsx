import { Client } from "boardgame.io/react";
import { SocketIO } from "boardgame.io/multiplayer";
import { useEffect, useState } from "react";
import { getMatchID, getPlayerInfo, PlayerInfo } from "../../api";
import { Cahum } from "../../game";
import Board from "./Board";
import GameLoading from "../../components/GameLoading/GameLoading";
import Head from "next/head";

const GameRenderer = () => {
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
    loading: GameLoading,
    debug: false,
  });

  return (
    <>
      <Head>
        <title key="title">Cahum | Playing</title>
      </Head>
      <Game
        matchID={matchID}
        playerID={playerInfo?.playerID}
        credentials={playerInfo?.token}
      />
    </>
  );
};

export default GameRenderer;
