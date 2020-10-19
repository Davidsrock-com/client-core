import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import CreateEvent from "./pages/CreateEvent";
import CreateGroup from "./pages/CreateGroup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

import Navigation from "./components/Navigation";

const App = () => {
  return (
    //Routes + Navigation
    <Router>
      <Container>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/create-group" component={CreateGroup} />
        <Route path="/create-event" component={CreateEvent} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Container>
    </Router>
  );
};

export default App;
