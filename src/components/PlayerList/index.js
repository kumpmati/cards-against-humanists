import React, { useEffect, useState } from "react";
import "./PlayerList.css";

import Player from "../Player";
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
}) {
  const [timer, setTimer] = useState(0);
  const currentMessage = stateMessages[game_status] || (() => null);

  // setup timer
  useEffect(() => {
    if (!timer_end_date) setTimer(0);

    const secondsLeft = ~~((new Date(timer_end_date) - new Date()) / 1000);
    setTimer(secondsLeft);

    // start timer to update time left every second
    const updater = setInterval(() => {
      const s = ~~((new Date(timer_end_date) - new Date()) / 1000);
      setTimer(s);
    }, 1000);

    // clear old interval when timer is updated
    return () => clearInterval(updater);
  }, [timer_end_date]);

  return (
    <section id="players">
      <div>
        <div id="nav-info">
          <h1>{currentMessage(userId === current_czar)}</h1>
          <h2 title="jäljellä oleva aika">{timer > 0 ? timer : null}</h2>
        </div>
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
