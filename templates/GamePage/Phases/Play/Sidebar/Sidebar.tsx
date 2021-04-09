import { useContext, useState } from "react";
import { Menu, WifiOff, X } from "react-feather";
import Button from "../../../../../components/Button";
import { PlayContext } from "../Play";
import InGamePlayerList from "./InGamePlayerList";

import styles from "./style.module.css";

export const Sidebar = () => {
  const [visible, setVisible] = useState(false);
  const { game, G, ctx } = useContext(PlayContext);
  const round = G.state.round;
  const points = G.points;
  const players = game.matchData as any[];

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

      <div className={containerClassNames}>
        <div className={contentClassName}>
          <div className={styles.content__info}>
            <p>
              Round <b>{round}</b>
            </p>
          </div>
          <h2>Players</h2>
          <InGamePlayerList />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
