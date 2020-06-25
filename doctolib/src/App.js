import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Medication from "./components/Medication";
import Mymedidoc from "./components/Mymedidoc";

function App() {
  return (
    <>
      <Router>
        <div>
          <Link to="/"></Link>
          <Link to="/signin"></Link>
          <Link to="/createaccount"></Link>
          <Link to="/information"></Link>
          <Link to="/treatment   "></Link>
          <Link to="/pilllist"></Link>
          <Link to="/stat"></Link>
          <Link to="/ordonance "></Link>
          <Link to="/dashboard"></Link>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" />
          <Route exact path="/createaccount" />
          <Route exact path="/information" />
          <Route exact path="/treatment" />
          <Route exact path="/pilllist" />
          <Route exact path="/stat" />
          <Route exact path="/ordonance" component={Mymedidoc} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/medication" component={Medication} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
