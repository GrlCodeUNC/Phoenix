import React from "react";
import "bulma/css/bulma.css";
import Container from "react-bulma-components/lib/components/container";
import Field from "react-bulma-components/lib/components/form/components/field";
import Control from "react-bulma-components/lib/components/form/components/control";
import Input from "react-bulma-components/lib/components/form/components/input";
import Label from "react-bulma-components/lib/components/form/components/label";
import Textarea from "react-bulma-components/lib/components/form/components/textarea";
import "./Form.css";

const Form = () => (
  <Container default className="Form">
    <div className="descriptionTitle">
      <Field>
        <Label>Title</Label>
        <Control>
          <Input placeholder="" />
        </Control>
      </Field>
    </div>
    <div className="descriptionTimeline">
      <Field>
        <Label>Timeline</Label>
        <Control>
          <Input placeholder="" />
        </Control>
      </Field>
    </div>
    <div className="descriptionBox">
      <Field>
        <Label>Description</Label>
        <Control>
          <Textarea placeholder="" />
        </Control>
      </Field>
    </div>
  </Container>
);

export default Form;
