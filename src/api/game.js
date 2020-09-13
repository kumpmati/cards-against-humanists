import { getLocalSession, setLocalSession } from "./session";

// message types
import {
  ValidateSession,
  JoinRoom,
  NewSession,
  CreateRoom,
  GetState,
} from "../types/message";

const isValidSession = (s) => !!s && !!s.session_id && !!s.name;
//const hasErr = (data) => !!data && !!data.error;
//const hasErrType = (data, type) => hasErr(data) && data.error === type;

function useGameApi({ requestAsync }) {
  // requests server to validate session
  // returns session if data is valid
  // returns error if invalid data or session
  function validateSession(session) {
    return requestAsync({
      type: ValidateSession,
      session_id: session.session_id || "a", // default to non-empty string to prevent errors
    });
  }

  // requests a new session from the server
  // returns session if data is valid
  // returns error if data is invalid
  function newSession(name) {
    return requestAsync({
      type: NewSession,
      name: name || `Player${~~(Math.random() * 10000)}`, // default to random name
      join_time: new Date(),
    });
  }

  // verifies locally saved session and generates new one if it has expired
  // NOTE: player's name won't change from the one
  // saved in localstorage until localstorage is cleared,
  // even if session is invalid.
  async function authenticate(customSession) {
    const session = isValidSession(customSession)
      ? customSession
      : getLocalSession();

    const localSessionRes = await validateSession(session);
    // request a new session if local is invalid
    if (!isValidSession(localSessionRes)) {
      // create new session
      const newSessionRes = await newSession(session.name);
      if (isValidSession(newSessionRes)) {
        // return new session if session was successfully created
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
  function join({ room_name, session }) {
    return requestAsync({
      type: JoinRoom,
      room_name,
      session_id: session.session_id,
    });
  }

  // create a new room
  function create({ room_name }) {
    return requestAsync({ type: CreateRoom, room_name });
  }

  // get the state of a room
  function getState({ room_name, session }) {
    return requestAsync({
      type: GetState,
      room_name: room_name,
      session_id: session.session_id,
    });
  }

  return { authenticate, join, create, getState, localSession };
}

export default useGameApi;
