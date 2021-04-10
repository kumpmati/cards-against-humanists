import React, { useState } from "react";
import { Eye, EyeOff } from "react-feather";
import Button from "../../../../components/Button";
import styles from "./style.module.css";

const RoomCode = ({ game }) => {
  const matchID = game.matchID;
  const isPrivateGame = game.G?.settings?.private;

  const numTotalPlayers = game.ctx.numPlayers;
  const numJoinedPlayers = game.matchData.filter((p: any) => p.isConnected)
    .length;

  const [showCode, setShowCode] = useState(!isPrivateGame);

  return (
    <div className={styles.matchInfo}>
      <span className={styles.waitingText}>
        <h1>Waiting for players</h1>
        <p>
          ({numJoinedPlayers}/{numTotalPlayers})
        </p>
      </span>

      <p>Room code:</p>
      <div className={styles.code}>
        <input
          className={styles.code__input}
          type={showCode ? "text" : "password"}
          value={matchID}
          readOnly
          onClick={() => {
            navigator.clipboard.writeText(matchID);
          }}
          title="Click to copy to clipboard"
        />
        <Button
          Icon={showCode ? Eye : EyeOff}
          onClick={() => setShowCode((s) => !s)}
        />
      </div>
    </div>
  );
};

export default RoomCode;
