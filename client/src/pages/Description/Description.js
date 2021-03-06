import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";
import Container from "react-bulma-components/lib/components/container";
import Field from "react-bulma-components/lib/components/form/components/field";
import Control from "react-bulma-components/lib/components/form/components/control";
import Input from "react-bulma-components/lib/components/form/components/input";
import Label from "react-bulma-components/lib/components/form/components/label";
import Textarea from "react-bulma-components/lib/components/form/components/textarea";
import Button from "react-bulma-components/lib/components/button";
import API from "../../utils/API";
import DatePicker from "../../components/DatePicker";
import Heading from "react-bulma-components/lib/components/heading";
import moment from "moment";
import "./Description.css";
import Word from "../../components/PhoenixWord";

class Description extends Component {
  state = {
    title: "",
    timeline: moment(),
    description: ""
  };

  handleInputChange = event => {
    console.log(event);
    if (event.preventDefault) {
      event.preventDefault();
    }
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target || event;

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

    API.saveActivity(newActivityObj)
      .then(res => {
        window.location = "/Dashboard";
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Word location="description" />
        <div className="allForms">
          <Container className="form">
            <Heading className="title1 has-text-centered">Description</Heading>
            <div className="">
              <Field>
                <Label>Title</Label>
                <Control>
                  <Input
                    className="descriptionTitle"
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
                <Label style={{ marginTop: "30px" }}>Timeline</Label>
                <Control>
                  <DatePicker
                    className="timeline"
                    selected={this.state.timeline}
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
                    className="box"
                    placeholder=""
                    value={this.state.description}
                    name="description"
                    onChange={this.handleInputChange}
                  />
                </Control>
              </Field>
            </div>
            <div className="has-text-centered">
              <Button className="submit" onClick={this.addActivity}>
                Submit
              </Button>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default Description;
