import Head from "next/head";
import { ArrowLeft } from "react-feather";
import { useAPI } from "../../../api/websocket";
import { getToken } from "../../../api/auth";
import Button from "../../elements/Button";

const LobbyPage = () => {
  const api = useAPI("lobby");
  const { onConnect, onEvent, sendEvent } = api;

  onConnect(() => {
    sendEvent("auth", getToken());
  });

  onEvent("error", console.error);

  return (
    <main>
      <Head>
        <title>Cards Against Humanists | Lobby</title>
      </Head>

      <nav>
        <Button href="/" text="Leave" Icon={ArrowLeft} />
      </nav>

      <div className="container">
        <h1>Lobby</h1>
      </div>
    </main>
  );
};

export default LobbyPage;
