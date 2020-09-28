import React, { useState, useContext } from "react";
import { useParams, Redirect, Link } from "react-router-dom";

import WSApiContext from "../api/websocket";
import useGameApi from "../api/api";

function Join() {
  const { roomName: paramsRoomId } = useParams();

  // websocket api
  const ws = useContext(WSApiContext);
  const api = useGameApi(ws);

  const [roomId, setRoomId] = useState("");
  const [roomPassword, setRoomPassword] = useState("");
  const [infoMsg, setInfoMsg] = useState("");

  async function joinRoom(room_id, room_password) {
    // authenticate
    const session = await api.authenticate(null, () => prompt("Nickname"));

    // request to join the room
    const r = await api.join({
      room_id,
      room_password,
      sid: session ? session.sid : "-",
    });

    // switch to room if joining is successful
    if (r.current_room) {
      setInfoMsg(`Joining ${r.current_room}...`);
      setTimeout(() => {
        clearTimeout();
        setInfoMsg(<Redirect to={`/room/${r.current_room}`} />);
      }, 500);
    } else {
      setInfoMsg(r.data);
    }
  }

  // redirect to parameter-defined room
  if (!!paramsRoomId) {
    joinRoom(paramsRoomId);
  }

  return (
    <div>
      <h1>Join Game</h1>
      <Link to="/">Back</Link>
      <form name="room-info">
        <h2>ID:</h2>
        <input
          type="text"
          placeholder="TheBestRoom"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
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
            joinRoom(roomId, roomPassword);
          }}
        />
        <p>{infoMsg}</p>
      </form>
    </div>
  );
}

export default Join;
