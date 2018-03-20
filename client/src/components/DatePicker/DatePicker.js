import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Example extends React.Component {
  render() {
    console.log("rendering");
    return (
      <DatePicker
        selected={this.props.selected}
        onChange={date =>
          this.props.onChange({ value: date, name: this.props.name })
        }
      />
    );
  }
}

export default Example;
