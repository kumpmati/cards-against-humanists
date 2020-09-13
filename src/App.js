import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import connect from "socket.io-client";

import WSContext, { useWebSocketApi } from "./api/websocket";

import Home from "./pages/Home";
import Room from "./pages/Room";
import NewRoom from "./pages/New";
import Join from "./pages/Join";

function App() {
  // connect to backend using socket.io
  const io = connect(process.env.REACT_APP_WS_URL);
  // provide socket.io connection to the websocket interface
  const WSConnection = useWebSocketApi(io);
  return (
    <main>
      <WSContext.Provider value={WSConnection}>
        <Router>
          <Switch>
            <Route path="/new" exact>
              <NewRoom />
            </Route>
            <Route path="/join/:roomName?">
              <Join />
            </Route>
            <Route path="/room/:roomName" exact>
              <Room />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </WSContext.Provider>
    </main>
  );
}

export default App;
