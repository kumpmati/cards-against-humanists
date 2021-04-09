import { Play } from "react-feather";
import Button from "../../../../../components/Button";

import styles from "./style.module.css";

const HostPanel = (props: any) => {
  const playerList = props.matchData as any[];

  const numPlayers = playerList.length;
  const numPlayersConnected = playerList.reduce(
    (acc, curr) => acc + (curr.name ? 1 : 0),
    0
  );

  return (
    <div className={styles.container}>
      <h1>You are the host</h1>

      <ul className={styles.settings}>
        <li>
          <Button
            iconRight
            Icon={Play}
            onClick={() => props.moves.startGame()}
            text="Start Game"
            disabled={
              numPlayersConnected < numPlayers
                ? "Cannot start game until all players have connected"
                : ""
            }
          />
        </li>
      </ul>
    </div>
  );
};

export default HostPanel;
