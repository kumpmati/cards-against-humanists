import React, { useEffect, useState } from "react";
import "./Table.css";

/*
 * Components
 */
import Card from "../Card";
import CardPack from "../CardPack";
import Button from "../Button";
import { compareValues } from "../GameRenderer/util";

/*
 * Table
 */
function Table({
  current_question,
  submitted_cards,
  winning_cards,
  current_czar,
  game_status,
  userId,
  send,
  roomId,
  host,
  players,
}) {
  // card selection
  const [currentCards, setCurrentCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState();
  const selectPack = pack =>
    setSelectedCards(selectedCards === pack ? null : pack);

  const userIsCzar = userId === current_czar;
  const userIsHost = userId === host;
  const inLobby = game_status === "WAITING_FOR_PLAYERS";
  const canSelectWinner = userIsCzar && game_status === "CZAR_CHOOSES_WINNER";

  useEffect(() => {
    // unselect cards if they are updated or disabled
    if (!compareValues(submitted_cards, currentCards) || !canSelectWinner) {
      setCurrentCards(submitted_cards);
      setSelectedCards(null);
    }
  }, [submitted_cards, canSelectWinner]);

  // function to send winner to server
  const submitWinner = () => {
    send({ winner: selectedCards });
    setSelectedCards(null);
  };

  const isWinningCardPack = pack =>
    pack &&
    winning_cards &&
    pack.length === winning_cards.length &&
    pack.every(({ id }, i) => id === winning_cards[i].id);

  return (
    <section id="table">
      {inLobby ? (
        <div id="join-link">
          <p>Liittymislinkki:</p>
          <h2>https://cahum.xyz/join/{roomId}</h2>
          <br></br>
          {userIsHost ? (
            <Button
              padded
              disabled={players.length < 2}
              text="Aloita Peli"
              onClick={() => send({ vote: "start-game" })}
            />
          ) : null}
        </div>
      ) : null}
      <div id="current-question">
        {current_question && <Card data={current_question} />}

        {/* Confirmation button */}
        {userIsCzar ? (
          <Button
            text="Vahvista voittaja"
            padded
            onClick={submitWinner}
            disabled={!selectedCards || !canSelectWinner}
          />
        ) : null}
      </div>

      <div id="submitted-cards">
        {submitted_cards &&
          submitted_cards.map((pack, i) => (
            <CardPack
              key={i}
              data={pack}
              onClick={selectPack}
              isSelected={canSelectWinner && pack === selectedCards}
              selectionText={isWinningCardPack(pack) && "👑"}
            />
          ))}
      </div>
    </section>
  );
}

export default Table;
