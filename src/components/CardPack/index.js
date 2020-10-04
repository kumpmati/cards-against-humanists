import React from "react";
import "./CardPack.css";

import Card from "../Card";

function CardPack({ data, onClick, isSelected }) {
  // wrap in a div to preserve the onClick
  return (
    <div
      onClick={() => onClick(data)}
      className={`card-pack ${isSelected ? "selected" : ""}`}
    >
      {data &&
        data.map(card => (
          <Card key={card.id} data={card} selectionNum={isSelected ? "✓" : 0} />
        ))}
    </div>
  );
}

export default CardPack;
