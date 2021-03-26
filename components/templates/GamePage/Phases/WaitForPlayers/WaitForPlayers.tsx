import { useState } from "react";
import { Eye, EyeOff } from "react-feather";
import Chat from "../../../../Chat/Chat";
import Button from "../../../../Button";
import styles from "./style.module.css";

const WaitForPlayers = (props: any) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <main className={styles.container}>
      <Chat game={props} />
      <section>
        <h1>Waiting for players...</h1>
        <div className={styles.matchInfo}>
          <p>Room code:</p>
          <div className={styles.roomCode}>
            <input
              className={styles.roomCode__input}
              type={showCode ? "text" : "password"}
              value={props.matchID}
              readOnly
            />
            <Button
              Icon={showCode ? Eye : EyeOff}
              onClick={() => setShowCode(s => !s)}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default WaitForPlayers;
