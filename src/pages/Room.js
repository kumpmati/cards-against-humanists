import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/*
 * API
 */
import WSApiContext from "../api/websocket";
import useGameApi from "../api/api";

/*
 * Game renderer
 */
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
  const [gameData, setGameData] = useState();

  const sendGameAction = async (data) =>
    await api.sendAction({ sid: userInfo ? userInfo.sid : "-", data });

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

  useEffect(() => {
    // listen to updates from server and upate game data
    const listener = (d) => setGameData(d);
    ws.addListener(listener);

    // remove listener when unmounting
    return () => ws.removeListener(listener);
  }, [ws]);

  return (
    <GameRenderer data={gameData} sendAction={(data) => sendGameAction(data)} />
  );
}

export default Room;
