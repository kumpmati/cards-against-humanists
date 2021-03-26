import React, { useState } from "react";
import { Send } from "react-feather";
import Button from "../Button";
import styles from "./style.module.css";

const Chat = ({ game }) => {
  const [text, setText] = useState("");

  const getPlayerName = (id: string) =>
    game.matchData.find((p: any) => p.id.toString() === id)?.name;

  const send = () => {
    if (text.trim() === "") return;
    game.sendChatMessage(text);
    setText("");
  };

  return (
    <div className={styles.chat}>
      <ul className={styles.messages}>
        {game.chatMessages?.map((msg: Message) => (
          <ChatMessage
            key={msg.id}
            text={msg.payload}
            sender={getPlayerName(msg.sender)}
          />
        ))}
      </ul>
      <div className={styles.input}>
        <input
          className={styles.input__text}
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => e.key === "Enter" && send()}
        />
        <Button Icon={Send} onClick={send}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default Chat;

const ChatMessage = ({ text, sender }) => {
  return (
    <p className={styles.messages__message}>
      <b>{sender}</b>: {text}
    </p>
  );
};

interface Message {
  id: string;
  sender: string;
  payload: string;
}
