import React, { useContext, useState } from "react";
import { Redirect, Link } from "react-router-dom";

import WSContext from "../api/websocket";
import useGameApi from "../api/game";

function NewRoom() {
  const { requestAsync } = useContext(WSContext);
  const api = useGameApi({ requestAsync });
  const [roomName, setRoomName] = useState("");
  const [roomPassword, setRoomPassword] = useState("");
  const [infoMsg, setInfoMsg] = useState("");

  async function createRoom(e) {
    // prevent page refresh
    e.preventDefault();
    // create room
    const r = await api.create({
      room_name: roomName,
      room_password: roomPassword,
    });
    // handle errors
    if (r.error === "INVALID_ACTION") {
      setInfoMsg(r.data);
    } else if (r.error === "MISSING_PARAMS") {
      setInfoMsg("please enter a room name");
    } else {
      // successful room creation, redirect
      setInfoMsg(<Redirect to={`/room/${r.room_name}`} />);
    }
  }

  return (
    <div>
      <h1>New Game</h1>
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
        <input type="submit" onClick={(e) => createRoom(e)} />
        <p>{infoMsg}</p>
      </form>
    </div>
  );
}

export default NewRoom;
