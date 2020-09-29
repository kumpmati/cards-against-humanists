import React from "react";
import List from "../List";
import "./CardPack.css";

import Card from "./index";

function CardPack({ data }) {
  return <List className="card-pack" items={data} Component={Card} />;
}

export default CardPack;
