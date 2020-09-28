import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import WSApiContext from "../api/websocket";
import useGameApi from "../api/api";

function NewRoom() {
  // websocket api
  const ws = useContext(WSApiContext);
  const api = useGameApi(ws);

  const [roomId, setRoomId] = useState("");
  const [roomPassword, setRoomPassword] = useState("");
  const [infoMsg, setInfoMsg] = useState("");
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    (async () => {
      const session = await api.authenticate(null, () =>
        prompt("Choose a nickname:")
      );
      setUserInfo(session);
    })();
  }, []);

  async function createRoom(e) {
    // prevent page refresh
    e.preventDefault();

    // request backend to create a new room
    const created = await api.create({
      room_name: roomId,
      room_password: roomPassword,
      sid: userInfo ? userInfo.sid : "-",
    });

    // show error msg
    if (!!created.error) setInfoMsg(created.data);

    console.log(created);
  }

  return (
    <div>
      <h1>New Game</h1>
      <Link to="/">Back</Link>
      <form name="room-info">
        <h2>ID:</h2>
        <input
          type="text"
          placeholder="abc123"
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
        <input type="submit" onClick={(e) => createRoom(e)} />
        <p>{infoMsg}</p>
      </form>
    </div>
  );
}

export default NewRoom;
