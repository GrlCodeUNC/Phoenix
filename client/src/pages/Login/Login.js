import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "bulma/css/bulma.css";
import './Login.css';
// import GoogleButton from "../../components/GoogleButton";
import GoogleLogin from 'react-google-login';
import Logo from "../../components/PhoenixLogo";


class Login extends Component {

// const Login = (props) => {
  
  // do we need state here to check if login has happened or not?
  // How do we handle getting to the next page from here?
  state = {
    loginSuccess: false,
    userEmail: ""
  }

  responseGoogle = (response) => {
    console.log(response);

    if (response.profileObj) {
      console.log("login success");
      
      this.setState({ loginSuccess: true, userEmail: response.profileObj.email });
      console.log(this.state);

      localStorage.clear();
      localStorage.setItem("name", response.profileObj.name);
      localStorage.setItem("email", response.profileObj.email);
      localStorage.setItem("picture", response.profileObj.imageUrl);

      window.location = "/Dashboard";
      // return (
      //   <Redirect to='/Dashboard' />
      // );
      
    }
    else {
      console.log("login failed")
      console.log(response.error);
    }
  }
  

  goToDashboard = user => {
    // do we need this to move to the dashboard page??


  }


  render() {
    return (
      <div className="has-text-centered">
       
        <Logo location='login'/>
       
        <GoogleLogin 
          clientId="1071904739843-5tl56tqp05ap4td8gsahf9uj0nrkrvhu.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
        {/* {this.state.loginSuccess ? <Link to="/Dashboard" /> : <Link to="/Login" />} */}
        {/* <GoogleButton /> */}
        {/* <GoogleButton onClick={() => this.goToDashboard} /> */}
        {/* <Link to="/Dashboard">
          <GoogleButton />
        </Link> */}
      </div>
    );
  }
}

export default Login;
