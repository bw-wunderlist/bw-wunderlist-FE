import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import axios from 'axios'
import {withCookies} from 'react-cookie'
import {withRouter} from 'react-router-dom'

class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            cookies: props.cookies,
            getData: {
                username: '',
                email: '',
                imageurl: ''
            }
        }
    }



    getData = e => {
        e.preventDefault()
        console.log('fired')

        axios.defaults.headers.common["Authorization"] = this.state.cookies.get(
            "_uid"
          );

        //   axios.delete("https://wunderlist2.herokuapp.com/api/user/", this.state.getData)

        axios
          .get("https://wunderlist2.herokuapp.com/api/user/", this.state.getData)
          .then(res => {
            console.log(res)
            this.state.cookies.set('_uid', res.data.token)
            this.props.history.push("/todo");
          }).catch(error => {console.log(error)})
    };



  render() {
    const { user } = this.props;

    return (
      <div className="card profile">
        <div className="card-block">
          <img
            className="img-circle avatar"
            src={user.data.avatar} />
          <h4 className="card-title">
            Hi {user.data.nickname}!
          </h4>
          <div className="card-text">
            <p>You have permission to perform the following:</p>
            <ul className="permissions">
              <li>{this.state.getData.username}</li>
              <li>{this.state.getData.username}</li>
              <li>Delete Your Account</li>
            </ul>
          </div>
          <Link className="btn1" to="/edit">
            Edit
          </Link>
        </div>
      </div>
    );
  }

}

UserProfile.propTypes = {
  user: PropTypes.object.isRequired
};

UserProfile.defaultProps = {
  user: {
    id: 1,
    data: {
      username: 'ayla',
      avatar: 'https://cloud.githubusercontent.com/assets/2637399/19027069/a356e82a-88e1-11e6-87d8-e3e74f55c069.png'
    }
  }
};

export default withRouter(withCookies(UserProfile));