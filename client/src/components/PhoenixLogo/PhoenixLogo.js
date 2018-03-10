import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";
import Logo from "../../phoenix_logo.png";
import "./PhoenixLogo.css";
import Image from "react-bulma-components/lib/components/image";


class PhoenixLogo extends Component {

    render() {
        let cssClass = '';
        if (this.props.location === 'login') {
            cssClass = 'Logo-Login'
        } else if (this.props.location === 'dashboard') {
            cssClass = 'Logo-Dashboard'
        }
        return (     
            <Image src={Logo} className={cssClass} alt="logo" size="3by2" />
        )
    }
}

export default PhoenixLogo;