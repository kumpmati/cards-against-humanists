import { useContext } from "react";
import Card from "../../../../../components/Card/Card";
import { PlayStages } from "../../../../../game/phases/play";
import { AnswerCard } from "../../../../../game/types";
import { PlayContext } from "../Play";

import styles from "./style.module.css";

const Table = () => {
  const { stage, isCzar, G, game } = useContext(PlayContext);
  const { question, answers } = G.table;
  const gameStage = G.state.stage;

  const canReveal = isCzar && gameStage === PlayStages.czarReveals;
  const canChooseWinner = isCzar && gameStage === PlayStages.chooseWinner;

  const shrinkQuestion =
    canChooseWinner || canReveal || stage === PlayStages.waitForCzar;

  const tableClassNames = `${styles.table} ${
    shrinkQuestion ? styles["table--answers"] : ""
  }`;

  const questionClassNames = `${styles.question} ${
    shrinkQuestion ? styles["question--small"] : ""
  }`;

  const isRevealed = (card: AnswerCard) =>
    !!G.table.revealed.find((c) => c.id === card.id && c.owner === card.owner);

  const cardOnClick = (card: AnswerCard) => {
    if (canReveal) return () => game.moves.revealCard(card);
    if (canChooseWinner) return () => game.moves.chooseWinner(card.owner);
    return null;
  };

  const czarText = () => {
    if (canReveal) return <h1>Reveal the cards</h1>;
    if (canChooseWinner) return <h1>Choose a winner</h1>;
    return <h1>You are the Czar</h1>;
  };

  return (
    <>
      {isCzar && <div className={styles.czar}>{czarText()}</div>}
      <div className={tableClassNames}>
        <div className={questionClassNames}>
          {question && <Card card={question} />}
        </div>
        <ul className={styles.answers}>
          {answers.map((answer, i) => (
            <li key={i} className={styles.answer}>
              {answer.map((card) => (
                <div
                  key={card.id + card.text}
                  className={
                    canReveal && !isRevealed(card)
                      ? styles.card__reveal
                      : styles.card
                  }>
                  <Card card={card} onClick={cardOnClick(card)} />
                </div>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Table;
