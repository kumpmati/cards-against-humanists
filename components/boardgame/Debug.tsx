import { Client } from "boardgame.io/react";
import { SocketIO } from "boardgame.io/multiplayer";
import { Cahum } from "../../game";

const Debug = () => {
  const url = process.env.NEXT_PUBLIC_API_URL;

  const Game = Client({
    game: Cahum,
    board: () => null,
    multiplayer: SocketIO({ server: url }),
  });
  return <Game />;
};

export default Debug;
