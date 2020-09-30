import React, { useState } from "react";
import PlayerListStyle from "./PlayerList.css";

import Button from "../Button";
import List from "../List";
import Player from "../Player";

import stateMessages from "./stateMessages";

/*
 * Player list
 */
function PlayerList({ players, current_czar, game_status, me }) {
	/* Player list visibility */
	const [viewPlayers, setViewPlayers] = useState(false);
	const togglePlayers = () => setViewPlayers((state) => !state);

	const currentMessage = stateMessages[game_status] || (() => null);
	const isCzar = me === current_czar;

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
				<h1>{currentMessage(isCzar)}</h1>
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
