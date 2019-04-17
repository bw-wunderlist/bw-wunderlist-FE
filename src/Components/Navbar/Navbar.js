import React from "react";
import './NavBar.css'
import {Link} from 'react-router-dom';
import {withCookies} from 'react-cookie'


class NavBar extends React.Component {
        constructor(props) {
            super(props)
            this.state ={
                cookies: props.cookies,
                
            }
            
        }


    handleChange = () => {
        this.state.cookies.remove('_uid')
        this.props.history.push('/login')
        console.log("run")
      };

    render() {
        return(
            <div className="nav">
                <h2>Wunderlist 2.0</h2>
                <Link className="logout"  onClick={this.state.handleChange} to="/">Log Out</Link>
            </div>
        )
    }
}


export default withCookies(NavBar);