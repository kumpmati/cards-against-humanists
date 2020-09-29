import React, { useState } from "react";
import { toggleInList } from "./util";
import "./Hand.css";
/*
 * Components
 */
import Button from "../Button";
import Card from "../Card";
import List from "../List";
import CardListStyle from "./CardList.css";

/*
 * Card list
 */
function CardList({ cards, sendAction, requiredCards }) {
  const [selectedCards, setSelectedCards] = useState([]);

  const submitCards = async () => {
    await sendAction(selectedCards);
    setSelectedCards([]);
  };

  return (
    <section id="cards">
      <List
        id="card-list"
        style={CardListStyle}
        items={cards}
        Component={Card}
        isSelected={(item) => selectedCards.indexOf(item) + 1}
        itemOnClick={(item) => {
          setSelectedCards(toggleInList(item, selectedCards, requiredCards));
        }}
      />

      {/* Show confirmation button when a card/cards are selected */}
      <div id="confirm-cards">
        {selectedCards.length ? (
          <Button text="✓" onClick={submitCards} big inverse outline />
        ) : null}
      </div>
    </section>
  );
}

export default CardList;
