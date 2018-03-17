import React, { Component } from "react";
import 'bulma/css/bulma.css';




const UserName = props => {
    let name = localStorage.getItem("name")
    
    let style = {
        paddingTop: "45px",
        textAlign: "right"
      };
  
    return (
      <div style={style}>
        {name}
      </div>
    );
  };




export default UserName;