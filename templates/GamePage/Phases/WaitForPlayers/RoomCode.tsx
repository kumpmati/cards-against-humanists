import React, { useState } from "react";
import { Eye, EyeOff } from "react-feather";
import Button from "../../../../components/Button";
import styles from "./style.module.css";

const RoomCode = ({ matchID }) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className={styles.matchInfo}>
      <h1>WAITING FOR PLAYERS</h1>

      <p>Room code:</p>
      <div className={styles.code}>
        <input
          className={styles.code__input}
          type={showCode ? "text" : "password"}
          value={matchID}
          readOnly
          onFocus={e => e.target.select()}
        />
        <Button
          Icon={showCode ? Eye : EyeOff}
          onClick={() => setShowCode(s => !s)}
        />
      </div>
    </div>
  );
};

export default RoomCode;
