import React from "react";
import "./form.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { withCookies } from "react-cookie";

import { Container, Row, Col, Input, Button, Alert } from "reactstrap";

import Register from '../../assets/authentication.svg'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cookies: props.cookies,
      newSignup: {
        username: "",
        email: "",
        password: ""
},
error: { status: false, message: '' }
    };
  }

  signupHandler = e => {
    e.preventDefault();
    axios
      .post(
        "https://wunderlist2.herokuapp.com/api/auth/register",
        this.state.newSignup
      )
      .then(res => {
        this.state.cookies.set("_uid", res.data.token);
        this.props.history.push("/todo");
      })
      .catch(error => {
console.log(error)
this.setState({ ...this.state,  error: { status: true, message: 'Sorry but That name is taken.' }});
      });
  };

  onChange = e => {
    this.setState({
      newSignup: {
        ...this.state.newSignup,
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
          <Col xs={{order: 2, size: 12}} md="6">
              {this.state.error.status ? <Alert color='danger'> {this.state.error.message} </Alert> : null}
            <form onSubmit={this.signupHandler}>
              <div onClick={this.logout}>
                <h2>Login to</h2>
                <h1>Wunderlist 2.0</h1>
              </div>
              <Input
                type="text"
                name="username"
                placeholder="Username"
                value={this.username}
                onChange={this.onChange}
              />
              <br />
              <Input
                type="text"
                name="email"
                placeholder="Email"
                value={this.email}
                onChange={this.onChange}
              />
              <br />
              <Input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.onChange}
                value={this.password}
              />
              <br />
              <Button color="primary">Register</Button>
            </form>
            <div>
              <h3>Login to account </h3>
              <Link to="/">Login</Link>
            </div>
          </Col>
          <Col xs={{order: 1, size: 12}} md="6">
            <img src={Register} style={{ width: "100%" }} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default withCookies(SignupForm);
