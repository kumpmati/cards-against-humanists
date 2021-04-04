import React, { useContext } from "react";
import Card from "../../../../../components/Card/Card";
import { AnswerCard } from "../../../../../game/types";
import { PlayContext } from "../Play";

import styles from "./style.module.css";

const Hand = () => {
  const { game } = useContext(PlayContext);
  const { hand } = game.G;

  const submitCard = (card: AnswerCard) => {
    game.moves.submitAnswer([card]);
  };

  return (
    <div className={styles.hand}>
      {hand.map((card: AnswerCard) => (
        <Card key={card.text} card={card} onClick={() => submitCard(card)} />
      ))}
    </div>
  );
};

export default Hand;
