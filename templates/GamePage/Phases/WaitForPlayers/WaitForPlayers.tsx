import React from "react";
import Chat from "../../../../components/Chat/Chat";
import styles from "./style.module.css";
import PlayerList from "../../../../components/PlayerList/PlayerList";
import RoomCode from "./RoomCode";

const WaitForPlayers = (props: any) => {
  return (
    <div className={styles.container}>
      <section className={styles.main}>
        <RoomCode matchID={props.matchID} />
        <PlayerList items={props.matchData} noTitle />
      </section>
      <section className={styles.chat}>
        <Chat game={props} />
      </section>
    </div>
  );
};

export default WaitForPlayers;
