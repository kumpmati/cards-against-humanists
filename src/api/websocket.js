import React from "react";
import { v4 as uuidv4 } from "uuid";

const WSApiContext = React.createContext(null);
const MESSAGE_TIMEOUT = 5;

// simple data validation, check that data has an id and data
const validData = (data) => !!data && !!data.id && !!data.data;

function useWebSocketApi(socket) {
  const queue = new Map();
  const listeners = new Set();

  // handle incoming data
  socket.on("data", (incomingData) => {
    if (validData(incomingData) && queue.has(incomingData.id)) {
      const { data, id } = incomingData;
      const callback = queue.get(id);
      callback(data);
      // remove id from the queue after callback
      queue.delete(id);
    }
    // always call each listener with the data
    listeners.forEach((listener) => listener(incomingData));
  });

  function request(data, callback) {
    // generate a uuid for the outgoing data
    const id = uuidv4();
    socket.emit("data", { data, id });
    // use same ID to identify callback in queue
    queue.set(id, callback);
  }

  function requestAsync(data) {
    // promisify the callback-based request
    return new Promise((resolve, reject) => {
      request(data, (responseData) => {
        resolve(responseData);
        clearTimeout();
      });

      // reject the message if timed out
      setTimeout(
        () => reject({ error: "message timed out", data }),
        MESSAGE_TIMEOUT * 1000
      );
    });
  }

  function addListener(callback) {
    listeners.add(callback);
  }

  function removeListener(callback) {
    listeners.delete(callback);
  }

  return { socket, request, requestAsync, addListener, removeListener };
}

export default WSApiContext;
export { useWebSocketApi };
