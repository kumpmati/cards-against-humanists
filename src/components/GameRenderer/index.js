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
  const { sid } = userInfo || {};

  // websocket api
  const ws = useContext(WSApiContext);
  const api = useGameApi(ws);

  // function to send data to server
  const sendFunc = async data => await api.sendAction({ data, sid });
  /*
   * Store state of each section independently
   */
  const [playerData, setPlayerData] = useState({});
  const [tableData, setTableData] = useState({});
  const [handData, setHandData] = useState({});

  /* Listen for game updates */
  useEffect(() => {
    const listener = d => {
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

  // first 4 characters of SID is the ID used to identify players
  const userId = sid ? sid.slice(0, 4) : "";

  return (
    <div id="game-room">
      <PlayerList {...playerData} userId={userId} />
      <div id="game">
        <Table {...tableData} userId={userId} send={sendFunc} />
        <Hand {...handData} userId={userId} send={sendFunc} />
      </div>
    </div>
  );
}

export default GameRenderer;
