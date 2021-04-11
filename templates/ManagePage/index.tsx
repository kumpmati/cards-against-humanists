import Head from "next/head";
import React from "react";
import { ArrowLeft } from "react-feather";
import { createNewCard } from "../../api/cards";
import Button from "../../components/Button";
import CreateCardForm from "./CreateCardForm/CreateCardForm";
import styles from "./style.module.css";

const ManagePage = () => {
  return (
    <main className={styles.container}>
      <Head>
        <title>Cards Against Humanists | Manage</title>
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
          <CreateCardForm />
        </section>
      </div>
    </main>
  );
};

export default ManagePage;
