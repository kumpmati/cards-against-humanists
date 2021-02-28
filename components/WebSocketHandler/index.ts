import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

export enum CahumEventTypes {
  Message = "msg",
}

export const connect = (nsp: string) => {
  const ws = useRef<Socket>(null);

  useEffect(() => {
    console.log("connecting to:", nsp);
    ws.current = io(`http://localhost:9000/${nsp}`);

    return () => {
      console.log("disconnecting from:", nsp);
      ws.current.disconnect();
    };
  }, [nsp]);

  /**
   * Assigns an event handler, and removes that event handler upon cleanup
   * @param event Event
   * @param handler Handler
   */
  const useWebSocket = (event: any, handler: any) => {
    useEffect(() => {
      ws.current.on(event, handler);

      return () => {
        ws.current.off(event, handler);
      };
    }, [event, handler]);
  };

  /**
   * Sends an event with data through the socket
   * @param event Event
   * @param data Data
   */
  const sendEvent = (event: any, data: any) => {
    ws.current.emit(event, data);
  };

  return {
    useWebSocket,
    sendEvent,
  };
};
