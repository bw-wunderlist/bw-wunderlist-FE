import React from 'react'
import Navbar from '../Navbar/Navbar'
import PropTypes from 'prop-types'
import axios from 'axios'
import {withCookies} from 'react-cookie'
import {withRouter} from 'react-router-dom'


class Edit extends React.Component{
    constructor(props) {
        super(props)
        this.state= {
            userdata: {
                username: '',
                imageurl: ''
            }
        }
    }



    newData = e => {
        e.preventDefault()
        console.log('fired')

        axios.defaults.headers.common["Authorization"] = this.state.cookies.get(
            "_uid"
          );

        axios
          .put("https://wunderlist2.herokuapp.com/api/user/", this.state.userData)
          .then(res => {
            console.log(res)
            this.state.cookies.set('_uid', res.data.token)
            this.props.history.push("/todo");
          }).catch(error => {console.log(error)})
    };



onChange = e => {
    e.preventDefault()
    this.setState({
      userdata: {
        ...this.state.userdata,
        [e.target.name]: e.target.value
      }
    });
  };


    render(){
        const { user } = this.props;
        return(
            <div>
                <Navbar />

                    <img
                className="img-circle avatar"
                src={user.data.avatar} />
                <h2>Edit Profile</h2>

                <form onSubmit={() => this.newdata()}>

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
                            <label className="control-label">ImageURL</label>
                            <input 
                            type="text"
                            name="imageurl"
                            value={this.imageurl}
                            onChange={this.onChange}
                            className="form-control"
                            />
                    </div>

                    <button type='submit'>Save</button>

                </form>
            </div>
        )
    }
}

Edit.propTypes = {
    user: PropTypes.object.isRequired
  };
  
Edit.defaultProps = {
    user: {
      id: 1,
      data: {
        username: 'ayla',
        avatar: 'https://cloud.githubusercontent.com/assets/2637399/19027069/a356e82a-88e1-11e6-87d8-e3e74f55c069.png'
      }
    }
  };



export default withRouter(withCookies(Edit))