import Head from "next/head";
import { ArrowLeft } from "react-feather";
import { useAPI } from "../../../api/websocket";
import { getToken } from "../../../api/auth";
import Button from "../../Button";
import { useState } from "react";
import { AuthToken } from "../../../api/websocket/types";

const LobbyPage = () => {
  const [roomCode, setRoomCode] = useState(null);

  const api = useAPI("lobby");
  const { onConnect, onEvent, sendEvent } = api;

  onConnect(() => sendEvent("auth", getToken()));

  onEvent("auth", (d: AuthToken) => setRoomCode(d.gameID));
  onEvent("message", console.log);
  onEvent("error", console.error);

  return (
    <main>
      <Head>
        <title>Cards Against Humanists | Lobby</title>
      </Head>

      <nav>
        <Button href="/" text="Leave" Icon={ArrowLeft} />
      </nav>

      <div className="content">
        <h1>Lobby</h1>
        <div>
          {roomCode && <p>Join link: https://cahum.xyz/join?code={roomCode}</p>}
        </div>
      </div>
    </main>
  );
};

export default LobbyPage;
