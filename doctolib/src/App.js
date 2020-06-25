import React, { createContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/login/Signin";
import CreateAccount from "./components/login/Create_account";
import MyInformation from "./components/login/MyInformation";
import Home from "./components/Home";
import MyTreatment from "./components/login/Mytreatment";
import Medication from "./components/Medication";
import Mymedidoc from "./components/Mymedidoc";
import Stat from "./components/stats/Stat.jsx";

function App() {
  const UserContext = createContext();
  return (
    <>
      <Router>
        <Switch>
          <UserContext.Provider>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/createaccount" component={CreateAccount} />
            <Route exact path="/information" component={MyInformation} />
            <Route exact path="/treatment" component={MyTreatment} />
            <Route exact path="/pilllist" />
            <Route exact path="/stat" component={Stat} />
            <Route exact path="/mymedidocs" component={Mymedidoc} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/medication" component={Medication} />
          </UserContext.Provider>
        </Switch>
      </Router>
    </>
  );
}
export default App;
