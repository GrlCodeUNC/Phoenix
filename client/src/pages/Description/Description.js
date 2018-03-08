import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bulma/css/bulma.css";
import Form from '../../components/Form';
import Button from "react-bulma-components/lib/components/button";

class Description extends Component {
  render() {
    return (
        <div>
            <Form/>
            <div>
            <div className="has-text-centered">
            <Button color="light" className="submit">
            Submit
            </Button>
            </div>
        </div>
        </div>
    );
  }
}
export default Description;