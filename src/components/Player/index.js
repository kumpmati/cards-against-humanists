import React from "react";
import "./Player.css";

/*
 * Player
 */
function Player({ data, isHost, isCzar, isSelf }) {
  const { name, score } = data;

  return (
    <li className="player">
      <div>
        <h1 className="player-name">{`${name} ${isSelf ? "(sinä)" : ""}`}</h1>
        {score !== undefined ? (
          <p className="player-score">Score: {score}</p>
        ) : null}
      </div>
      {/* Tagit */}
      {isCzar ? (
        <h2 className="czar" title="Card Czar. Valitsee voittajakortin">
          <span role="img" aria-label="czar">
            👌
          </span>
        </h2>
      ) : null}
      {isHost ? (
        <h2 className="host" title="Huoneen tekijä">
          <span role="img" aria-label="host">
            🤴
          </span>
        </h2>
      ) : null}
    </li>
  );
}

export default Player;
