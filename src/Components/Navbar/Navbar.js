import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { withCookies } from "react-cookie";

import {Navbar, Button} from 'reactstrap'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cookies: props.cookies
    };
  }

  handleChange = () => {
    this.state.cookies.remove("_uid");
    this.props.history.push("/login");
    console.log("run");
  };

  render() {
    return (
      <Navbar color="light" light >
        <h2>Wunderlist 2.0</h2>
        <Link onClick={this.state.handleChange} to="/">
          Log Out
        </Link>
        <Button>Test</Button>
      </Navbar>
    );
  }
}

export default withCookies(NavBar);
