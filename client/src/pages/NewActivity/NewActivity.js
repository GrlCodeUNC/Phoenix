import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";
import Container from "react-bulma-components/lib/components/container";
import Section from "react-bulma-components/lib/components/section";
import Heading from "react-bulma-components/lib/components/heading";
import Field from "react-bulma-components/lib/components/form/components/field";
import Control from "react-bulma-components/lib/components/form/components/control";
import Input from "react-bulma-components/lib/components/form/components/input";
import Button from "react-bulma-components/lib/components/button";
import Image from "react-bulma-components/lib/components/image";
import "./NewActivity.css";
import photoAPI from "../../utils/photoAPI";

class NewActivity extends Component {

  state = {
    imgData: [],
    keyword: ""
  };

  handleInputChange = event => {
    event.preventDefault();
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  createImgList = event => {

    event.preventDefault();
    
    // console.log(this.state.keyword);

    photoAPI.getAllImages(this.state.keyword)
      .then( imgResults => {

        const imgArray = imgResults.data.images

        console.log("image Array elements = ");
        // console.log(imgArray);

        this.setState({ imgData: imgArray, keyword: "" });

        console.log(this.state.imgData);
                
      })
      .catch( err => console.log(err));

  };

  goToActivityDetails = imgLink => {

    console.log(imgLink);
    localStorage.setItem("activityImageLink", imgLink);

    window.location = "/Description";
  };

  render() {

    return (
      <Section>
        <Container default className="NewActivity">
          <div className="title has-text-centered">
            <Heading size={5} renderAs="p">
              New Activity
            </Heading>
          </div>
          <div className="keyword has-text-centered">
            <Field>
              <Control>
                <Input placeholder="Keyword..." 
                   value={this.state.keyword}
                   name="keyword"
                   onChange={this.handleInputChange}
                   type="text"
                />
              </Control>
              <Button onClick={this.createImgList}>
                Search
              </Button>
            </Field>
          </div>
          <div className="pictures has-text-centered">
            {this.state.imgData.map(image => (
                <Image 
                  id={image.id}
                  key={image.id} 
                  alt={image.title} 
                  src={image.display_sizes[0].uri}
                  onClick={() => this.goToActivityDetails(image.display_sizes[0].uri)} // this way it passes the function to be called w/ the event triggers
                />
            ))}
          </div>
        </Container>
      </Section>
    );
  }
}

export default NewActivity;

// USE CONTAINER IMPORT IN BULMA
