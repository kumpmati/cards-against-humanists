import React, { useState, useContext } from "react";
import { useParams, Redirect, Link } from "react-router-dom";

import WSApiContext from "../api/websocket";
import useGameApi from "../api/api";

import "./NewJoin.css";
import { setLocalSession } from "../api/session";
import Button from "../components/Button";

function Join() {
  const { roomName: paramsRoomId } = useParams();

  // websocket api
  const ws = useContext(WSApiContext);
  const api = useGameApi(ws);

  const [roomId, setRoomId] = useState(paramsRoomId);
  const [username, setUsername] = useState("");
  const [roomPassword, setRoomPassword] = useState("");
  const [infoMsg, setInfoMsg] = useState("");

  async function joinRoom(room_id, room_password) {
    // authenticate
    const session = await api.newSession(username);
    setLocalSession(session);
    // request to join the room
    const r = await api.join({
      room_id,
      room_password,
      sid: session ? session.sid : "-",
    });

    // switch to room if joining is successful
    if (r.current_room) {
      setInfoMsg(`Liitytään huoneeseen ${r.current_room}...`);
      setTimeout(() => {
        clearTimeout();
        setInfoMsg(<Redirect to={`/room/${r.current_room}`} />);
      }, 500);
    } else {
      setInfoMsg(r.data);
    }
  }

  return (
    <div id="Home">
      <Link className="back-link" to="/">
        Takaisin
      </Link>
      <h1>Liity peliin</h1>
      <p>liity toisen henkilön luomaan peliin...</p>
      <form className="form" autoComplete="off">
        <fieldset className="form-fieldset ui-input __first">
          <input
            type="text"
            id="huoneen-nimi"
            value={roomId}
            onChange={e => setRoomId(e.target.value)}
          />
          <label htmlFor="huoneen-nimi">
            <span data-text="Huoneen ID">Huoneen ID</span>
          </label>
        </fieldset>
        {/*
        <fieldset className="form-fieldset ui-input __second">
          <input
            type="password"
            id="salasana"
            value={roomPassword}
            onChange={e => setRoomPassword(e.target.value)}
          />
          <label htmlFor="salasana">
            <span data-text="Salasana (valinnainen)">
              Salasana (valinnainen)
            </span>
          </label>
        </fieldset>
        */}

        <fieldset className="form-fieldset ui-input __third">
          <input
            type="text"
            id="käyttäjänimi"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
          <label htmlFor="käyttäjänimi">
            <span data-text="Käyttäjänimi">Käyttäjänimi</span>
          </label>
        </fieldset>

        <fieldset className="form-fieldset ui-input __fourth">
          <br></br>
          <Button text="Liity" onClick={() => joinRoom(roomId, roomPassword)} />
        </fieldset>
        <p>{infoMsg}</p>
      </form>
    </div>
  );
}

export default Join;
