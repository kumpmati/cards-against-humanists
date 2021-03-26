import styles from "./style.module.css";

const PlayerList = ({ items = [] }) => {
  return (
    <div className={styles.playerList}>
      <h2>Players:</h2>
      <ul className={styles.list}>
        {items
          ?.filter(i => i.isConnected)
          .map(item => (
            <li className={styles.list__item} key={item.id}>
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PlayerList;
