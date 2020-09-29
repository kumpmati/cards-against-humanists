import React from "react";
import "./Table.css";

import Card from "../Card";
import CardPack from "../Card/CardPack";
import List from "../List";

function Table({ current_question, cards, game_status }) {
  const spreadCards = game_status === "CZAR_CHOOSES_ANSWER";

  return (
    <section id="table">
      <div id="current-question">
        {current_question && <Card data={current_question} />}
      </div>

      <List
        id="submitted-cards"
        className={spreadCards ? "spread" : ""}
        items={cards}
        Component={CardPack}
      />
    </section>
  );
}

export default Table;
