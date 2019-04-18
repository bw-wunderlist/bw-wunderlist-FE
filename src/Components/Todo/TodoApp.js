import React from "react";
import List from "../Todo/List";
import Form from "../Todo/Form";
import NavBar from "../Navbar/Navbar";
import Edit from '../UserProfile/Edit'
import { withCookies } from "react-cookie";
import axios from "axios";
import UserProfile from '../UserProfile/UserProfile'
import {Route} from 'react-router-dom';

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cookies: props.cookies,
      tasks: []
    };
  }

  componentWillMount() {
    this.getTasks();
  }

  getTasks = () => {
    axios.defaults.headers.common["Authorization"] = this.state.cookies.get(
      "_uid"
    );
    axios
      .get("https://wunderlist2.herokuapp.com/api/tasks")
      .then(res => {
        this.setState({
          ...this.state,
          tasks: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <NavBar />
        <UserProfile />
        <Form />
        <List todos={this.state.tasks} getTasks={this.getTasks} />
        <Route path='/edit' render={props => <Edit {...props} />} />
      </div>
    );
  }
}

export default withCookies(TodoApp);
