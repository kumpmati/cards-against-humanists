import Head from "next/head";
import React from "react";
import { ArrowLeft, RefreshCw, RotateCw } from "react-feather";
import Button from "../../components/Button";
import GameListing from "../../components/GameListing/GameListing";
import { useGameList } from "./hooks";

import styles from "./styles.module.css";

const GameBrowser = ({ cardPacks }) => {
  const { games, refresh } = useGameList();

  return (
    <main>
      <Head>
        <title>Cahum | Game browser</title>
      </Head>

      <nav>
        <Button href="/join" text="Back" Icon={ArrowLeft} />
      </nav>

      <div className="content">
        <div id={styles.header}>
          <h1 className="title">Public games</h1>
          <p>Join forces with random people across the internet</p>
        </div>

        <Button onClick={refresh} text="Refresh" Icon={RefreshCw} iconRight />

        <section>
          <ul className={styles.list}>
            {games.map((game) => (
              <GameListing game={game} cardPacks={cardPacks} />
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default GameBrowser;
