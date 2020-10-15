import React, { useState, useContext } from "react";
import { useParams, Redirect, Link } from "react-router-dom";

import WSApiContext from "../api/websocket";
import useGameApi from "../api/api";

import "./NewJoin.css";
import { setLocalSession } from "../api/session";

function Join() {
	const { roomName: paramsRoomId } = useParams();

	// websocket api
	const ws = useContext(WSApiContext);
	const api = useGameApi(ws);

	const [roomId, setRoomId] = useState("");
	const [username, setUsername] = useState("");
	const [roomPassword, setRoomPassword] = useState("");
	const [infoMsg, setInfoMsg] = useState("");

	async function joinRoom(room_id, room_password) {
		// authenticate
		const session = await api.authenticate(null, username);
		setLocalSession(session);
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
		<div className="container">
			<Link className="back-link" to="/">
				Takaisin
			</Link>
			<h1>Liity peliin</h1>
			<h2>liity toisen henkilön luomaan peliin...</h2>
			<form className="form" autoComplete="off">
				<fieldset className="form-fieldset ui-input __first">
					<input
						type="text"
						id="huoneen nimi"
						vvalue={roomId}
						onChange={e => setRoomId(e.target.value)}
					/>
					<label htmlFor="huoneen nimi">
						<span data-text="Huoneen nimi">Huoneen nimi</span>
					</label>
				</fieldset>

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
					<input
						id="submit-request"
						type="submit"
						onClick={e => {
							e.preventDefault();
							joinRoom(roomId, roomPassword);
						}}
					/>
				</fieldset>
				<p>{infoMsg}</p>
			</form>
		</div>
	);
}

export default Join;
