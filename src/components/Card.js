import React from "react";
import "./Card.css";

/*
 * Card
 */
function Card({ text, required_cards, selectionIndex, onClick }) {
  const cardType = required_cards > 0 ? "card question" : "card";

  return (
    <div
      className={selectionIndex ? cardType + " selected" : cardType}
      onClick={onClick}
    >
      {selectionIndex ? (
        <p className="selection-number">{selectionIndex}</p>
      ) : (
        ""
      )}
      <p>{text}</p>
    </div>
  );
}

export default Card;
