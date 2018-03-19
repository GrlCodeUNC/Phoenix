import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";
import word from "../../PhoenixWordLogo-02.png";
import "./PhoenixWord.css";


class PhoenixWord extends Component {

    render() {
        let cssClass = '';
        if (this.props.location === '') {
            cssClass = 'Word-Dashboard'
        } else if (this.props.location === 'newActivity') {
            cssClass = 'Word-NewActivity'
        }
          else if (this.props.location === 'description') {
            cssClass = 'Word-Description'
        }
          else if (this.props.location === 'login') {
            cssClass = 'Word-Login'
        }

        return (
               <img src={word} className={cssClass} alt="word" style={{position:"fixed", opacity: ".3", bottom:"0px"}}/> 
        )
    }
}

export default PhoenixWord;


