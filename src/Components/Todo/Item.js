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
  todo: { id, name, due_date, occurred, is_complete, desc },
  getTasks,
  cookies
}) => {
  axios.defaults.headers.common["Authorization"] = cookies.get(
    "_uid"
  );
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

  return (
    <Col md="4">
      {is_complete ? (
        <Card body inverse color="success">
          <CardBody>
            <h4>{name}</h4>
            <CardSubtitle>Due: {moment.unix(due_date).calendar()}</CardSubtitle>
            <CardText>{desc}</CardText>
            <CardText>Completed {occurred} times</CardText>
            {/* <Button onClick={() => removeTask(id)} color="danger">Delete</Button> */}
            <Button onClick={() => removeTask(id)} color="danger">Delete</Button>
            <Button onClick={() => completeTask(id)} color="secondary">Complete</Button>
          </CardBody>
        </Card>
      ) : (
        <Card>
          <CardBody>
            <h4>{name}</h4>
            <CardSubtitle>Due: {moment.unix(due_date).calendar()}</CardSubtitle>
            <CardText>{desc}</CardText>
            <CardText>Completed {occurred} times</CardText>
            <Row>
            <Button onClick={() => removeTask(id)} color="danger">Delete</Button>
            <Button onClick={() => completeTask(id)} color="success">Complete</Button>
            </Row>
          </CardBody>
        </Card>
      )}
    </Col>
  );
};

export default withCookies(Item);
