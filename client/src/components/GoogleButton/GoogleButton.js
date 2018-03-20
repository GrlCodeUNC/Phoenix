import React, { Component } from "react";
import "bulma/css/bulma.css";
import PropTypes from "prop-types";
import API from "../../utils/API";
import axios from "axios";

class GoogleLogin extends Component {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.state = {
      disabled: true
    };
  }
  componentDidMount() {
    const {
      clientId,
      loginHint,
      hostedDomain,
      autoLoad,
      isSignedIn,
      fetchBasicProfile,
      redirectUri,
      discoveryDocs,
      onFailure,
      uxMode,
      scope,
      responseType
    } = this.props;
    ((d, s, id, cb) => {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      let js = element;
      js = d.createElement(s);
      js.id = id;
      js.src = "//apis.google.com/js/client:platform.js";
      fjs.parentNode.insertBefore(js, fjs);
      js.onload = cb;
    })(document, "script", "google-login", () => {
      const params = {
        client_id:
          "1071904739843-5tl56tqp05ap4td8gsahf9uj0nrkrvhu.apps.googleusercontent.com",
        login_hint: loginHint,
        hosted_domain: hostedDomain,
        fetch_basic_profile: fetchBasicProfile,
        discoveryDocs,
        ux_mode: uxMode,
        redirect_uri: redirectUri,
        scope
      };
      if (responseType === "code") {
        params.access_type = "offline";
      }

      window.gapi.load("auth2", () => {
        this.enableButton();
        if (!window.gapi.auth2.getAuthInstance()) {
          window.gapi.auth2.init(params).then(
            res => {
              if (isSignedIn && res.isSignedIn.get()) {
                this._handleSigninSuccess(res.currentUser.get());
              }
            },
            err => onFailure(err)
          );
        }
        if (autoLoad) {
          this.signIn();
        }
      });
    });
  }
  componentWillUnmount() {
    this.enableButton = () => {};
  }
  enableButton() {
    this.setState({
      disabled: false
    });
  }
  signIn = event => {
    event.preventDefault();
    // to prevent submit if used within form
    if (!this.state.disabled) {
      const auth2 = window.gapi.auth2.getAuthInstance();
      const {
        onSuccess,
        onRequest,
        onFailure,
        prompt,
        responseType
      } = this.props;
      const options = {
        prompt
      };
      onRequest();
      if (responseType === "code") {
        auth2
          .grantOfflineAccess(options)
          .then(res => onSuccess(res), err => onFailure(err));
      } else {
        auth2.signIn(options).then(res => this._handleSigninSuccess(res));
      }
    }
  };
  _handleSigninSuccess(res) {
    /*
      offer renamed response keys to names that match use
    */
    const basicProfile = res.getBasicProfile();
    const authResponse = res.getAuthResponse();
    res.googleId = basicProfile.getId();
    res.tokenObj = authResponse;
    res.tokenId = authResponse.id_token;
    res.accessToken = authResponse.access_token;
    res.profileObj = {
      googleId: basicProfile.getId(),
      imageUrl: basicProfile.getImageUrl(),
      email: basicProfile.getEmail(),
      name: basicProfile.getName()
    };
  }

  render() {
    const {
      tag,
      type,
      style,
      className,
      disabledStyle,
      buttonText,
      children
    } = this.props;
    const disabled = this.state.disabled || this.props.disabled;
    const initialStyle = {
      display: "inline-block",
      background: "#5F9EA0",
      color: "#fff",
      width: 190,
      paddingTop: 10,
      paddingBottom: 10,
      borderRadius: 2,
      border: "1px solid transparent",
      fontSize: 16,
      fontWeight: "bold",
      fontFamily: "Varela Round",
      sansSerif
    };
    const styleProp = (() => {
      return initialStyle;
    })();
    const defaultStyle = (() => {
      return styleProp;
    })();

    const googleLoginButton = React.createElement(
      tag,
      {
        onClick: this.signIn,
        style: defaultStyle,
        type,
        className
      },
      children || buttonText
    );
    return googleLoginButton;
  }
}

GoogleLogin.defaultProps = {
  type: "button",
  tag: "button",
  buttonText: "Login with Google",
  scope: "profile email",
  prompt: "",
  fetchBasicProfile: true,
  isSignedIn: false,
  uxMode: "popup",
  onRequest: () => {}
};

export default GoogleLogin;
