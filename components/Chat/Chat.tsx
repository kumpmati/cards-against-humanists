import React, { useState } from "react";
import { Send } from "react-feather";
import Button from "../Button";
import TextInput from "../TextInput/TextInput";
import styles from "./style.module.css";

const Chat = ({ game }) => {
  const textState = useState("");
  const [text, setText] = textState;

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
        <TextInput state={textState} id="input" onPressEnter={send} />
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
    <li>
      <p className={styles.messages__message}>
        <b>{sender}</b>: {text}
      </p>
    </li>
  );
};

interface Message {
  id: string;
  sender: string;
  payload: string;
}
