import Head from "next/head";
import React from "react";
import { ArrowLeft, List, Plus } from "react-feather";
import Button from "../../components/Button";
import styles from "./style.module.css";

const ManagePage = () => {
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
          <Button href="/manage/browse" text="Browse cards" Icon={List} />
          <Button href="/manage/create" text="Create new cards" Icon={Plus} />
        </section>
      </div>
    </main>
  );
};

export default ManagePage;
