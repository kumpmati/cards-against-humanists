// message types
module.exports = {
  NewSession: "NEW_SESSION",
  ValidateSession: "VALIDATE_SESSION",

  JoinRoom: "JOIN_ROOM",
  LeaveRoom: "LEAVE_ROOM",
  CreateRoom: "CREATE_ROOM",

  GetState: "GET_STATE",
  SendAction: "SEND_ACTION",
  Heartbeat: "HEARTBEAT", // debug

  CardSubmission: "CARD_SUBMISSION",
  GetData: "GET_DATA",
};
