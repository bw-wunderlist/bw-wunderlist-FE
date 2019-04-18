import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { withCookies } from "react-cookie";

import { Container, Row, Col, Input, Button, Alert, Spinner } from "reactstrap";

import Image from "../../assets/login.svg";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cookies: props.cookies,
      isLoading: false,
      credentials: {
        username: "",
        password: ""
      }
    };
  }

  login = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      isLoading: true,
    })
    axios
      .post(
        "https://wunderlist2.herokuapp.com/api/auth/login",
        this.state.credentials
      )
      .then(res => {
        this.setState({
          ...this.state,
          credentials: {
            username: "",
            password: ""
          }
        });
        this.state.cookies.set("_uid", res.data.token);
        this.props.history.push("/todo");
      })
      .catch(error => console.log(error));
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
            <Alert color="danger">This is a danger alert — check it out!</Alert>
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
              {this.state.isLoading ? (
                <Spinner color="primary" />
              ) : (
                <Button color="primary">Login</Button>
              )}
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
