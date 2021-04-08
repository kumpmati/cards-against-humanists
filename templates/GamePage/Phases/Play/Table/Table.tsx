import { useContext } from "react";
import Card from "../../../../../components/Card/Card";
import { PlayStages } from "../../../../../game/phases/play";
import { PlayContext } from "../Play";

import styles from "./style.module.css";

const Table = () => {
  const { stage, isCzar, G, game } = useContext(PlayContext);
  const { question, answers } = G.table;

  const canChooseWinner = isCzar && stage === PlayStages.chooseWinner;
  const shrinkQuestion = canChooseWinner || stage === PlayStages.waitForCzar;

  const tableClassNames = `${styles.table} ${
    shrinkQuestion ? styles["table--answers"] : ""
  }`;

  const questionClassNames = `${styles.question} ${
    shrinkQuestion ? styles["question--small"] : ""
  }`;

  const submit = (card: any) => game.moves.chooseWinner(card.id);

  return (
    <>
      <div className={tableClassNames}>
        <div className={questionClassNames}>
          {question && <Card card={question} />}
        </div>
        <ul className={styles.answers}>
          {answers.map((answer, i) => {
            return (
              <li key={i}>
                {answer.map((card) => (
                  <Card
                    key={card.text}
                    card={card}
                    onClick={canChooseWinner ? () => submit(card) : null}
                  />
                ))}
              </li>
            );
          })}
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
