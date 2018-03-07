import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";
import GoogleButton from "../../components/GoogleButton";
import Logo from "../../components/PhoenixLogo";

class Login extends Component {
  render() {
    return (
      <div className="has-text-centered">
        <Logo location='login'/>
        <GoogleButton />
      </div>
    );
  }
}

export default Login;
