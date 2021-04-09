import { useContext, useState } from "react";
import { Menu, X } from "react-feather";
import Button from "../../../../../components/Button";
import { PlayContext } from "../Play";
import { PlayContextI } from "../types";

import styles from "./style.module.css";

export const Sidebar = () => {
  const [visible, setVisible] = useState(false);
  const { game, G, ctx } = useContext(PlayContext);
  const round = G.state.round;
  const points = G.points;

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
          <ul className={styles.players}>
            {game.matchData.map((player: any) => {
              const isYou = game?.playerID == player.id;
              const playerPoints = points[player.id] ?? 0;
              const playerIsCzar = ctx.currentPlayer == player.id;

              const playerClassNames = `${styles.player} ${
                playerIsCzar ? styles["player--czar"] : ""
              }`;

              return (
                <li
                  title={playerIsCzar ? "Czar" : ""}
                  key={player.id}
                  className={playerClassNames}>
                  <p className={styles.player__name}>
                    {player.name} {isYou ? "(You)" : ""}
                  </p>
                  <p className={styles.player__points}>Score: {playerPoints}</p>
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
