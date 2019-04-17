import React from 'react';
import './UserStyle.css'
import { withCookies } from 'react-cookie';
import {withRouter } from 'react-router-dom'




class UserProfile extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            cookies: props.cookies,
            newUser: {
                username: '',
                email: '',
                imageurl:''
            }
        }
    }


        render(){
            return(
                <div className="userCard">
                    <i class="fas fa-users-cog"></i>
                    
                    <h2>{this.props.username}</h2>


                </div>
            )
        }


}; 



export default withRouter(withCookies(UserProfile))