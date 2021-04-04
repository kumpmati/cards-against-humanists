import { useContext, useState } from "react";
import { Menu, Settings, X } from "react-feather";
import Button from "../../../../../components/Button";
import { PlayContext } from "../Play";

import styles from "./style.module.css";

export const Sidebar = () => {
  const [visible, setVisible] = useState(false);
  const { game } = useContext(PlayContext);

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
          <div className={styles.settings}>
            <Button Icon={Settings} />
          </div>

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
