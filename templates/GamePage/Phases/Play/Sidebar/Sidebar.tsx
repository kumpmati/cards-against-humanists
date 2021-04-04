import { useContext, useState } from "react";
import { Menu, X } from "react-feather";
import Button from "../../../../../components/Button";
import { PlayContext } from "../Play";

import styles from "./style.module.css";

export const Sidebar = () => {
  const [visible, setVisible] = useState(false);
  const { game } = useContext(PlayContext);

  const players = game.matchData?.map((p: any) => p.name);

  const containerClassNames = `${styles.sidebar} ${
    visible ? styles["sidebar--visible"] : ""
  }`;

  const contentClassName = `${styles.content} ${
    visible ? styles["content--visible"] : ""
  }`;

  return (
    <>
      <div className={styles.hamburger}>
        <Button
          Icon={visible ? X : Menu}
          onClick={() => setVisible((v) => !v)}
        />
      </div>
      <div className={containerClassNames}>
        <div className={contentClassName}>
          <h2>Players</h2>
          <ul className={styles.players}>
            {players.map((player) => {
              return (
                <li className={styles.players__item} key={player}>
                  {player}
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
