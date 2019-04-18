import React from "react";
import List from "../Todo/List";
import NavBar from "../Navbar/Navbar";
import { withCookies } from "react-cookie";
import axios from "axios";
import { Container } from "reactstrap";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.cookies.cookies);
    this.state = {
      cookies: props.cookies,
      tasks: []
    };
    axios.defaults.headers.common["Authorization"] = this.state.cookies.get(
      "_uid"
    );
  }

  componentWillMount() {
    this.getTasks();
  }

  getTasks = () => {
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
      <>
        <NavBar getTasks={this.getTasks} />
        <Container>
          {/* <UserProfile /> */}
          {/* <Form /> */}
          <List todos={this.state.tasks} getTasks={this.getTasks} />
          {/* <Route path='/edit' render={props => <Edit {...props} />} /> */}
        </Container>
      </>
    );
  }
}

export default withCookies(TodoApp);
