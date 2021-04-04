import React, { createContext } from "react";

import Hand from "./Hand/Hand";
import Sidebar from "./Sidebar/Sidebar";
import Table from "./Table/Table";

import styles from "./style.module.css";
import { CahumG } from "../../../../game/types";

export const PlayContext = createContext<{
  isCzar: boolean;
  stage: string;
  G: CahumG;
  game: any;
}>({
  isCzar: false,
  stage: "",
  G: null,
  game: null,
});

const Play = (game: any) => {
  const { playerID, ctx } = game;
  const stage = ctx.activePlayers?.[playerID];
  const isCzar = ctx.currentPlayer == playerID;

  const state = {
    stage,
    isCzar,
    G: game.G,
    game,
  };

  return (
    <PlayContext.Provider value={state}>
      <div className={styles.container}>
        <section className={styles.sidebar}>
          <Sidebar />
        </section>
        <section className={styles.table}>
          <Table />
        </section>
        <section className={styles.hand}>
          <Hand />
        </section>
      </div>
    </PlayContext.Provider>
  );
};

export default Play;
