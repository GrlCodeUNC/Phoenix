import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bulma/css/bulma.css';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from "./pages/login";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/Login" component={Login} />
      </Switch>
    </div>
  </Router>
);


export default App;