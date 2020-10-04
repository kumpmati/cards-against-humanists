import React from "react";
import List from "../List";
import "./CardPack.css";

import Card from "../Card";

function CardPack({ data, onClick }) {
  // wrap in a div to preserve the onClick
  return (
    <div onClick={onClick}>
      <List className="card-pack" items={data} Component={Card} />
    </div>
  );
}

export default CardPack;
