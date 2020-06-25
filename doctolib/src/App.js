<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Medication from "./components/Medication";
=======
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Stat from './components/stats/Stat.jsx';
>>>>>>> 5afb71b0cc532005c8a50e12502a496ad92f9a9d

function App() {
  return (
    <>
<<<<<<< HEAD
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
          <Route exact path="/ordonance" />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/medication" component={Medication} />
        </Switch>
      </Router>
=======
    <Router>
      <div>
        <Link to ='/'></Link>
        <Link to ='/signin'></Link>
        <Link to ='/createaccount'></Link>
        <Link to ='/information'></Link>
        <Link to ='/treatment   '></Link>
        <Link to ='/pilllist'></Link>
        <Link to ='/stat'></Link>
        <Link to ='/ordonance '></Link>
        <Link to ='/dashboard'></Link>
      </div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' />
        <Route exact path='/createaccount' />
        <Route exact path='/information' />
        <Route exact path='/treatment' />
        <Route exact path='/pilllist' />
        <Route exact path='/stat' component={Stat} />
        <Route exact path='/ordonance' />
        <Route exact path='/dashboard' component={Dashboard} />
      </Switch>
    </Router>
>>>>>>> 5afb71b0cc532005c8a50e12502a496ad92f9a9d
    </>
  );
}

export default App;
