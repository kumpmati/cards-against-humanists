import Head from "next/head";
import { ArrowLeft } from "react-feather";
import Button from "../../elements/Button";
import CreateGameForm from "./CreateGameForm";
import styles from "./Create.module.css";
import axios from "axios";

const CreatePage = () => {
  const onSubmit = async (data: any) => {
    const response = await axios.post(
      "http://localhost:9000/api/game/create",
      data
    );

    console.log(response.data);
  };

  return (
    <main>
      <Head>
        <title>Cards Against Humanists | Create game</title>
      </Head>

      <div className="container">
        <Button href="/" text="Back" Icon={ArrowLeft} />
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
