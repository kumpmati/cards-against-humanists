import React, { useState } from "react";
import "./Game.css";

/*
 * Components
 */
import Card from "../Card";
import Player from "../Player";
import Button from "../Button";

/*
 * Game renderer
 */
function GameRenderer({ data }) {
  const { players, cards, current_question, current_czar } = data || {}; // default to empty object to prevent error
  /*
   * Selected cards
   */
  const [selectedCards, setSelectedCards] = useState([]);

  const toggleCardSelection = (i) => {
    const cards = [...selectedCards];
    if (cards.indexOf(i) > -1) cards.splice(cards.indexOf(i), 1);
    else cards.push(i);
    setSelectedCards(cards);
  };

  /*
   * Send selected cards to server
   */
  const sendCards = () => {};

  /*
   * Player menu
   */
  const [viewPlayers, setViewPlayers] = useState(false);
  const togglePlayers = () => setViewPlayers((state) => !state);

  return (
    <div id="game">
      {/* Map array of players into Player components */}
      <section id="players">
        <div id="toggle-players">
          <h1>PLAYERS</h1>
          <Button
            inverse
            text={!viewPlayers ? "+" : "-"}
            onClick={togglePlayers}
          />
        </div>
        <ul id="player-list" className={!viewPlayers ? "hidden" : ""}>
          {players &&
            players.map((pl, i) => (
              <Player key={i} {...pl} isCzar={pl.name === current_czar} />
            ))}
        </ul>
      </section>

      {/* Current question card */}
      <section id="current-question">
        {current_question && <Card {...current_question} />}
      </section>

      {/* Map array of cards into Card components */}
      <section id="cards">
        <ul id="card-list">
          {cards &&
            cards.map((card, i) => (
              <Card
                key={i}
                {...card}
                selectionIndex={selectedCards.indexOf(i) + 1}
                onClick={() => toggleCardSelection(i)}
              />
            ))}
        </ul>

        <div id="confirm-cards">
          {/* Show confirmation button when card(s) are selected */}
          {selectedCards.length > 0 ? (
            <Button text="✓" onClick={() => sendCards()} big inverse outline />
          ) : null}
        </div>
      </section>
    </div>
  );
}

export default GameRenderer;
