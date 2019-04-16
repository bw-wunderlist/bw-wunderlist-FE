import React from 'react';
import './form.css'
import { Link } from 'react-router-dom'



class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            newSignup: {
                fullname: "",
                email: "",
                password: "",
                passwordConfirmation: "",
                errors: {},
                isLoading: false
            }
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            newSignup: {
                ...this.state.newSignup,
                [e.target.name]: e.target.value
              }
        })
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);

    }

    
    render() {
        return(
            <div className="MainPage">
           
                <form onSubmit={this.onSubmit}>
                    <div className="header">
                        <h1>Welcome to Wunderlist 2.0 </h1>
                    </div>
                    <div className="form-group">

                        <div className="input">
                            <label className="control-label">Full Name</label>
                            <input 
                            type="text"
                            name="fullname"
                            value={this.fullname}
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

                        <div className="input">
                            <label className="control-label">Password Confirmation</label>
                            <input 
                            type="password"
                            name="passwordConfirmation"
                            onChange={this.onChange}
                            value={this.passwordConfirmation}
                            className="form-control"
                            />
                        </div>

                        <div className="form-btn">

                        <button className="reg-btn">
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

export default SignupForm;