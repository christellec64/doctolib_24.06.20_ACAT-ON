import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Medication from "./components/Medication";
import Mymedidoc from "./components/Mymedidoc";
import Stat from './components/stats/Stat.jsx';
 
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" />
          <Route exact path="/createaccount" />
          <Route exact path="/information" />
          <Route exact path="/treatment" />
          <Route exact path="/pilllist" />
          <Route exact path="/stat" component={Stat}/>
          <Route exact path="/ordonance" component={Mymedidoc} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/medication" component={Medication} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
