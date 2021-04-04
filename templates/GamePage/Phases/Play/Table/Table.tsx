import { useContext } from "react";
import { PlayContext } from "../Play";

import styles from "./style.module.css";

const Table = () => {
  const { stage, isCzar } = useContext(PlayContext);

  return (
    <div className={styles.table}>
      {isCzar && <h1>You are the Czar</h1>}
      <div></div>
    </div>
  );
};

export default Table;
