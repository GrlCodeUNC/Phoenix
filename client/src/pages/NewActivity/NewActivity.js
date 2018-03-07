import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";
import Container from "react-bulma-components/lib/components/container";
import Section from "react-bulma-components/lib/components/section";
import Heading from "react-bulma-components/lib/components/heading";
import Field from "react-bulma-components/lib/components/form/components/field";
import Control from "react-bulma-components/lib/components/form/components/control";
import Input from "react-bulma-components/lib/components/form/components/input";
import "./NewActivity.css";

class NewActivity extends Component {
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
            </Field>
          </div>
          <div className="pictures has-text-centered">
          This is where the pictures will go
          </div>
        </Container>
      </Section>
    );
  }
}

export default NewActivity;

// USE CONTAINER IMPORT IN BULMA
