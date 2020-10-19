import React, { useContext, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import WSApiContext from "../api/websocket";
import useGameApi from "../api/api";

import "./NewJoin.css";
import { setLocalSession } from "../api/session";
import Button from "../components/Button";

function NewRoom() {
  // websocket api
  const ws = useContext(WSApiContext);
  const api = useGameApi(ws);

  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
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

    const session = await api.newSession(username);
    setLocalSession(session);
    // request backend to create a new room
    const created = await api.create({
      room_name: roomId,
      room_password: roomPassword,
      sid: session ? session.sid : "-",
    });
    // show error msg
    if (!!created.error) {
      setInfoMsg(created.data);
      return;
    }
    setInfoMsg(<Redirect to={`/room/${created.room_id}`} />);
  }

  return (
    <div className="container">
      <Link className="back-link" to="/">
        Takaisin
      </Link>
      <h1>Luo huone</h1>
      <form className="form" autoComplete="off">
        <fieldset className="form-fieldset ui-input __first">
          <input
            name="test"
            type="text"
            id="huoneen-nimi"
            vvalue={roomId}
            onChange={e => setRoomId(e.target.value)}
          />
          <label htmlFor="huoneen-nimi">
            <span data-text="Huoneen nimi">Huoneen nimi</span>
          </label>
        </fieldset>

        <fieldset className="form-fieldset ui-input __second">
          <input
            name="test"
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

        <fieldset className="form-fieldset ui-input __third">
          <input
            name="test"
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
          <Button text="Luo huone" onClick={createRoom} />
        </fieldset>
        <p>{infoMsg}</p>
      </form>
    </div>
  );
}

export default NewRoom;
