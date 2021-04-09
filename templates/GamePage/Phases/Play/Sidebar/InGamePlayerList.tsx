import { useContext } from "react";
import { WifiOff } from "react-feather";
import { PlayContext } from "../Play";
import styles from "./style.module.css";

const InGamePlayerList = () => {
  const { game, G, ctx } = useContext(PlayContext);
  const points = G.points;
  const players = game.matchData as any[];

  return (
    <ul className={styles.players}>
      {players.map((player) => {
        const isYou = game?.playerID == player.id;
        const playerPoints = points[player.id] ?? 0;
        const playerIsCzar = ctx.currentPlayer == player.id;
        const isConnected = player.isConnected;

        const playerClassNames = `
      ${styles.player}
      ${playerIsCzar ? styles["player--czar"] : ""}
      ${!isConnected ? styles["player--disconnected"] : ""}  
    `;

        return (
          <li
            title={playerIsCzar ? "Czar" : ""}
            key={player.id}
            className={playerClassNames}>
            <p className={styles.player__name}>
              {player.name} {isYou && "(You)"}
            </p>

            {isConnected ? (
              <p className={styles.player__points}>Score: {playerPoints}</p>
            ) : (
              <WifiOff />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default InGamePlayerList;
