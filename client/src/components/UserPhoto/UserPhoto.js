import React, { Component } from "react";
import "bulma/css/bulma.css";
import Image from "react-bulma-components/lib/components/image";

let UserPhoto = function statelessFunctionComponentClass(props) {
  let source = "./images/" + props.source;

  let style = {
    width: "80px",
    margin: "10px 5px 0px 30px",
    borderRadius: "50%",
    position: "fixed"
  };

  return <img src={localStorage.getItem("picture")} style={style} />;
};

export default UserPhoto;
