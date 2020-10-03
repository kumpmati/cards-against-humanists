import React, { useState } from "react";
import PlayerListStyle from "./PlayerList.css";

import List from "../List";
import Player from "../Player";

import stateMessages from "./stateMessages";

/*
 * Player list
 */
function PlayerList({ players, current_czar, game_status, userId }) {
	const currentMessage = stateMessages[game_status] || (() => null);

	return (
		<section id="players">
			<div id="nav-info">
				<div id="toggle-players">
				</div>
				<h1>{currentMessage(userId === current_czar)}</h1>
			</div>
			<div>
				<List
					id="player-list"
					style={PlayerListStyle}
					items={players}
					Component={Player}
					isSelected={(item) => item.id === current_czar}
				/>
			</div>
		</section>
	);
}

export default PlayerList;
