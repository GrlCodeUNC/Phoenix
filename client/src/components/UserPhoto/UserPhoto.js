import React, { Component } from "react";
import 'bulma/css/bulma.css';
import Image from 'react-bulma-components/lib/components/image';


const UserPhoto = props => {

return(<Image src={localStorage.getItem("picture")} size={96}/>) 

}



export default UserPhoto;