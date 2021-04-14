import Head from "next/head";
import { ArrowLeft } from "react-feather";
import Button from "../../components/Button";
import CreateGameForm from "./CreateGameForm";
import styles from "./Create.module.css";
import { useRouter } from "next/router";
import { createMatch, joinMatch } from "../../api/lobby";
import { GameFormData } from "./CreateGameForm/types";
import { randomPlayerName } from "../../util";
import { FC } from "react";

const CreatePage: FC<Props> = ({ cardPacks }) => {
  const { push } = useRouter();

  const onSubmit = async (data: GameFormData) => {
    if (!Array.isArray(data.packs)) data.packs = [data.packs]; // quick fix

    const matchID = await createMatch({
      numPlayers: data.numPlayers,
      setupData: data,
      unlisted: data.private,
    });

    await joinMatch(matchID, {
      playerID: "0", // creator always joins as the first player
      playerName: prompt("Choose a name:") || randomPlayerName(),
    });

    push("/game");
  };

  return (
    <main>
      <Head>
        <title>Cahum | Create game</title>
      </Head>

      <nav>
        <Button href="/" text="Back" Icon={ArrowLeft} />
      </nav>

      <div className="content">
        <div id={styles.header}>
          <h1 className="title">Create game</h1>
          <p>Create a fresh game and start inviting people</p>
        </div>
        <div id={styles.content}>
          <CreateGameForm cardPacks={cardPacks} onSubmit={onSubmit} />
        </div>
      </div>
    </main>
  );
};

export default CreatePage;

interface Props {
  cardPacks: {
    name: string;
    value: string;
  }[];
}
