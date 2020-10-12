import React from "react";
import "./CardPack.css";

import Card from "../Card";

function CardPack({ data, onClick, isSelected, selectionText }) {
  // wrap in a div to preserve the onClick
  return (
    <div onClick={() => onClick(data)} className="card-pack">
      {data &&
        data.map(card => (
          <Card
            key={card.id}
            data={card}
            selectionNum={isSelected && !selectionText ? "✓" : selectionText}
          />
        ))}
    </div>
  );
}

export default CardPack;
