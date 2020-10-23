import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../components/GameRenderer/Game.css";

/*
 * API
 */
import WSApiContext from "../api/websocket";
import useGameApi from "../api/api";

import GameRenderer from "../components/GameRenderer";

/*
 * Room
 */
function Room() {
  const { roomName: paramsRoomId } = useParams();

  // websocket api
  const ws = useContext(WSApiContext);
  const api = useGameApi(ws);

  const [userInfo, setUserInfo] = useState();

  /*
   * Authenticate and join room
   */
  useEffect(() => {
    (async () => {
      // request authentication, and ask for a nickname if fresh session
      const session = await api.authenticate(null, () =>
        prompt("Choose a name:")
      );
      setUserInfo(session);

      // join room after authentication
      const join = await api.join({
        room_id: paramsRoomId,
        sid: session.sid,
      });

      switch (join.error) {
        case "NOT_FOUND":
          alert("Not found");
          break;

        case "INVALID_INFO":
          await api.join({
            room_id: paramsRoomId,
            room_password: prompt("Password:"),
            sid: session.sid,
          });
          break;
        default:
          break;
      }
    })();
  }, [paramsRoomId]);

  return <GameRenderer userInfo={userInfo} roomId={paramsRoomId} />;
}

export default Room;
