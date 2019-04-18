import React from 'react';
import './form.css'
import {Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import {withCookies} from 'react-cookie'



class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            cookies: props.cookies,
            newSignup: {
                username: "",
                email: "",
                password: "",
                
        
            }
        }
        
    }



    componentDidMount() {
        let d = new Date();
      d.setTime(d.getTime() + (1440*60*1000));
        this.state.cookies.set("_uid", 'hello', {expires: d});
        console.log(this.state.cookies.get('_uid'))
      }

    



    SignupForm = e => {
        e.preventDefault()
        console.log('fired')
        axios
          .post("https://wunderlist2.herokuapp.com/api/auth/register", this.state.newSignup)
          .then(res => {
            console.log(res)

            this.state.cookies.set('_uid', res.data.token)
            this.props.history.push("/todo");
          }).catch(error => {console.log(error)})
      };
    


    onChange = e => {
        this.setState({
            newSignup: {
                ...this.state.newSignup,
                [e.target.name]: e.target.value
              }
        })
    }

    

    
    render() {
        return(
            <div className="MainPage">
           
                <form onSubmit={() => this.SignupForm()}>
                    <div className="header">
                        <h1>Welcome to Wunderlist 2.0 </h1>
                    </div>
                    <div className="form-group">

                        <div className="input">
                            <label className="control-label">UserName</label>
                            <input 
                            type="text"
                            name="username"
                            value={this.username}
                            onChange={this.onChange}
                            className="form-control"
                            />
                        </div>


                        <div className="input">
                            <label className="control-label">Email</label>
                            <input 
                            type="text"
                            name="email"
                            value={this.email}
                            onChange={this.onChange}
                            className="form-control"
                            />
                        </div>

                        <div className="input">
                            <label className="control-label">Password</label>
                            <input 
                            type="text"
                            name="password"
                            onChange={this.onChange}
                            value={this.password}
                            className="form-control"
                            />
                        </div>

                        <div className="form-btn">

                        <button className="reg-btn" type='submit' onClick={this.SignupForm} >
                        Sign Up
                        </button>

                        </div>
                    </div>
                    
                </form>
                <h3>Already have a account </h3>
        
                <Link className="link" to= "/" >Login</Link>
                </div>
            
        )
    }
}

export default withRouter(withCookies(SignupForm));

