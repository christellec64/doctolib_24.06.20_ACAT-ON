import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Medication from "./components/Medication";
import MainPage from "./components/login/wrapper";
import MyTreatment from "./components/login/Mytreatment";
import Mymedidoc from "./components/Mymedidoc";
import Stat from "./components/stats/Stat.jsx";


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/createaccount" component={MainPage} />
            <Route exact path="/treatment" component={MyTreatment} />
            <Route exact path="/stat" component={Stat} />
            <Route exact path="/mymedidocs" component={Mymedidoc} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/medication" component={Medication} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
