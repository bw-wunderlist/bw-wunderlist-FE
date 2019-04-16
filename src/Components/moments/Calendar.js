import React, { Component } from "react";
import ReactDOM from "react-dom";
import TimePicker from "react-datetime-picker";

import "./styles.css";

class Calendar extends Component {
  state = {
    date: new Date()
  };

  onChange = date => {
    console.log(date);
    this.setState({ date });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello [cookies.name]</h1>
        <h2>Lets Get Things Done!</h2>
       
        <TimePicker onChange={this.onChange} value={this.state.date} />

        <br />
        <br />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Calendar />, rootElement);