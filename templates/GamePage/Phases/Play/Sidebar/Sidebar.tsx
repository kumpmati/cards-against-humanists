import { useContext, useState } from "react";
import { Menu, X } from "react-feather";
import Button from "../../../../../components/Button";
import { PlayContext } from "../Play";

import styles from "./style.module.css";

export const Sidebar = () => {
  const [visible, setVisible] = useState(false);
  const { isCzar, game } = useContext(PlayContext);

  const containerClassNames = `${styles.sidebar} ${
    visible ? styles["sidebar--visible"] : ""
  }`;

  const contentClassName = `${styles.content} ${
    visible ? styles["content--visible"] : ""
  }`;

  return (
    <>
      <div
        title={visible ? "Hide sidebar" : "Show sidebar"}
        className={styles.hamburger}>
        <Button
          Icon={visible ? X : Menu}
          onClick={() => setVisible((v) => !v)}
        />
      </div>

      {isCzar && (
        <div className={styles.czar}>
          <h1>You are the Czar</h1>
        </div>
      )}

      <div className={containerClassNames}>
        <div className={contentClassName}>
          <h3>Players</h3>
          <ul className={styles.players}>
            {game.matchData.map((player: any) => {
              return (
                <li key={player.id} className={styles.players__item}>
                  {player.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
