import React from "react";
import styled from "styled-components";
import axios from "axios";
import { withCookies } from "react-cookie";
import moment from 'moment'

const Task = styled.ul`
  ${props => (props.complete ? `text-decoration: line-through` : null)}
`;

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cookies: props.cookies
    };
  }

  removeTask = id => {
    axios.defaults.headers.common["Authorization"] = this.state.cookies.get(
      "_uid"
    );
    axios
      .delete(`https://wunderlist2.herokuapp.com/api/tasks/${this.props.id}`)
      .then(res => {
        this.props.getTasks();
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Task
          className="newItem"
          onClick={this.props.toggle}
          complete={this.props.completed}
        >
          <h4>{this.props.name}</h4>
          <p>{moment.unix(this.props.due_date).calendar()}</p>
          <p>{this.props.desc}</p>
          {/* {props.repeat_condition} */}
          <p>{this.props.is_complete}</p>
          <button
            className="btn2"
            onClick={() => this.removeTask(this.props.id)}
          >
            -
          </button>
        </Task>
      </div>
    );
  }
}
export default withCookies(Item);
