import React from "react";
//import {connect} from "react-redux";
//import {add, clear} from '../actions/actions'
import axios from "axios";
import "./Todo.css";
import { withCookies } from "react-cookie";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cookies: props.cookies,
      task: {
        name: "",
        desc: "",
        repeat: false,
        is_complete: false,
        due_date: ""
      }
    };
  }

  // componentDidMount(){
  //    axios
  //    .post('https://wunderlist2.herokuapp.com//api/tasks', this.state.input)
  //    .then(res=> {
  //       this.setState({
  //          input: res.data
  //       })
  //    })
  //    .catch(err => console.log(err))

  // }

  // removeInput = id => {
  //    axios
  //    .delete('https://wunderlist2.herokuapp.com//api/tasks/{id}')
  //    .then (res => {
  //       this.setState({input: res.data});
  //    })
  //    .catch(error => {
  //       console.error('no', error);
  //    });
  // };

  inputHandler = e => {
    this.setState({
      ...this.state,
      task: {
        ...this.state.task,
        [e.target.name]: e.target.value
      }
    });
  };

  addHandler = e => {
    e.preventDefault();
    //this.props.add(this.state.input)
    this.setState({
      name: "",
      desc: "",
      repeat: false,
      is_complete: false,
      due_date: ""
    });
    console.log(this.state.cookies.get("_uid"));
    axios.defaults.headers.common["Authorization"] = this.state.cookies.get(
      "_uid"
    );
    axios
      .post("https://wunderlist2.herokuapp.com/api/tasks", this.state.task)
      .then(res => {
        console.log(res);
        console.log(this.state.cookies);
        this.setState({
          ...this.state,
          task: {
            name: "",
            desc: "",
            repeat: false,
            is_complete: false,
            due_date: ""
          }
        });
      });
  };

  clearCompleted = () => {
    this.props.clear();
    axios.defaults.headers.common["Authorization"] = this.state.cookies.get(
      "_uid"
    );
    axios
      .delete("https://wunderlist2.herokuapp.com/api/tasks/{id}")
      .then(res => {
        this.setState({ input: res.data });
      })
      .catch(error => {
        console.error("no", error);
      });
  };
  render() {
    return (
      <div className="form-bg">
        <form className="newform" onSubmit={e => e.preventDefault()}>
          <div className="todo-bg">
            <input
              value={this.state.name}
              placeholder="Enter Todo"
              maxLength="50"
              onChange={this.inputHandler}
              name="name"
              // onKeyDown={(event) => {
              //    if (event.keyCode === 13) {
              //       this.addHandler()
              //    }
              // }}
            />
            <input
              value={this.state.desc}
              placeholder="Description"
              maxLength="50"
              onChange={this.inputHandler}
              name="desc"
            />
            <input
              value={this.state.repeat}
              placeholder="repeat"
              maxLength="50"
              onChange={this.inputHandler}
              name="repeat"
            />
            <input
              value={this.state.is_complete}
              placeholder="completed"
              maxLength="50"
              onChange={this.inputHandler}
              name="is_complete"
            />
            <input
              value={this.state.due_date}
              placeholder="due"
              maxLength="50"
              onChange={this.inputHandler}
              name="due_date"
            />
            <div className="btn-b">
              <button className="btn2" onClick={e => this.addHandler(e)}>
                +
              </button>
              <button className="btn2" onClick={e => this.clearCompleted(e)}>
                -
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default withCookies(Form);
//export default connect(null, {add, clear})(Form)
