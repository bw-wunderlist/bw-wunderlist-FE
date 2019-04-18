import React from "react";
//import {connect} from "react-redux";
//import {add, clear} from '../actions/actions'
import axios from "axios";
import "./Todo.css";
import { withCookies } from "react-cookie";

import DateTime from "react-datetime";

import "./datetime.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cookies: props.cookies,
      task: {
        name: "",
        desc: "",
        repeat: false,
        due_date: null
      }
    };
  }

  inputHandler = e => {
    this.setState({
      ...this.state,
      task: {
        ...this.state.task,
        [e.target.name]: e.target.value
      }
    });
  };

  addHandler = e => {
    e.preventDefault();
    axios.defaults.headers.common["Authorization"] = this.state.cookies.get(
      "_uid"
    );
    console.log(this.state.task);
    axios
      .post(`https://wunderlist2.herokuapp.com/api/tasks`, this.state.task)
      .then(res => {
        console.log(res);
        this.setState({
          ...this.state,
          task: {
            name: "",
            desc: "",
            repeat: false,
            is_complete: false,
            due_date: null
          }
        });
      });
  };

  clearCompleted = () => {
    this.props.clear();
    axios.defaults.headers.common["Authorization"] = this.state.cookies.get(
      "_uid"
    );
    axios
      .delete("https://wunderlist2.herokuapp.com/api/tasks/{id}")
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.error("no", error);
      });
  };

  datePicker = input => {
    console.log(input);
    this.setState({
      ...this.state,
      task: {
        ...this.state.task,
        due_date: input
      }
    });
  };

  render() {
    return (
      <div className="form-bg">
        <form className="newform" onSubmit={e => this.addHandler(e)}>
          <div className="todo-bg">
            <input
              value={this.state.name}
              placeholder="Enter Todo"
              maxLength="50"
              onChange={this.inputHandler}
              name="name"
            />
            <input
              value={this.state.desc}
              placeholder="Description"
              maxLength="50"
              onChange={this.inputHandler}
              name="desc"
            />
            <input
              type="checkbox"
              name="repeat"
              checked={this.state.repeat}
              onChange={this.inputHandler}
            />
            <p>Repeat Task</p>
            <DateTime
              value={this.state.due_date}
              name="due_date"
              onChange={input => this.datePicker(input)}
            />
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    );
  }
}
export default withCookies(Form);
