import { FC } from "react";
import { useCardBrowser } from "./hooks";

import styles from "./styles.module.css";

const CardBrowser: FC<Props> = ({ cardPacks }) => {
  const { pack, setPack } = useCardBrowser(cardPacks[0].code);
  const cards = pack ? [...pack.questions, ...pack.answers] : [];

  return (
    <>
      <h2>Browse cards</h2>
      <div className={styles.controls}>
        <select onChange={(e) => setPack(e.target.value)}>
          {cardPacks.map((pack) => (
            <option value={pack.code}>{pack.name}</option>
          ))}
        </select>
      </div>
      <ul className={styles.list}>
        {cards.map((card) => (
          <li className={styles.list__card} key={card.id}>
            <p>{card.text}</p>
            <p className={styles.card__requiredCards}>
              {card["required_cards"] > 1 && `Pick ${card["required_cards"]}`}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CardBrowser;

interface Props {
  cardPacks: { name: string; code: string }[];
}
