import { Play } from "react-feather";
import Button from "../../../../../components/Button";

import styles from "./style.module.css";

const HostPanel = (props: any) => {
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
          />
        </li>
      </ul>
    </div>
  );
};

export default HostPanel;
