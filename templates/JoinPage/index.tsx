import Head from "next/head";
import { useRouter } from "next/router";
import { AxiosError } from "axios";
import { FC, useState } from "react";
import { ArrowLeft } from "react-feather";
import { getMatch, joinMatch } from "../../api/lobby";
import Button from "../../components/Button";

import styles from "./Join.module.css";
import JoinGameForm, { JoinFormData } from "./JoinGameForm";

const JoinPage: FC = () => {
  const { push } = useRouter();

  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: JoinFormData) => {
    const match = await getMatch({ matchID: data.roomCode });
    if (!match) return setError("Game not found");

    const availableSpot = match.players?.find((spot: any) => !spot.name);
    if (!availableSpot) return setError("Game is full");

    await joinMatch(data.roomCode, {
      playerID: availableSpot?.id.toString(),
      playerName: "abcde"[availableSpot?.id],
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
