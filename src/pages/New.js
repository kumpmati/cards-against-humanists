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
  const [roomOptions, setRoomOptions] = useState({
    czarTime: -1,
    answerTime: 90,
    winnerShowTime: 5,
    cardsInHand: 7,
    packs: ["all"],
  });
  const [infoMsg, setInfoMsg] = useState("");
  const [showSettings, setShowSettings] = useState(false);

  async function createRoom(e) {
    // prevent page refresh
    e.preventDefault();

    const session = await api.newSession(username);
    setLocalSession(session);

    // request backend to create a new room
    const created = await api.create({
      room_password: "", // no password for now
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
    <div id="Home">
      <Link className="back-link" to="/">
        Takaisin
      </Link>
      <h1>Uusi peli</h1>
      <p>Luo uusi peli ja kutsu kavereita pelaamaan!</p>
      <div id="grid">
        <form className="form" autoComplete="off">
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

          <p>{infoMsg}</p>
        </form>
        <form
          className={`form ${showSettings ? "visible" : ""}`}
          id="game-settings">
          <fieldset className="form-fieldset ui-input __first">
            <input
              name="answer-time"
              type="number"
              id="vastausaika"
              min={5}
              value={roomOptions.answerTime}
              onChange={e =>
                setRoomOptions({
                  ...roomOptions,
                  answerTime: parseInt(e.target.value),
                })
              }
            />
            <label htmlFor="answer-time">
              <span data-text="Vastausaika">Vastausaika</span>
            </label>
          </fieldset>
          <fieldset className="form-fieldset ui-input __second">
            <input
              title="Aika sekunteina, -1 tarkoittaa ei aikarajaa"
              name="czar-time"
              type="number"
              id="czar-time"
              min={-1}
              value={roomOptions.czarTime}
              onChange={e =>
                setRoomOptions({
                  ...roomOptions,
                  czarTime: parseInt(e.target.value),
                })
              }
            />
            <label htmlFor="czar-time">
              <span data-text="Lukemisaika">Lukemisaika</span>
            </label>
          </fieldset>

          <fieldset className="form-fieldset ui-input __second">
            <input
              name="cards-in-hand"
              type="number"
              id="cards-in-hand"
              min={1}
              max={10}
              value={roomOptions.cardsInHand}
              onChange={e =>
                setRoomOptions({
                  ...roomOptions,
                  cardsInHand: parseInt(e.target.value),
                })
              }
            />
            <label htmlFor="cards-in-hand">
              <span data-text="Kortteja kädessä">Kortteja kädessä</span>
            </label>
          </fieldset>
        </form>
        <fieldset className="form-fieldset ui-input __third">
          <Button
            text="Asetukset"
            inverse
            onClick={() => setShowSettings(s => !s)}
          />
        </fieldset>
        <br></br>

        <fieldset className="form-fieldset ui-input __fourth">
          <Button text="Luo" onClick={createRoom} />
        </fieldset>
      </div>
    </div>
  );
}

export default NewRoom;
