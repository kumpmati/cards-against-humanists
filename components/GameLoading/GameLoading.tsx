import { useEffect, useState } from "react";
import { ArrowLeft, Loader } from "react-feather";
import { getMatchID } from "../../api";
import { getMatch } from "../../api/lobby";
import Button from "../Button";
import styles from "./style.module.css";

const GameLoading = () => {
  const [text, setText] = useState("");

  useEffect(() => {
    (async () => {
      const match = await getMatch({ matchID: getMatchID() });
      if (!match) setText("Game not found");
    })();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Connecting</h1>
      <div className={styles.loader}>
        <Loader />
      </div>
      <div className={styles.info}>
        <p>{text}</p>
        <Button href="/" text="Back" Icon={ArrowLeft} />
      </div>
    </div>
  );
};

export default GameLoading;
