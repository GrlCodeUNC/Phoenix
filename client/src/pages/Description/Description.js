import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";
// import Form from '../../components/Form';

import Container from "react-bulma-components/lib/components/container";
import Field from "react-bulma-components/lib/components/form/components/field";
import Control from "react-bulma-components/lib/components/form/components/control";
import Input from "react-bulma-components/lib/components/form/components/input";
import Label from "react-bulma-components/lib/components/form/components/label";
import Textarea from "react-bulma-components/lib/components/form/components/textarea";

import Button from "react-bulma-components/lib/components/button";
import API from '../../utils/API';

class Description extends Component {

  state = {
    title: "",
    timeline: "",
    description: ""
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

  addActivity = () => {

    const userEmail = localStorage.getItem("email");
    const photoLink = localStorage.getItem("activityImageLink");

    const newActivityObj = {
      title: this.state.title,
      photo: photoLink,
      plans: this.state.description,
      user: userEmail,
      completeDate: this.state.timeline,
      createDate: Date.now
    };
    
    console.log(newActivityObj);

    API.saveActivity(newActivityObj)
      .then(res => {
        console.log('res ', res)
        window.location = "/Dashboard";
      })
      .catch(err => console.log(err));

  }

  render() {
    return (
        <div>
            {/* <Form/> */}
            <Container default className="Form">
              <div className="descriptionTitle">
                <Field>
                  <Label>Title</Label>
                  <Control>
                    <Input 
                      placeholder="" 
                      value={this.state.title}
                      name="title"
                      onChange={this.handleInputChange}
                    />
                  </Control>
                </Field>
              </div>
              <div className="descriptionTimeline">
                <Field>
                  <Label>Timeline</Label>
                  <Control>
                    <Input 
                      placeholder="" 
                      value={this.state.timeline}
                      name="timeline"
                      onChange={this.handleInputChange}
                    />
                  </Control>
                </Field>
              </div>
              <div className="descriptionBox">
                <Field>
                  <Label>Description</Label>
                  <Control>
                    <Textarea 
                      placeholder="" 
                      value={this.state.description}
                      name="description"
                      onChange={this.handleInputChange}
                    />
                  </Control>
                </Field>
              </div>
            </Container>
            <div>
            <div className="has-text-centered">
            <Button color="light" className="submit" onClick={this.addActivity}>
            Submit
            </Button>
            </div>
        </div>
        </div>
    );
  }
}
export default Description;