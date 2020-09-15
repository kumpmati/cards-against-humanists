import React, { useContext, useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";

import WSApiContext from "../api/websocket";
import useGameApi from "../api/api";

// ingame room
function Room() {
  const { roomName } = useParams();

  // websocket api
  const ws = useContext(WSApiContext);
  const api = useGameApi(ws);

  const [gameData, setGameData] = useState();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    (async () => {
      // authenticate user and ask for a nickname if session is new
      const session = await api.authenticate(null, () =>
        prompt("Choose a nickname:")
      );
      setUserInfo(session);
    })();
  }, []);

  return (
    <div>
      <div>{JSON.stringify(gameData)}</div>
      <p>{JSON.stringify(userInfo)}</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default Room;
