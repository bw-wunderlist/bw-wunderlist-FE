import React from "react";
import './NavBar.css'
import { Link, withRouter } from "react-router-dom";
import {withCookies} from 'react-cookie'


class NavBar extends React.Component {
        constructor(props) {
            super(props)
            this.state ={
                cookies: props.cookies,
                
            }
            
        }


        componentDidMount() {
            let d = new Date();
          d.setTime(d.getTime() + (1440*60*1000));
            this.state.cookies.set("_uid", "Logged Out", {expires: d});
            console.log(this.state.cookies.get('_uid'))
          }
        
          componentWillUnmount() {
            this.state.cookies.remove("_uid", "bye!");
            console.log(this.state.cookies.remove('_uid'))
          }


    handleChange =  e => {
        e.preventDefault()

        // await Auth.signOut();

        this.userHasAuthenticated(false);
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


export default withRouter(withCookies(NavBar));