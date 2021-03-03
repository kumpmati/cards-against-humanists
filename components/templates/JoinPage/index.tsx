import axios from "axios";
import Head from "next/head";
import { FC } from "react";
import { ArrowLeft } from "react-feather";
import Button from "../../elements/Button";

import styles from "./Join.module.css";
import JoinGameForm from "./JoinGameForm";

const JoinPage: FC = () => {
  const onSubmit = async (data: any) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/game/join`,
      data
    );

    console.log(response.data);
  };

  return (
    <main>
      <Head>
        <title>Cards Against Humanists | Join game</title>
      </Head>

      <nav>
        <Button href="/" text="Back" Icon={ArrowLeft} />
      </nav>

      <div className="container">
        <div id={styles.header}>
          <h1 className="title">Join game</h1>
          <p>Join an existing game</p>
        </div>
        <JoinGameForm onSubmit={onSubmit} />
      </div>
    </main>
  );
};

export default JoinPage;
