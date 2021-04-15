import Head from "next/head";
import { FC } from "react";
import { ArrowLeft } from "react-feather";
import Button from "../../components/Button";
import CreateCardForm from "./CreateCardForm/CreateCardForm";
import styles from "./styles.module.css";

const CreateCardPage: FC<Props> = ({ cardPacks }) => {
  return (
    <main>
      <Head>
        <title>Cahum | Create cards</title>
      </Head>

      <nav>
        <Button href="/cards" text="Back" Icon={ArrowLeft} />
      </nav>

      <div className="content">
        <div id={styles.header}>
          <h1 className="title">Create cards</h1>
          <p>Add your funny cards to the game</p>
        </div>

        <CreateCardForm cardPacks={cardPacks} />
      </div>
    </main>
  );
};

export default CreateCardPage;

interface Props {
  cardPacks: { name: string; code: string; editable: boolean }[];
}
