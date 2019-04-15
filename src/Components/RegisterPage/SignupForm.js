import React from 'react';
import './form.css'


class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.sate ={
            fullname: "",
            email: "",
            password: "",
            passwordConfirmation: ""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(this.state);

    }
    render() {
        return(
           
                <form onSubmit={this.onSubmit}>

                    <h1>Sign Up</h1>
                    <div className="form-group">

                        <div className="input">
                            <label className="control-label">Fullname</label>
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
            
        )
    }
}

export default SignupForm;