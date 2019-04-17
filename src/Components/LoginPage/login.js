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
      },
      token:''
      
    }
  }
  componentDidMount() {
    let d = new Date();
  d.setTime(d.getTime() + (1440*60*1000));
    this.state.cookies.set("_uid", "test", {expires: d});
    console.log(this.state.cookies.get('_uid'))
  }

  // componentWillUnmount() {
  //   this.state.cookies.remove("_uid", "bye!");
  //   console.log(this.state.cookies.remove('_uid'))
  // }

login = e => {
    e.preventDefault();
    axios
      .post("https://wunderlist2.herokuapp.com/api/auth/login", this.state.credentials)
      .then(res => {
        console.log(res)
        this.setState({
          ...this.state,
          credentials: {
            username: '',
            password: ''
          }
        });
        this.state.cookies.set('_uid', res.data.token)
        this.setState({token: res.data.token})
        console.log(this.state.token)
        this.props.history.push("/todo");
      })
      .catch(error => console.log(error));
  };
  logout = e => {
    this.state.cookies.remove('_uid')
    this.props.history.push('/login')
    console.log("run")
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
          <div className="header" onClick={this.logout}>
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