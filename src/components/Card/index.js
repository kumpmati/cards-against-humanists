import React from "react";
import "./Card.css";

const isFunc = f => typeof f === "function";

/*
 * Card
 */
function Card({ data, onClick, selectionNum }) {
  const { text, required_cards } = data;

  const cardType = required_cards > 0 ? "card question" : "card";

  return (
    <div
      className={selectionNum ? cardType + " selected" : cardType}
      onClick={isFunc(onClick) ? () => onClick(data) : () => null}
    >
      {selectionNum ? <p className="selection-number">{selectionNum}</p> : ""}
      <p>{text}</p>
    </div>
  );
}

export default Card;
