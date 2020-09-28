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
import GameRenderer from "../components/renderer";

/*
 * Test data
 */
import testData_PCA from "../test/testData/playersChooseAnswers";

function askNickname() {
  return prompt("Choose a nickname");
}

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

  /*
   * Authenticate and join room
   */
  useEffect(() => {
    (async () => {
      // request authentication, and ask for a nickname if fresh session
      const session = await api.authenticate(null, askNickname);
      setUserInfo(session);

      // join room after authentication
      await api.join({
        room_id: paramsRoomId,
        room_password: "-",
        sid: session.sid,
      });
    })();
  }, []);

  /*
   * Listen to game updates
   */
  useEffect(() => {
    // create a listener to update game data whenever game updates are received
    const listener = (d) => setGameData(d);
    ws.addListener(listener);

    // remove listener when unmounting
    return () => ws.removeListener(listener);
  }, []);

  return <GameRenderer data={testData_PCA} />;
}

export default Room;
