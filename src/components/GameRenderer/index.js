import React, { useEffect, useState, useContext } from "react";
import "./Game.css";

/*
 * API
 */
import WSApiContext from "../../api/websocket";
import useGameApi from "../../api/api";

import PlayerList from "../PlayerList";
import stateMessages from "../PlayerList/stateMessages";
import Table from "../Table";
import Hand from "../Hand";
import {
  compareValues,
  parseHandData,
  parsePlayerData,
  parseTableData,
} from "./util";
import Button from "../Button";

/*
 * Game renderer
 */
function GameRenderer({ userInfo, roomId }) {
  const { sid } = userInfo || {};
  const [navVisible, setNavVisible] = useState(false);

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

  // first 4 characters of SID is the ID used to identify players
  const userId = sid ? sid.slice(0, 4) : "";

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

  const message = stateMessages[playerData.game_status] || (() => null);

  return (
    <div id="game-room">
      <div id="mobile-nav">
        <Button text="☰" padded onClick={() => setNavVisible(v => !v)} />
        <p>{message(userId === playerData.current_czar)}</p>
      </div>
      <div id="left-nav" className={navVisible ? "visible" : ""}>
        <PlayerList {...playerData} userId={userId} />
      </div>
      <div id="game">
        <Table {...tableData} userId={userId} send={sendFunc} roomId={roomId} />
        <Hand {...handData} userId={userId} send={sendFunc} />
      </div>
    </div>
  );
}

export default GameRenderer;
