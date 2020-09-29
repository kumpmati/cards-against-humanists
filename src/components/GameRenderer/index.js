import React, { useEffect, useState } from "react";
import "./Game.css";

import PlayerList from "../PlayerList";
import Table from "../Table";
import Hand from "../Hand";

/*
 * Game renderer
 */
function GameRenderer({ data, sendAction }) {
  const {
    players,
    cards,
    current_question,
    current_czar,
    game_status,
    submitted_cards,
  } = data || {}; // default to empty object to prevent destructuring error

  return (
    <div id="game">
      <PlayerList
        players={players}
        current_czar={current_czar}
        game_status={game_status}
      />
      <Table
        current_question={current_question}
        cards={submitted_cards}
        game_status={game_status}
      />
      <Hand
        cards={cards}
        sendAction={sendAction}
        requiredCards={current_question && current_question.required_cards}
        gameStatus={game_status}
      />
    </div>
  );
}

export default GameRenderer;
