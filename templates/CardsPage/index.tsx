import Head from "next/head";
import React from "react";
import { ArrowLeft, List, Plus } from "react-feather";
import Button from "../../components/Button";
import styles from "./style.module.css";

const CardsPage = () => {
  return (
    <main className={styles.container}>
      <Head>
        <title>Cahum | Cards</title>
      </Head>

      <nav>
        <Button href="/" text="Home" Icon={ArrowLeft} />
      </nav>

      <div className="content">
        <div id={styles.header}>
          <h1 className="title">Cards</h1>
          <p>Browse and submit cards</p>
        </div>

        <section>
          <Button href="/cards/browse" text="Browse" Icon={List} />
          <Button href="/cards/create" text="Create" Icon={Plus} />
        </section>
      </div>
    </main>
  );
};

export default CardsPage;
