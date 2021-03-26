import React from "react";
import Chat from "../../../../components/Chat/Chat";
import styles from "./style.module.css";
import PlayerList from "../../../../components/PlayerList/PlayerList";
import RoomCode from "./RoomCode";

const WaitForPlayers = (props: any) => {
  return (
    <main className={styles.container}>
      <section className={styles.main}>
        <RoomCode matchID={props.matchID} />
        <PlayerList items={props.matchData} />
      </section>
      <section className={styles.chat}>
        <Chat game={props} />
      </section>
    </main>
  );
};

export default WaitForPlayers;
