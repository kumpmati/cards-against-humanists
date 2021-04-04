import React, { useContext } from "react";
import Card from "../../../../../components/Card/Card";
import { PlayStages } from "../../../../../game/phases/play";
import { AnswerCard } from "../../../../../game/types";
import { PlayContext } from "../Play";

import styles from "./style.module.css";

const Hand = ({ close }) => {
  const { stage, game, G } = useContext(PlayContext);
  const { hand } = G;

  const submitCard = (card: AnswerCard) => {
    game.moves.submitAnswer([card]);
    close();
  };

  const canSubmit = stage === PlayStages.chooseCard;

  const handClassNames = `${styles.hand} ${
    !canSubmit ? styles["hand--disabled"] : ""
  }`;

  return (
    <div className={handClassNames}>
      {hand.map((card: AnswerCard) => (
        <Card key={card.text} card={card} onClick={() => submitCard(card)} />
      ))}
    </div>
  );
};

export default Hand;
