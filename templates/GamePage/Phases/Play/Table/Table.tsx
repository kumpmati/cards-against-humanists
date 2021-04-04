import { useContext } from "react";
import Card from "../../../../../components/Card/Card";
import { PlayContext } from "../Play";

import styles from "./style.module.css";

const Table = () => {
  const { isCzar, G } = useContext(PlayContext);

  const { question, answers } = G.table;
  const hasAnswers = answers.length > 0;

  const tableClassNames = `${styles.table} ${
    hasAnswers ? styles["table--answers"] : ""
  }`;

  const questionClassNames = `${styles.question} ${
    hasAnswers ? styles["question--small"] : ""
  }`;

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
                  <Card key={card.text} card={card} />
                ))}
              </li>
            );
          })}
        </ul>
      </div>

      {isCzar && (
        <div className={styles.czar}>
          <h1>You are the Czar</h1>
        </div>
      )}
    </>
  );
};

export default Table;
