import React, { useEffect, useState, useContext } from "react";
import "./Game.css";

/*
 * API
 */
import WSApiContext from "../../api/websocket";
import useGameApi from "../../api/api";

import PlayerList from "../PlayerList";
import Table from "../Table";
import Hand from "../Hand";
import {
	compareValues,
	parseHandData,
	parsePlayerData,
	parseTableData,
} from "./util";

/*
 * Game renderer
 */
function GameRenderer({ userInfo }) {
	const { name, sid } = userInfo || {};

	// websocket api
	const ws = useContext(WSApiContext);
	const api = useGameApi(ws);

	// function to send data to server
	const sendFunc = async (data) => {
		const r = await api.sendAction({ data, sid });
		console.log(r);
	};

	/*
	 * Store state of each section independently
	 */
	const [playerData, setPlayerData] = useState({});
	const [tableData, setTableData] = useState({});
	const [handData, setHandData] = useState({});

	/* Listen for game updates */
	useEffect(() => {
		const listener = (d) => {
			const newPlayerData = parsePlayerData(d);
			const newTableData = parseTableData(d);
			const newHandData = parseHandData(d);

			// only update if values have changed
			!compareValues(newPlayerData, playerData) && setPlayerData(newPlayerData);

			!compareValues(newTableData, tableData) && setTableData(newTableData);

			!compareValues(newHandData, handData) && setHandData(newHandData);
		};
		ws.addListener(listener);

		// remove listener when unmounting
		return () => ws.removeListener(listener);
	}, [ws]);

  return (
	<div id='game-room'>
		<div>
			<PlayerList {...playerData} me={name} />
		</div>
		<div id="game">
			<Table {...tableData} send={sendFunc} />
				<Hand
					{...handData}
					send={sendFunc}
					disabled={handData.current_czar === name}
			/>
		</div>
	</div>
	);
}

export default GameRenderer;
