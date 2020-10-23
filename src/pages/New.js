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

  const [username, setUsername] = useState("");
  const [roomPassword, setRoomPassword] = useState("");
  const [roomOptions, setRoomOptions] = useState({
    czarTime: -1,
    answerTime: 90,
    winnerShowTime: 5,
    cardsInHand: 7,
    packs: ["all"],
  });
  const [infoMsg, setInfoMsg] = useState("");

  async function createRoom(e) {
    // prevent page refresh
    e.preventDefault();

    const session = await api.newSession(username);
    setLocalSession(session);
    // request backend to create a new room
    const created = await api.create({
      room_password: roomPassword,
      room_options: roomOptions,
      sid: session ? session.sid : "-",
    });
    // show error msg
    if (!!created.error) {
      setInfoMsg(created.data);
      return;
    }

    // redirect to newly created room
    setInfoMsg(<Redirect to={`/room/${created.room_id}`} />);
  }

  return (
    <div className="container wide">
      <Link className="back-link" to="/">
        Takaisin
      </Link>
      <h1>Luo huone</h1>
      <div id="grid">
        <form className="form" autoComplete="off">
          <h2>Huoneen tiedot</h2>
          <fieldset className="form-fieldset ui-input __first">
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

          <fieldset className="form-fieldset ui-input __fourth"></fieldset>
          <p>{infoMsg}</p>
        </form>
        <form className="form">
          <h2>Asetukset</h2>
          <fieldset className="form-fieldset ui-input __first">
            <input
              name="answer-time"
              type="number"
              id="vastausaika"
              min={5}
              value={roomOptions.answerTime}
              onChange={e =>
                setRoomOptions({ answerTime: parseInt(e.target.value) })
              }
            />
            <label htmlFor="answer-time">
              <span data-text="Vastausaika">Vastausaika</span>
            </label>
          </fieldset>
          <fieldset className="form-fieldset ui-input __second">
            <input
              name="czar-time"
              type="number"
              id="czar-aika"
              min={-1}
              value={roomOptions.czarTime}
              onChange={e =>
                setRoomOptions({ czarTime: parseInt(e.target.value) })
              }
            />
            <label htmlFor="czar-time">
              <span data-text="Vastausten lukemisaika">
                Vastausten lukemisaika
              </span>
            </label>
          </fieldset>
          <fieldset className="form-fieldset ui-input __third">
            <input
              name="cards-in-hand"
              type="number"
              id="cards-in-hand"
              min={1}
              max={10}
              value={roomOptions.cardsInHand}
              onChange={e =>
                setRoomOptions({ cardsInHand: parseInt(e.target.value) })
              }
            />
            <label htmlFor="cards-in-hand">
              <span data-text="Kortteja kädessä">Kortteja kädessä</span>
            </label>
          </fieldset>
        </form>
        <br></br>
        <Button text="Luo huone" onClick={createRoom} />
      </div>
    </div>
  );
}

export default NewRoom;
