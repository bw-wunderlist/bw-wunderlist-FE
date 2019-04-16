import React from "react";
import './NavBar.css'
import {Link} from 'react-router-dom';


class NavBar extends React.Component {
    render() {
        return(
            <div className="nav">
                <h2>Wunderlist 2.0</h2>
                <Link className="logout" to="/">Log Out</Link>
            </div>
        )
    }
}


export default NavBar;