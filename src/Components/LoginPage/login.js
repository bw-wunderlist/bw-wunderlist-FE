import React from 'react';
import { Link } from 'react-router-dom'
import './login.css'


class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
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