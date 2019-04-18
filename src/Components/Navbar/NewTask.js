import React, { Component } from "react";

import DateTime from "react-datetime";

import "../../assets/datetime.css";

import axios from "axios";

import moment from "moment";

import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  FormGroup,
  Row,
  Col
} from "reactstrap";

class NewTask extends Component {
  state = {
    modal: this.props.modal,
    task: {
      name: "",
      desc: "",
      repeat: false,
      due_date: moment()
        .add(1, "day")
        .unix()
    },
    repeat_condition: {
      number: 1,
      timeframe: "Day",
      occurrences: 0
    },
    dueDateStatus: false,
    printRepeat: "Day"
  };

  inputHandler = e => {
    this.setState({
      ...this.state,
      task: {
        ...this.state.task,
        [e.target.name]: e.target.value
      }
    });
  };

  repeatConditionHandler = e => {
    this.setState({
      ...this.state,
      repeat_condition: {
        ...this.state.repeat_condition,
        [e.target.name]: e.target.value
      }
    });
  };

  createTask = e => {
    e.preventDefault();
    axios
      .post(`https://wunderlist2.herokuapp.com/api/tasks`, {
        ...this.state.task,
        due_date: this.state.dueDateStatus ? this.state.task.due_date : 0,
        repeat_condition: this.state.repeat_condition
      })
      .then(res => {
        this.setState({
          ...this.state,
          task: {
            name: "",
            desc: "",
            repeat: false,
            is_complete: false,
            due_date: null
          }
        });
        this.props.newTask();
      });
  };

  datePicker = input => {
    this.setState({
      ...this.state,
      task: {
        ...this.state.task,
        due_date: input
      }
    });
  };

  render() {
    return (
      <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
        <ModalHeader toggle={this.props.toggle}>Create A Task</ModalHeader>
        <ModalBody>
          <form onSubmit={e => this.addHandler(e)}>
            <FormGroup>
              <Input
                value={this.state.task.name}
                placeholder="Enter Todo"
                maxLength="50"
                onChange={this.inputHandler}
                name="name"
              />
            </FormGroup>
            <FormGroup>
              <Input
                value={this.state.task.desc}
                placeholder="Description"
                maxLength="50"
                onChange={this.inputHandler}
                name="desc"
              />
            </FormGroup>
            <Row>
              <Col>
                <Button
                  color={this.state.dueDateStatus ? "primary" : "secondary"}
                  onClick={() =>
                    this.setState({
                      ...this.state,
                      dueDateStatus: !this.state.dueDateStatus
                    })
                  }
                >
                  {this.state.dueDateStatus
                    ? "Remove Due Date"
                    : "Add Due Date"}
                </Button>
              </Col>
              {this.state.dueDateStatus ? (
                <Col>
                  <DateTime
                    value={moment.unix(this.state.task.due_date)}
                    name="due_date"
                    onChange={input => this.datePicker(input.unix())}
                  />
                </Col>
              ) : null}
            </Row>
            <br />
            <Button
              color={this.state.task.repeat ? "primary" : "secondary"}
              onClick={() =>
                this.setState({
                  ...this.state,
                  task: { ...this.state.task, repeat: !this.state.task.repeat }
                })
              }
            >
              Repeat Task
            </Button>
            <br />
            <br />
            {this.state.task.repeat ? (
              <>
                <Row>
                  <Col>
                    <FormGroup>
                      <label>Repeat For</label>
                      <Input
                        type="number"
                        value={this.state.repeat_condition.number}
                        onChange={this.repeatConditionHandler}
                        name="number"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <label>Repeat Every</label>
                      <Input
                        type="select"
                        name="timeframe"
                        onChange={e =>
                          this.setState({
                            ...this.state,
                            repeat_condition: {
                              ...this.state.repeat_condition,
                              timeframe: e.target.innerHTML
                            }
                          })
                        }
                      >
                        <option value="days">
                          {this.state.repeat_condition.number > 1
                            ? "Days"
                            : "Day"}
                        </option>
                        <option value="weeks">
                          {this.state.repeat_condition.number > 1
                            ? "Weeks"
                            : "Week"}
                        </option>
                        <option value="months">
                          {this.state.repeat_condition.number > 1
                            ? "Months"
                            : "Month"}
                        </option>
                        <option value="years">
                          {this.state.repeat_condition.number > 1
                            ? "Years"
                            : "Year"}
                        </option>
                        <option value="hours">
                          {this.state.repeat_condition.number > 1
                            ? "Hours"
                            : "Hour"}
                        </option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col>
                    <label>
                      for{" "}
                      {this.state.repeat_condition.occurrences > 0
                        ? `${this.state.repeat_condition.occurrences} times`
                        : "unlimited"}
                    </label>
                    <FormGroup>
                      <Input
                        type="number"
                        value={this.state.repeat_condition.occurrences}
                        onChange={this.repeatConditionHandler}
                        name="occurrences"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </>
            ) : (
              <h4>Not Repeated</h4>
            )}
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.createTask}>
            Submit
          </Button>{" "}
          <Button color="secondary" onClick={this.props.toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default NewTask;
