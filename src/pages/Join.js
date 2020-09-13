import React, { useState, useContext } from "react";
import { useParams, Redirect, Link } from "react-router-dom";

import WSApiContext from "../api/websocket";
import useGameApi from "../api/game";

function Join() {
  const { roomName: paramsRoomName } = useParams();

  // websocket api
  const ws = useContext(WSApiContext);
  const api = useGameApi(ws);

  const [roomName, setRoomName] = useState("");
  const [roomPassword, setRoomPassword] = useState("");
  const [infoMsg, setInfoMsg] = useState("");

  async function joinRoom(room) {
    const r = await api.join({
      room_name: room,
      session: api.localSession(),
    });
    if (r.room_name) {
      setInfoMsg(<Redirect to={`/room/${r.room_name}`} />);
    }
  }

  // redirect to parameter-defined room
  if (!!paramsRoomName) {
    joinRoom(paramsRoomName);
  }

  return (
    <div>
      <h1>Join Game</h1>
      <Link to="/">Back</Link>
      <form name="room-info">
        <h2>Name:</h2>
        <input
          type="text"
          placeholder="TheBestRoom"
          value={roomName}
          onChange={(e) => setRoomName(e.target.value)}
        />
        <h2>Password (optional):</h2>
        <input
          type="password"
          placeholder="1234"
          value={roomPassword}
          onChange={(e) => setRoomPassword(e.target.value)}
        />
        <input
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            joinRoom(roomName);
          }}
        />
        <p>{infoMsg}</p>
      </form>
    </div>
  );
}

export default Join;
