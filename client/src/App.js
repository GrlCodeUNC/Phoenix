import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bulma/css/bulma.css';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from "./pages/Login";
import NewActivity from "./pages/NewActivity";
import Description from "./pages/Description";

const App = () => (
  <Router>
    <div>
      <Switch>
        {/* <Route exact path="/" component={Dashboard} /> */}
        <Route exact path="/" component={Login} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/NewActivity" component={NewActivity} />
        <Route exact path="/Description" component={Description} />
      </Switch>
    </div>
  </Router>
);


export default App;