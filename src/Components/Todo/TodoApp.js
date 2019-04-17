import React from "react";
import List from "../Todo/List";
import Form from "../Todo/Form";
import NavBar from "../Navbar/Navbar";
import { withCookies } from "react-cookie";
import axios from "axios";

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
        <Form />
        <List todos={this.state.tasks} />
      </div>
    );
  }
}

export default withCookies(TodoApp);
