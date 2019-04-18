import React from "react";
import styled from "styled-components";
import axios from "axios";
import { withCookies } from "react-cookie";
import moment from "moment";

import {
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row, 
} from "reactstrap";

const Item = ({
  todo: { id, name, due_date, occurred, repeat, is_complete, desc },
  getTasks,
  cookies
}) => {
  const removeTask = id => {
    console.log(id)
    axios
      .delete(`https://wunderlist2.herokuapp.com/api/tasks/${id}`)
      .then(res => {
        getTasks();
      })
      .catch(error => {
        console.log(error);
      });
  };

  const completeTask = id => {
    console.log(id)
    axios
      .get(`https://wunderlist2.herokuapp.com/api/tasks/complete/${id}`)
      .then(res => {
        console.log(res)
        getTasks();
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  const editTask = id => {

  }

  return (
    <Col md="4">
      {is_complete ? (
        <Card inverse color="success">
          <CardBody>
            <h4>{name}</h4>
            <CardSubtitle>Due: {moment.unix(due_date).calendar()}</CardSubtitle>
            <CardText>{desc}</CardText>
            {repeat ? <CardText>Completed {occurred} times</CardText> : null}
            {/* <Button onClick={() => removeTask(id)} color="danger">Delete</Button> */}
            <Button onClick={() => removeTask(id)} color="danger">Delete</Button>
            <Button onClick={() => completeTask(id)} color="secondary">Mark as uncomplete</Button>
            <Button onClick={() => editTask(id)} color="warning">Edit</Button>
          </CardBody>
        </Card>
      ) : (
        <Card>
          <CardBody>
            <h4>{name}</h4>
            <CardSubtitle>Due: {moment.unix(due_date).calendar()}</CardSubtitle>
            <CardText>{desc}</CardText>
            {repeat ? <CardText>Completed {occurred} times</CardText> : null}
            <Button onClick={() => removeTask(id)} color="danger">Delete</Button>
            <Button onClick={() => completeTask(id)} color="success">Mark as complete</Button>
            <Button onClick={() => editTask(id)} color="warning">Edit</Button>
          </CardBody>
        </Card>
      )}
    </Col>
  );
};

export default withCookies(Item);
