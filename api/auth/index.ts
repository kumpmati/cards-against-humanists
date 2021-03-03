import { AuthToken } from "../websocket/types";

export const getToken = (): AuthToken =>
  JSON.parse(localStorage.getItem("token"));

export const setToken = (token: AuthToken) =>
  localStorage.setItem("token", JSON.stringify(token));

export const isAuthToken = (o: any): o is AuthToken => {
  return (
    o != null &&
    o.hasOwnProperty("gameID") &&
    typeof o.gameID === "string" &&
    o.hasOwnProperty("token") &&
    typeof o.token === "string"
  );
};
