import { useContext } from "react";
import Card from "../../../../../components/Card/Card";
import { PlayContext } from "../Play";

import styles from "./style.module.css";

const Table = () => {
  const { stage, isCzar, game } = useContext(PlayContext);

  const question = game.G.table.question;

  return (
    <div className={styles.table}>
      {isCzar && <h1>You are the Czar</h1>}
      <div>{question && <Card card={question} />}</div>
    </div>
  );
};

export default Table;
