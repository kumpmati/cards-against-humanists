import { FC } from "react";
import { QuestionCard, Card as CardType } from "../../game/types";

import styles from "./style.module.css";

/**
 * Card component
 */
const Card: FC<Props> = ({ card, onClick, selected }) => {
  const clickableClassName = !!onClick ? styles["card--clickable"] : "";
  const selectedClassName = selected ? styles["card--selected"] : "";

  if (cardIsQuestion(card)) {
    const className = `
      ${styles.card}
      ${styles["card--question"]}
      ${clickableClassName}
      ${selectedClassName}
    `;

    return (
      <div onClick={onClick} className={className}>
        <p>{card.text}</p>
        {card.required_cards > 1 && (
          <p className={styles.card__number}>Choose {card.required_cards}</p>
        )}
      </div>
    );
  }

  const className = `
    ${styles.card}
    ${clickableClassName}
    ${selectedClassName}
  `;

  return (
    <div onClick={onClick} className={className}>
      <p>{card.text}</p>
    </div>
  );
};

export default Card;

const cardIsQuestion = (card: CardType): card is QuestionCard =>
  card.hasOwnProperty("required_cards");

interface Props {
  card: CardType;
  onClick?: () => any;
  selected?: boolean;
}
