import Head from "next/head";
import { ArrowLeft } from "react-feather";
import Button from "../../elements/Button";
import CreateGameForm from "./CreateGameForm";
import styles from "./Create.module.css";
import { useRouter } from "next/router";
import { createMatch } from "../../../api/lobbyClient";
import { setMatchID } from "../../../api";
import { GameFormData } from "./CreateGameForm/types";

const CreatePage = () => {
  const { push } = useRouter();

  const onSubmit = async (data: GameFormData) => {
    const matchID = await createMatch({
      numPlayers: data.maxPlayers,
      setupData: data,
    });
    setMatchID(matchID); // save match id into local storage

    push("/lobby");
  };

  return (
    <main>
      <Head>
        <title>Cards Against Humanists | Create game</title>
      </Head>

      <nav>
        <Button href="/" text="Back" Icon={ArrowLeft} />
      </nav>

      <div className="container">
        <div id={styles.header}>
          <h1 className="title">Create game</h1>
          <p>Create a fresh game and start inviting people</p>
        </div>
        <div id={styles.content}>
          <CreateGameForm onSubmit={onSubmit} />
        </div>
      </div>
    </main>
  );
};

export default CreatePage;
