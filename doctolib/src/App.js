import React, { createContext } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/login/Signin";
import Home from "./components/Home";
import Medication from "./components/Medication";
import MainPage from "./components/login/wrapper";
import MyTreatment from "./components/login/Mytreatment";

function App() {
  const UserContext = createContext();
  return (
    <>
      <Router>
        <Switch>
          <UserContext.Provider>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/createaccount" component={MainPage} />
            <Route exact path="/treatment" component={MyTreatment} />
            <Route exact path="/pilllist" />
            <Route exact path="/stat" />
            <Route exact path="/ordonance" />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/medication" component={Medication} />
          </UserContext.Provider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
