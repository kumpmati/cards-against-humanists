import React, { useEffect, useState } from "react";
import PlayerListStyle from "./PlayerList.css";

import Button from "../Button";
import List from "../List";
import Player from "../Player";

function PlayerList({ players, current_czar }) {
  const [viewPlayers, setViewPlayers] = useState(false);
  const togglePlayers = () => setViewPlayers((state) => !state);

  return (
    <section id="players">
      <div id="nav-info">
        <div id="toggle-players">
          <Button
            inverse
            text={!viewPlayers ? "+" : "–"}
            onClick={togglePlayers}
          />
        </div>
      </div>
      <div>
        <List
          id="player-list"
          className={!viewPlayers ? "hidden" : ""}
          style={PlayerListStyle}
          items={players}
          Component={Player}
          isSelected={(item) => item.name === current_czar}
        />
      </div>
    </section>
  );
}

export default PlayerList;
