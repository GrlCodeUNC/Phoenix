import React, { Component } from "react";
import 'bulma/css/bulma.css';
import Image from 'react-bulma-components/lib/components/image';


const imageStyle = {
    borderRadius: "50%"
}

const UserPhoto = props => {
// Look into the Image component
return(<Image style={{borderRadius: "50%"}} src={localStorage.getItem("picture")} size={96}/>) 

// const myImage = new Image(80);
// myImage.src = "picture";
// document.body.appendChild(myImage);

// const image = $("<img>");
//     image.addClass("circle").attr("width", "80").attr("src", "picture");
//     $("#is-one-quarter").append(image);

}



git 

export default UserPhoto;