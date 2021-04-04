import React, { useContext } from "react";
import Card from "../../../../../components/Card/Card";
import { AnswerCard } from "../../../../../game/types";

import { PlayContext } from "../Play";

const Hand = () => {
  const { game } = useContext(PlayContext);
  const { hand } = game.G;
  return (
    <div>
      {hand.map((card: AnswerCard) => (
        <Card key={card.text} card={card} onClick={() => console.log(card)} />
      ))}
    </div>
  );
};

export default Hand;
