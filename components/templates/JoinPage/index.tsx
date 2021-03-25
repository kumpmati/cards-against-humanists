import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { ArrowLeft } from "react-feather";
import { getToken, isAuthToken, setToken } from "../../../api/auth";
import { API_JOIN_URL } from "../../../api/constants";
import { getMatch, joinMatch } from "../../../api/lobbyClient";
import Button from "../../elements/Button";

import styles from "./Join.module.css";
import JoinGameForm, { JoinFormData } from "./JoinGameForm";

const JoinPage: FC = () => {
  const { push } = useRouter();

  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: JoinFormData) => {
    const match = await getMatch({ matchID: data.roomCode });

    const freeSpot = match.players?.find((spot: any) => !spot.isConnected);

    if (!freeSpot) {
      setError("Game is full");
      return;
    }

    await joinMatch(data.roomCode, {
      playerID: freeSpot.id.toString(),
      playerName: prompt("Enter name:"),
    });

    setError(null);
    push("/game");
  };

  return (
    <main>
      <Head>
        <title>Cards Against Humanists | Join game</title>
      </Head>

      <nav>
        <Button href="/" text="Back" Icon={ArrowLeft} />
      </nav>

      <div className="content">
        <div id={styles.header}>
          <h1 className="title">Join game</h1>
          <p>Join an existing game</p>
        </div>
        <JoinGameForm
          close={() => setShowPassword(false)}
          showPassword={showPassword}
          onSubmit={onSubmit}
        />
        {error && <p>{error}</p>}
      </div>
    </main>
  );
};

export default JoinPage;
