import React from 'react';
import { Link } from 'react-router-dom'
import './login.css'
import axios from 'axios'
import {withCookies} from 'react-cookie'

class Login extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
    this.state = {

    cookies: props.cookies,
      credentials: {
        username: '',
        password: ''
      }
      
    }
  }
  componentDidMount() {
    this.state.cookies.set("_uid", "test");
    console.log(this.state.cookies.get('_uid'))
  }

  componentWillUnmount(){
    this.state.cookies.remove("_uid", "bye!", { path: '/' })
    console.log((this.state.cookies.remove('_uid')))
  }
login = e => {
    e.preventDefault();
    axios
      .post(" ", this.state)
      .then(res => {
        this.setState({
          username: "",
          password: ""
        });
        this.props.history.push("/");
      })
      .catch(error => console.log(error));
  };
  logout = e => {
    axios
      .delete(``)
      .then(res => {
        this.setState({cookies: res.data});
      })
      .catch(error => {
        console.error('Byeeee!', error);
      });
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

export default withCookies(Login);