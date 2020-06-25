import React, { createContext } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/login/Signin";
import Home from "./components/Home";
import Medication from "./components/Medication";
import MainPage from "./components/login/wrapper";
import MyTreatment from "./components/login/Mytreatment";
import Mymedidoc from "./components/Mymedidoc";
import Stat from "./components/stats/Stat.jsx";


function App() {
  return (
    <>
      <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/createaccount" component={MainPage} />
            <Route exact path="/treatment" component={MyTreatment} />
            <Route exact path="/pilllist" />                   
            <Route exact path="/stat" component={Stat} />
            <Route exact path="/mymedidocs" component={Mymedidoc} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/medication" component={Medication} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
