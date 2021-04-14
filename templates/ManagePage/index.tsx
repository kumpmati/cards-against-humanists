import Head from "next/head";
import React, { FC } from "react";
import { ArrowLeft } from "react-feather";
import Button from "../../components/Button";
import CreateCardForm from "./CreateCardForm/CreateCardForm";
import styles from "./style.module.css";

const ManagePage: FC<Props> = ({ cardPacks }) => {
  return (
    <main className={styles.container}>
      <Head>
        <title>Cahum | Manage</title>
      </Head>

      <nav>
        <Button href="/" text="Back" Icon={ArrowLeft} />
      </nav>

      <div className="content">
        <div id={styles.header}>
          <h1 className="title">Manage</h1>
          <p>Add new cards and stuff</p>
        </div>

        <section>
          <CreateCardForm cardPacks={cardPacks} />
        </section>
      </div>
    </main>
  );
};

export default ManagePage;

interface Props {
  cardPacks: { name: string; value: string }[];
}
