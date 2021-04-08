import { useContext } from "react";
import Card from "../../../../../components/Card/Card";
import { PlayStages } from "../../../../../game/phases/play";
import { AnswerCard } from "../../../../../game/types";
import { PlayContext } from "../Play";

import styles from "./style.module.css";

const Table = () => {
  const { stage, isCzar, G, game } = useContext(PlayContext);
  const { question, answers } = G.table;

  const canReveal = isCzar && stage === PlayStages.czarReveals;
  const canChooseWinner = isCzar && stage === PlayStages.chooseWinner;

  const shrinkQuestion =
    canChooseWinner || canReveal || stage === PlayStages.waitForCzar;

  const tableClassNames = `${styles.table} ${
    shrinkQuestion ? styles["table--answers"] : ""
  }`;

  const questionClassNames = `${styles.question} ${
    shrinkQuestion ? styles["question--small"] : ""
  }`;

  const cardOnClick = (card: AnswerCard) => {
    if (canReveal) return () => game.moves.revealCard(card.id);
    if (canChooseWinner) return () => game.moves.chooseWinner(card.id);
    return null;
  };

  return (
    <>
      <div className={tableClassNames}>
        <div className={questionClassNames}>
          {question && <Card card={question} />}
        </div>
        <ul className={styles.answers}>
          {answers.map((card) => (
            <li key={card.id}>
              <Card card={card} onClick={cardOnClick(card)} />
            </li>
          ))}
        </ul>
      </div>

      {isCzar && (
        <div className={styles.czar}>
          <h1>
            {canChooseWinner
              ? "Choose the winning card(s)"
              : "You are the Czar"}
          </h1>
        </div>
      )}
    </>
  );
};

export default Table;
