import { FC } from "react";
import styles from "./style.module.css";

const PlayerList: FC<Props> = ({ items = [], noTitle }) => {
  return (
    <div className={styles.playerList}>
      {!noTitle && <h2>Players:</h2>}
      <ul className={styles.list}>
        {items
          ?.filter((i) => i.isConnected)
          .map((item) => (
            <li className={styles.list__item} key={item.id}>
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PlayerList;

interface Props {
  items: any[];
  noTitle?: boolean;
}
