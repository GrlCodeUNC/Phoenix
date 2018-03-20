import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";
import Logo from "../../phoenix_logo.png";
import "./PhoenixLogo.css";

class PhoenixLogo extends Component {
  render() {
    let cssClass = "";
    if (this.props.location === "login") {
      cssClass = "Logo-Login";
    } else if (this.props.location === "dashboard") {
      cssClass = "Logo-Dashboard";
    }
    return <img src={Logo} className={cssClass} alt="logo" />;
  }
}

export default PhoenixLogo;
