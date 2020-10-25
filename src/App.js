import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import connect from "socket.io-client";
import "./App.css";

/*
 * Websocket API
 */
import WSContext, { useWebSocketApi } from "./api/websocket";

/*
 * Pages
 */
import Home from "./pages/Home";
import Room from "./pages/Room";
import NewRoom from "./pages/New";
import Join from "./pages/Join";
import CardSubmit from "./pages/CardSubmit";
import BrowseCards from "./pages/BrowseCards";
import FormatHelp from "./pages/FormatHelp";
import Test from "./pages/Test";

// connect to different places depending on node env
const url =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_WS_URL
    : process.env.REACT_APP_WS_URL_DEV;

function App() {
  // connect to backend using socket.io
  const io = connect(`${url}/game`);
  // provide socket.io connection to the websocket interface
  const WSConnection = useWebSocketApi(io);

  return (
    <main id="App">
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
            <Route path="/submit">
              <CardSubmit />
            </Route>
            <Route path="/browse">
              <BrowseCards />
            </Route>
            <Route path="/format">
              <FormatHelp />
            </Route>
            <Route path="/test/:roomID?">
              <Test io={io} />
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
