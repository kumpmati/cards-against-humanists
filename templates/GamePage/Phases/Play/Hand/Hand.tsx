import React, { useContext } from "react";
import { Check } from "react-feather";
import Button from "../../../../../components/Button";
import Card from "../../../../../components/Card/Card";
import { PlayStages } from "../../../../../game/phases/play";
import { AnswerCard } from "../../../../../game/types";
import { PlayContext } from "../Play";
import { useCardSelect } from "./hooks";

import styles from "./style.module.css";

const Hand = ({ close }) => {
  const { isCzar, stage, G, game } = useContext(PlayContext);
  const { hand, table } = G;

  const requiredCards = table.question?.required_cards;

  const { isSelected, select, selected, reset } = useCardSelect(requiredCards);
  const correctNumCardsSelected = selected.length == requiredCards;

  const submit = () => {
    if (correctNumCardsSelected) {
      game.moves.submitAnswer(selected);
      reset();
      close();
    }
  };

  const canSubmit = stage === PlayStages.submitAnswer;

  const handClassNames = `${styles.hand} ${
    !canSubmit ? styles["hand--disabled"] : ""
  }`;

  return (
    <div className={handClassNames}>
      <div className={styles.submit}>
        {!isCzar && (
          <Button
            Icon={Check}
            text="Submit"
            onClick={submit}
            iconRight
            disabled={
              !correctNumCardsSelected
                ? `This question requires ${requiredCards} cards`
                : ""
            }
          />
        )}
      </div>

      <div className={styles.hand__inner}>
        {hand.map((card: AnswerCard) => {
          const SelectionElement = () => {
            const number = isSelected(card);
            if (number === -1) return null;

            return (
              <p>{requiredCards === 1 ? <Check size={18} /> : number + 1}</p>
            );
          };

          // card wrapper class names
          const cardClassNames = `${styles.card} ${
            !!SelectionElement() ? styles["card--selected"] : styles.card
          }`;

          return (
            <div key={card.id} className={cardClassNames}>
              <Card
                card={card}
                selected={SelectionElement()}
                onClick={() => select(card)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hand;
