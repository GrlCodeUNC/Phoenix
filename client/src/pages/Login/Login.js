import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "bulma/css/bulma.css";
import "./Login.css";
import GoogleLogin from "react-google-login";
import Logo from "../../components/PhoenixLogo";
import Word from "../../components/PhoenixWord";
import Columns from "react-bulma-components/lib/components/columns";
import Column from "react-bulma-components/lib/components/columns/components/column";

class Login extends Component {
  state = {
    loginSuccess: false,
    userEmail: ""
  };

  responseGoogle = response => {
    if (response.profileObj) {
      this.setState({
        loginSuccess: true,
        userEmail: response.profileObj.email
      });

      localStorage.clear();
      localStorage.setItem("name", response.profileObj.name);
      localStorage.setItem("email", response.profileObj.email);
      localStorage.setItem("picture", response.profileObj.imageUrl);

      window.location = "/Dashboard";
    } else {
      console.log(response.error);
    }
  };

  render() {
    return (
      <div>
        <div>
          <Columns>
            <Column>
              <Logo location="login" />
            </Column>
            <Column style={{ display: "block", margin: "auto" }}>
              <GoogleLogin
                clientId="1071904739843-5tl56tqp05ap4td8gsahf9uj0nrkrvhu.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
                style={{
                  fontFamily: "Varela Round, sansSerif",
                  fontSize: "15px",
                  backgroundColor: "#f99a1c",
                  opacity: ".7",
                  padding: "10px",
                  color: "white",
                  border: "none"
                }}
              />

              <h5 className="visualize">
                Visualize your bucket list dreams and reach them with Phoenix!
              </h5>
            </Column>
          </Columns>
        </div>
        <Word location="login" />
      </div>
    );
  }
}

export default Login;
