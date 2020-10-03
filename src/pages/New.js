import React, { useContext, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import WSApiContext from "../api/websocket";
import useGameApi from "../api/api";

import "./NewJoin.css";

function NewRoom() {
  // websocket api
  const ws = useContext(WSApiContext);
  const api = useGameApi(ws);

  const [roomId, setRoomId] = useState("");
  const [roomPassword, setRoomPassword] = useState("");
  const [infoMsg, setInfoMsg] = useState("");

  /*
   * Authenticate on page load
   */
  useEffect(() => {
    (async () => {})();
  }, []);

  async function createRoom(e) {
    // prevent page refresh
    e.preventDefault();

    const session = await api.authenticate(null, () =>
      prompt("Choose a nickname:")
    );

    // request backend to create a new room
    const created = await api.create({
      room_name: roomId,
      room_password: roomPassword,
      sid: session ? session.sid : "-",
    });

    // show error msg
    if (!!created.error) setInfoMsg(created.data);

    setInfoMsg(<Redirect to={`/room/${created.room_id}`} />);
  }

  return (
    <div className="join-a-room">
      <div id="join-a-room-header">
        <div>
          <h1>Uusi peli</h1>
        </div>
        <div>
          <Link className="back-link" to="/">
            Takaisin
          </Link>
        </div>
      </div>
      <form name="room-info">
        <h2>ID:</h2>
        <input
          type="text"
          placeholder="name"
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        />
        <h2>Salasana (valinnainen):</h2>
        <input
          type="password"
          placeholder="password"
          value={roomPassword}
          onChange={e => setRoomPassword(e.target.value)}
        />
        <input type="submit" onClick={e => createRoom(e)} />
        <p>{infoMsg}</p>
      </form>
    </div>
  );
}

export default NewRoom;
