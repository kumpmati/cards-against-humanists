import React from "react";
import "./PlayerList.css";

import Player from "../Player";
import stateMessages from "./stateMessages";

/*
 * Player list
 */
function PlayerList({ players, current_czar, game_status, host, userId }) {
  const currentMessage = stateMessages[game_status] || (() => null);

  return (
    <section id="players">
      <div id="nav-info">
        <h1>{currentMessage(userId === current_czar)}</h1>
      </div>
      <div id="player-list">
        {players
          ? players.map(p => (
              <Player
                data={p}
                isHost={host === p.id}
                isCzar={current_czar === p.id}
              />
            ))
          : null}
      </div>
    </section>
  );
}

export default PlayerList;
