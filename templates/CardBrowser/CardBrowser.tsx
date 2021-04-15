import Head from "next/head";
import React, { FC } from "react";
import { ArrowLeft } from "react-feather";
import Button from "../../components/Button";
import { useCardBrowser } from "./hooks";

import styles from "./styles.module.css";

const CardBrowser: FC<Props> = ({ cardPacks }) => {
  const { pack, setPack } = useCardBrowser(cardPacks[0].code);
  const cards = pack ? [...pack.questions, ...pack.answers] : [];

  return (
    <main>
      <Head>
        <title>Cahum | Card browser</title>
      </Head>

      <nav>
        <Button href="/manage" text="Back" Icon={ArrowLeft} />
      </nav>

      <div className="content">
        <div id={styles.header}>
          <h1 className="title">Browse cards</h1>
          <p>Browse every card available in the game</p>
        </div>

        <div className={styles.controls}>
          <select
            className={styles.controls__pack}
            onChange={(e) => setPack(e.target.value)}>
            {cardPacks.map((pack) => (
              <option key={pack.code} value={pack.code}>
                {pack.name}
              </option>
            ))}
          </select>
        </div>
        <ul className={styles.list}>
          {cards.map((card) => {
            const requiredCards = card["required_cards"];
            const cardClassNames = `${styles.list__card} ${
              !!requiredCards ? styles["list__card--question"] : ""
            }`;

            return (
              <li className={cardClassNames} key={card.id}>
                <p>{card.text}</p>
                <p className={styles.card__requiredCards}>
                  {card["required_cards"] > 1 &&
                    `Pick ${card["required_cards"]}`}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default CardBrowser;

interface Props {
  cardPacks: { name: string; code: string }[];
}
