import React from "react";
import Chat from "../../../../components/Chat/Chat";
import styles from "./style.module.css";
import PlayerList from "../../../../components/PlayerList/PlayerList";
import RoomCode from "./RoomCode";
import HostPanel from "./HostPanel/HostPanel";

const WaitForPlayers = (props: any) => {
  const userIsHost = props.playerID == 0;
  const isPrivateGame = props.G?.settings?.private;

  return (
    <div className={styles.container}>
      <section className={styles.main}>
        <RoomCode hideCode={isPrivateGame} matchID={props.matchID} />
        {userIsHost && (
          <section className={styles.hostPanel}>
            <HostPanel {...props} />
          </section>
        )}
      </section>

      <section className={styles.playerList}>
        <PlayerList items={props.matchData} noTitle />
      </section>

      <section className={styles.chat}>
        <Chat game={props} />
      </section>
    </div>
  );
};

export default WaitForPlayers;
