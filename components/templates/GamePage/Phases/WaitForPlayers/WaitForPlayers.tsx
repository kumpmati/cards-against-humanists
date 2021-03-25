import { useState } from "react";
import styles from "./style.module.css";

const WaitForPlayers = (props: any) => {
  const [showCode, setShowCode] = useState(false);

  console.log(props);
  return (
    <main className={styles.container}>
      <section>
        <h1>Waiting for players...</h1>
      </section>
      <section>
        <ul className={styles.chat}>
          {props.chatMessages?.map((m: any) => (
            <p>{m}</p>
          ))}
        </ul>
      </section>
      <section className={styles.matchInfo}>
        <p>Room code:</p>
        <div className={styles.roomCode}>
          <input
            className={styles.roomCode__input}
            type={showCode ? "text" : "password"}
            value={props.matchID}
          />
          <button
            className={styles.roomCode__button}
            onClick={() => setShowCode(s => !s)}>
            {showCode ? "Hide" : "Show"} room code
          </button>
        </div>
      </section>
    </main>
  );
};

export default WaitForPlayers;
