import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";
import GoogleLogin from "../../components/GoogleButton";

class Login extends Component {
    
render() {
    return (
      <div className="container center">
              <GoogleLogin/>
      </div>
    );
  }
}

export default Login;
