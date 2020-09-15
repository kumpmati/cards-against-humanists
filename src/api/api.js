import { getLocalSession, setLocalSession } from "./session";

// message types
import {
  NewSession,
  ValidateSession,
  JoinRoom,
  LeaveRoom,
  CreateRoom,
  GetState,
  SendAction,
} from "./types/message";

const isValidSession = (s) => !!s && !!s.sid && !!s.name;

// game api
function useGameApi({ requestAsync }) {
  // requests server to validate session
  function validateSession(session) {
    return requestAsync({
      type: ValidateSession,
      data: {
        sid: session.sid || "a", // default to non-empty string to prevent errors
      },
    });
  }

  // requests a new session from the server
  function newSession(name) {
    return requestAsync({
      type: NewSession,
      data: {
        name: name || `Player${~~(Math.random() * 10000)}`, // default to random name
        join_time: new Date(),
      },
    });
  }

  // verifies locally saved session and generates new one if it has expired
  // NOTE: currently player's name won't change from the one
  // saved in localstorage until localstorage is cleared even if it's invalid.
  async function authenticate(customSession, newNicknameCallback) {
    const session = isValidSession(customSession)
      ? customSession
      : getLocalSession();

    const localSessionRes = await validateSession(session);
    // request a new session if local is invalid
    if (!isValidSession(localSessionRes)) {
      let nickname = session.name;
      // get new name from callback if provided
      if (typeof newNicknameCallback === "function") {
        nickname = newNicknameCallback();
      }
      // create new session
      const newSessionRes = await newSession(nickname);
      // return new session if session was successfully created
      if (isValidSession(newSessionRes)) {
        setLocalSession(newSessionRes);
        return newSessionRes;
      }
      return {
        error: "ERROR",
        data: "something went wrong while retrieving session",
      };
    }

    setLocalSession(localSessionRes);
    return localSessionRes;
  }

  function localSession() {
    return getLocalSession();
  }

  // join a room
  function join({ room_name, room_password, sid }) {
    return requestAsync({
      type: JoinRoom,
      data: {
        room_name,
        room_password,
        sid,
      },
    });
  }

  // remove the player from current room
  function leave({ sid }) {
    return requestAsync({
      type: LeaveRoom,
      data: { sid },
    });
  }

  // create a new room
  function create({ room_name, room_password, sid }) {
    return requestAsync({
      type: CreateRoom,
      data: { room_name, room_password, game_type: "cah", sid },
    });
  }

  // get the state of a room
  function getState({ sid }) {
    return requestAsync({
      type: GetState,
      data: {
        sid,
      },
    });
  }

  // send data to current game room
  function sendAction({ data, sid }) {
    return requestAsync({
      type: SendAction,
      data: {
        sid,
        data,
      },
    });
  }

  return {
    authenticate,
    join,
    create,
    leave,
    getState,
    sendAction,
    localSession,
  };
}

export default useGameApi;
