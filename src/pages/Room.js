import React, { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import WSApiContext from "../api/websocket";
import useGameApi from "../api/game";

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
      // authenticate user
      const session = await api.authenticate();
      setUserInfo(session);
      // join room
      const room = await api.join({ room_name: roomName, session });

      if (!room.error) {
        // get game state if joined successfully
        const newData = await api.getState({
          room_name: roomName,
          session,
        });
        setGameData(newData);
      }
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
