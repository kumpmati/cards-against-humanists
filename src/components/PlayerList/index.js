import React, { useState } from "react";
import PlayerListStyle from "./PlayerList.css";

import List from "../List";
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
				<div id="toggle-players">
				</div>
				<h1>{currentMessage(userId === current_czar)}</h1>
			</div>
			<div>
				{players ? players.map(p => <Player data={p} isHost={host === p.id} isCzar={current_czar === p.id} />) : null}
			</div>
		</section>
	);
}

export default PlayerList;
