import React from 'react';
import { Link } from 'react-router-dom'
import './login.css'
import axios from 'axios'
import Cookies from 'js-cookies'

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }
  componentDidMount(){Cookies.set('_uit', 'token', { expires: 1 })}

  login = e => {
    e.preventDefault();
    axios
      .post(" ", this.state)
      .then(res => {
        Cookies.set('_uit', 'token', { expires: 1 });
        this.setState({
          username: "",
          password: ""
        });
        this.props.history.push("/");
      })
      .catch(error => console.log(error));
  };

  // login = e => {
  //   e.preventDefault();
  //   axios
  //     .post('', this.state)
  //     .then(res => {
  //       localStorage.setItem("token", res.data.token);
  //       this.setState({
  //         username: "",
  //         password: ""
  //       });
  //       this.props.history.push("/");
  //     })
  //     .catch(error => console.log(error));
  // };

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
      <div>
        <form onSubmit={this.login}>
          <div className="header">
            <h1>Login to  Wunderlist 2.0 </h1>
          </div>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>Log in</button>
        </form>
        <h3>Register for a account </h3>
        
        <Link className="link" to= "/Register" >Register</Link>
      </div>
    );
  }
}

export default Login;