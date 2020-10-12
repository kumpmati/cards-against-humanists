import React, { useEffect, useState } from "react";
import "./PlayerList.css";

import Player from "../Player";
import Button from "../Button";
import stateMessages from "./stateMessages";

/*
 * Player list
 */
function PlayerList({
  players = [],
  current_czar,
  game_status,
  timer_end_date,
  host,
  userId,
  send,
}) {
  const [timer, setTimer] = useState(0);
  const currentMessage = stateMessages[game_status] || (() => null);

  const userIsHost = host === userId;
  const inLobby = game_status === "WAITING_FOR_PLAYERS";

  // setup timer
  useEffect(() => {
    if (!timer_end_date) return;

    const secondsLeft = ~~((new Date(timer_end_date) - new Date()) / 1000);
    setTimer(secondsLeft);
    const t = setInterval(() => setTimer(s => s - 1), 1000);
    // remove timer on refresh
    return () => clearInterval(t);
  }, [timer_end_date]);

  return (
    <section id="players">
      <div>
        <div id="nav-info">
          <h1>{currentMessage(userId === current_czar)}</h1>
          <h2>{timer > 0 ? timer : null}</h2>
        </div>
        {userIsHost && inLobby ? (
          <Button
            padded
            disabled={players.length < 2}
            text="Aloita Peli"
            onClick={() => send({ vote: "start-game" })}
          />
        ) : null}
      </div>
      <br></br>
      <div id="player-list">
        {players.map(p => (
          <Player
            key={p.id}
            data={p}
            isSelf={p.id === userId}
            isHost={host === p.id}
            isCzar={current_czar === p.id}
          />
        ))}
      </div>
    </section>
  );
}

export default PlayerList;
