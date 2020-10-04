import React from "react";
import "./Player.css";

/*
 * Player
 */
function Player({ data, isHost, isCzar }) {
  const { name, score } = data;

  return (
    <li className="player">
      <div>
        <h1 className="player-name">{name}</h1>
        {score !== undefined ? (
          <p className="player-score">Score: {score}</p>
        ) : null}
      </div>
      {isCzar ? <h2 className="czar">CZAR</h2> : null}
      {isHost ? <h2 className="host">HOST</h2> : null}
    </li>
  );
}

export default Player;
