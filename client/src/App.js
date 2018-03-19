import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bulma/css/bulma.css';
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from "./pages/Login";
import NewActivity from "./pages/NewActivity";
import Description from "./pages/Description";
// import Fonts from "../../client/node_modules/google-fonts";


// class App extends Component {
//   state = {
  // loginSuccess: false,
  //   userEmail: ""
//   }

{/* <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} /> */}

const App = () => (
  <Router>
    <Switch>
      {/* <Route exact path="/" component={Dashboard} /> */}
      <Route exact path="/" component={Login} />

      {/* <Route exact path="/" loggedIn={this.state.loginSuccess} component={Login} /> 
      <Route exact path="/Dashboard" component={Dashboard} />
      <Route exact path="/NewActivity" component={NewActivity} />
      <Route exact path="/Description" component={Description} /> */}

      <Route exact path="/Dashboard" component={Dashboard} />
      <Route exact path="/NewActivity" component={NewActivity} />
      <Route exact path="/Description" component={Description} />
    </Switch>
  </Router>
);


export default App;