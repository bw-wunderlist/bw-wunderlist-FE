import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { withCookies } from "react-cookie";

import { Container, Row, Col, Input, Button, Alert } from "reactstrap";

import Image from "../../assets/login.svg";

class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      cookies: props.cookies,
      credentials: {
        username: "",
        password: ""
      }
    };
  }

  login = e => {
    e.preventDefault();
    axios
      .post(
        "https://wunderlist2.herokuapp.com/api/auth/login",
        this.state.credentials
      )
      .then(res => {
        console.log(res);
        this.setState({
          ...this.state,
          credentials: {
            username: "",
            password: ""
          },
          error: { status: false, message: "" }
        });
        this.state.cookies.set("_uid", res.data.token);
        this.props.history.push("/todo");
      })
      .catch(error => {
        this.setState({
          status: true,
          message: "Sorry that information is incorrect... try again ; )"
        });
      });
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <Container>
        <Row
          style={{ height: "100vh", alignItems: "center" }}
          className="text-center"
        >
          <Col xs={{ order: 2, size: 12 }} md={{ order: 1, size: 6 }}>
            {this.state.error.status ? (
              <Alert color="danger">{this.state.error.message}</Alert>
            ) : null}
            <form onSubmit={this.login}>
              <div onClick={this.logout}>
                <h2>Login to</h2>
                <h1>Wunderlist 2.0</h1>
              </div>
              <Input
                type="text"
                name="username"
                placeholder="Username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
              />
              <br />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
              />
              <br />
              <Button color="primary">Log in</Button>
            </form>
            <div>
              <h3>Register for a account </h3>
              <Link to="/Register">Register</Link>
            </div>
          </Col>
          <Col xs={{ order: 1, size: 12 }} md={{ order: 2, size: 6 }}>
            <img src={Image} style={{ width: "100%" }} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withCookies(Login);
