import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { withCookies } from "react-cookie";

import { Navbar, Button } from "reactstrap";

import NewTask from "./NewTask";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cookies: props.cookies,
      modal: false
    };
  }

  toggleModal = () => {
    this.setState({
      ...this.state,
      modal: !this.state.modal
    });
  };

  newTask = () => {
    this.toggleModal();
  };

  logoutHandler = () => {
    this.state.cookies.remove("_uid");
    this.props.history.push("/login");
  };

  render() {
    return (
      <Navbar color="light" light>
        <NewTask
          modal={this.state.modal}
          toggle={this.toggleModal}
          newTask={this.newTask}
        />
        <h2>Wunderlist 2.0</h2>
        <Link onClick={this.state.logoutHandler} to="/">
          Log Out
        </Link>
        <Button onClick={this.toggleModal}>New Task</Button>
      </Navbar>
    );
  }
}

export default withCookies(NavBar);
