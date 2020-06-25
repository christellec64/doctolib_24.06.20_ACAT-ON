import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SignIn from "./components/login/Signin";
import CreateAccount from "./components/login/Create_account";
import MyInformation from "./components/login/MyInformation";
import Home from "./components/Home";
import MyTreatment from "./components/login/Mytreatment";
import Medication from "./components/Medication";

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
                    <Route exact path="/signin" component={SignIn} />
                    <Route
                        exact
                        path="/createaccount"
                        component={CreateAccount}
                    />
                    <Route
                        exact
                        path="/information"
                        component={MyInformation}
                    />
                    <Route exact path="/treatment" component={MyTreatment} />
                    <Route exact path="/pilllist" />
                    <Route exact path="/stat" />
                    <Route exact path="/ordonance" />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/medication" component={Medication} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
