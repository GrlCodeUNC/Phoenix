import React, { Component } from "react";
import 'bulma/css/bulma.css';



const UserName = props => {

return(<h1 src={localStorage.getItem("name")}/>) 

}


export default UserName;