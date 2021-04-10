import React, { useState } from "react";
import Chat from "../../../../components/Chat/Chat";
import styles from "./style.module.css";
import PlayerList from "../../../../components/PlayerList/PlayerList";
import RoomCode from "./RoomCode";
import HostPanel from "./HostPanel/HostPanel";
import Button from "../../../../components/Button";
import { MessageSquare, Users, X } from "react-feather";

const WaitForPlayers = (game: any) => {
  const userIsHost = game.playerID == 0;

  const [showChat, setShowChat] = useState(false);
  const [showPlayers, setShowPlayers] = useState(false);

  const togglePlayers = () => {
    setShowPlayers((v) => !v);
    if (showChat) setShowChat(false);
  };
  const toggleChat = () => {
    setShowChat((v) => !v);
    if (showPlayers) setShowPlayers(false);
  };

  return (
    <>
      <div className={styles.mobileControls}>
        <span title={`${showPlayers ? "Hide" : "Show"} players`}>
          <Button Icon={showPlayers ? X : Users} onClick={togglePlayers} />
        </span>
        <span title={`${showChat ? "Hide" : "Show"} chat`}>
          <Button Icon={showChat ? X : MessageSquare} onClick={toggleChat} />
        </span>
      </div>

      <div className={styles.container}>
        <section className={styles.main}>
          <RoomCode game={game} />
          {userIsHost && (
            <section className={styles.hostPanel}>
              <HostPanel {...game} />
            </section>
          )}
        </section>

        <section
          className={`${styles.playerList} ${
            showPlayers ? styles["playerList--show"] : ""
          }`}>
          <h2>Players</h2>
          <PlayerList items={game.matchData} noTitle />
        </section>

        <section
          className={`${styles.chat} ${showChat ? styles["chat--show"] : ""}`}>
          <Chat game={game} />
        </section>
      </div>
    </>
  );
};

export default WaitForPlayers;
