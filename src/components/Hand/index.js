import React, { useEffect, useState } from "react";
import { toggleInList } from "./util";
import "./CardList.css";
import "./Hand.css";

/*
 * Components
 */
import Button from "../Button";
import Card from "../Card";
import { compareValues } from "../GameRenderer/util";

/*
 * Card list
 */
function Hand({
  cards,
  current_question,
  current_czar,
  game_status,
  send,
  userId,
}) {
  const [currentCards, setCurrentCards] = useState(cards);
  const [selectedCards, setSelectedCards] = useState([]);

  // on submit send submission request to server
  const submitCards = () => send({ submit: selectedCards });

  const userIsCzar = userId === current_czar;
  const numSelectableCards = current_question
    ? current_question.required_cards
    : 0;
  const canSelectCards =
    !userIsCzar &&
    numSelectableCards > 0 &&
    game_status !== "CZAR_CHOOSES_WINNER";

  // show message
  let disabledMessage;
  if (userIsCzar) disabledMessage = "Czar ei voi pelata kortteja";
  else if (!canSelectCards) disabledMessage = "Odota seuraavaa kierrosta";

  useEffect(() => {
    // unselect cards if they are updated or disabled
    if (!compareValues(cards, currentCards) || !canSelectCards) {
      setCurrentCards(cards);
      setSelectedCards([]);
    }
  }, [cards]);

  return (
    <section id="cards">
      {/* Show confirmation button when a card/cards are selected */}
      <div id="confirm-cards">
        <Button
          big
          padded
          text="✓"
          onClick={submitCards}
          disabled={userIsCzar || selectedCards.length !== numSelectableCards}
        />
      </div>

      <div id="card-list">
        {/* Message */}
        {disabledMessage ? (
          <h1 id="card-disable-message">{disabledMessage}</h1>
        ) : null}

        {/* Cards */}
        {currentCards &&
          currentCards.map(card => (
            <Card
              key={card.id}
              data={card}
              selectionNum={selectedCards.indexOf(card) + 1}
              onClick={cardId =>
                setSelectedCards(
                  toggleInList(
                    cardId,
                    selectedCards,
                    canSelectCards ? numSelectableCards : 0
                  )
                )
              }
            />
          ))}
      </div>
    </section>
  );
}

export default Hand;
