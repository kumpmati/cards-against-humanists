import React, { FC, ReactElement } from "react";
import { QuestionCard, Card as CardType } from "../../game/types";

import styles from "./style.module.css";

/**
 * Card component
 */
const Card: FC<Props> = ({ card, onClick, selected }) => {
  const clickableClassName = !!onClick ? styles["card--clickable"] : "";
  const selectedClassName = !!selected ? styles["card--selected"] : "";

  /**
   * Question card
   */
  if (cardIsQuestion(card)) {
    const className = `
      ${styles.card}
      ${styles["card--question"]}
      ${clickableClassName}
      ${selectedClassName}
    `;

    return (
      <div onClick={onClick} className={className}>
        {selected && (
          <div className={styles.card__selectedIcon}>{selected}</div>
        )}
        <p>{card.text}</p>

        {card.required_cards > 1 && (
          <p className={styles.card__requiredCards}>
            Pick {card.required_cards}
          </p>
        )}
      </div>
    );
  }

  /**
   * Answer card
   */
  const className = `
    ${styles.card}
    ${clickableClassName}
    ${selectedClassName}
  `;

  return (
    <div onClick={onClick} className={className}>
      {selected && <div className={styles.card__selectedIcon}>{selected}</div>}
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
  selected?: ReactElement;
}
