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
import "./NewActivity.css";
import photoAPI from "../../utils/photoAPI";

class NewActivity extends Component {

  state = {
    imgData: [],
    keyword: ""
  };

  createImgList = imgKeyword => {

    photoAPI.getAllImages(imgKeyword)
      .then( imgResults => {

        const imgArray = imgResults.data.images

        console.log("image Array elements = ");
        console.log(imgArray);

        this.setState({ imgData: imgArray, keyword: "" });
                
      })
      .catch( err => console.log(err));

  };

  componentDidMount() {
    
    // hardcoded since there isn't a working button yet to trigger the search
    this.createImgList("skydiving");
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
                <Input placeholder="Keyword..." />
              </Control>
              <Button>
                Search
              </Button>
            </Field>
          </div>
          <div className="pictures has-text-centered">
            {this.state.imgData.map(image => (
              <img
                id={image.id}
                key={image.id} 
                alt={image.title} src={image.display_sizes[0].uri} 
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
