import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class UserProfile extends React.Component {
  constructor(props) {
    super();
    this.state = {
      userdata: {
        username: "",
        email: "",
        imageurl: ""
      }
    };
  }

  render() {
    const { user } = this.props;

    return (
      <div className="card profile">
        <div className="card-block">
          <img className="img-circle avatar" src={user.data.avatar} />
          <h4 className="card-title">Hi {user.data.nickname}!</h4>
          <div className="card-text">
            <p>You have permission to perform the following:</p>
            <ul className="permissions">
              <li>Edit UserName</li>
              <li>Edit Email</li>
              <li>Edit Password</li>
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
      username: "ayla",
      avatar:
        "https://cloud.githubusercontent.com/assets/2637399/19027069/a356e82a-88e1-11e6-87d8-e3e74f55c069.png"
    }
  }
};
export default UserProfile;
