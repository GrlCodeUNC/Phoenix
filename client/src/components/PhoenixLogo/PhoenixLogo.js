import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";
import Logo from './phoenix_logo.png';

class PhoenixLogo extends Component {

    render() {
        return (
               <img src={Logo} className="App-logo" alt="logo" /> 
        )
    }
}

