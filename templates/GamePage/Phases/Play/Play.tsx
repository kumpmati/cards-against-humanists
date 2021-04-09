import React, { createContext, useEffect, useState } from "react";

import Hand from "./Hand/Hand";
import Sidebar from "./Sidebar/Sidebar";
import Table from "./Table/Table";

import styles from "./style.module.css";
import Button from "../../../../components/Button";
import { ChevronDown, ChevronUp } from "react-feather";
import { PlayContextI } from "./types";

export const PlayContext = createContext<PlayContextI>({
  isCzar: false,
  stage: "",
  G: null,
  ctx: null,
  game: null,
});

const Play = (game: any) => {
  const [handVisible, setHandVisible] = useState(false);

  const { playerID, ctx, G } = game;
  const stage = ctx.activePlayers?.[playerID];
  const isCzar = ctx.currentPlayer == playerID;

  const state: PlayContextI = {
    stage,
    isCzar,
    G,
    ctx,
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
        <section
          className={`${styles.hand} ${
            handVisible ? styles["hand--open"] : ""
          }`}>
          <Hand close={() => setHandVisible(false)} />
        </section>
        <div className={styles.hand__toggle}>
          <Button
            Icon={handVisible ? ChevronDown : ChevronUp}
            onClick={() => setHandVisible((v) => !v)}
          />
        </div>
      </div>
    </PlayContext.Provider>
  );
};

export default Play;
