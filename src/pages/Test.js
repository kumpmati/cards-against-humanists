import React, { useState, useContext, useEffect } from "react";

import WSApiContext from "../api/websocket";
import useGameApi from "../api/api";

function Test() {
  // websocket api
  const ws = useContext(WSApiContext);
  const api = useGameApi(ws);

  const [response, setResponse] = useState("");
  const [session, setSession] = useState();
  const [gameData, setGameData] = useState(null);

  useEffect(() => {
    ws.addListener((d) => {
      setGameData(d);
    });
  }, [ws]);

  async function testAuth() {
    const authRes = await api.authenticate();
    setSession(authRes);
    setResponse(authRes);
  }

  async function testCreateRoom() {
    setResponse(
      await api.create({
        room_name: prompt("room name"),
        room_password: prompt("room password"),
        sid: session ? session.sid : "a",
      })
    );
  }

  async function testJoinRoom() {
    setResponse(
      await api.join({
        room_id: prompt("room id"),
        room_password: prompt("room password"),
        sid: session ? session.sid : "a",
      })
    );
  }

  async function testLeaveRoom() {
    setResponse(
      await api.leave({
        sid: session ? session.sid : "a",
      })
    );
  }

  async function testGetState() {
    setResponse(
      await api.getState({
        sid: session ? session.sid : "a",
      })
    );
  }

  async function testSendAction() {
    setResponse(
      await api.sendAction({
        sid: session ? session.sid : "a",
        data: { test: 1 },
      })
    );
  }

  return (
    <div>
      <p>{JSON.stringify(gameData)}</p>
      <button onClick={() => localStorage.clear()}>Clear localstorage</button>
      <button onClick={() => testAuth()}>Authenticate</button>
      <br></br>
      <button onClick={() => testCreateRoom()}>Create room</button>
      <button onClick={() => testJoinRoom()}>Join room</button>
      <button onClick={() => testLeaveRoom()}>Leave room</button>
      <br></br>
      <button onClick={() => testGetState()}>Get state</button>
      <button onClick={() => testSendAction()}>Send action</button>
      <br></br>
      <p>Session: {JSON.stringify(session)}</p>
      <p>{JSON.stringify(response)}</p>
    </div>
  );
}

export default Test;
