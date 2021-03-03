import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import { AuthToken } from "./types";

export enum CahumEventTypes {
  Message = "msg",
}

export const useAPI = (nsp?: string) => {
  const ws = useRef<Socket>(null);

  const [connected, setConnected] = useState(false);

  useEffect(() => {
    ws.current = io(`${process.env.NEXT_PUBLIC_API_URL}/${nsp || ""}`);
    ws.current.on("connect", () => setConnected(true));

    return () => {
      setConnected(false);
      ws.current.disconnect();
    };
  }, [nsp]);

  /**
   * Assigns an event handler, and removes that event handler upon cleanup
   * @param event Event
   * @param handler Handler
   */
  const onEvent = (event: any, handler: any) => {
    useEffect(() => {
      ws.current.on(event, handler);

      return () => {
        ws.current.off(event, handler);
      };
    }, [event, handler]);
  };

  const onConnect = (handler: any) => {
    onEvent("connect", handler);
  };

  /**
   * Sends an event with data through the socket
   * @param event Event
   * @param data Data
   */
  const sendEvent = (event: any, data: any) => {
    if (ws.current) ws.current.emit(event, data);
  };

  return {
    onConnect,
    onEvent,
    sendEvent,
    connected,
  };
};
