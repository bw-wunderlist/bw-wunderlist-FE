import React, { useState } from "react";
import axios from "axios";
import { withCookies } from "react-cookie";
import moment from "moment";

import {
  Col,
  Card,
  CardText,
  CardBody,
  CardSubtitle,
  Button
} from "reactstrap";

import UpdateTask from "./Update";

const Item = ({
  todo: {
    id,
    name,
    due_date,
    occurred,
    repeat,
    is_complete,
    desc,
    repeat_condition
  },
  getTasks,
  cookies
}) => {
  const [modalState, setModalState] = useState(false);
  const removeTask = id => {
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
    axios
      .get(`https://wunderlist2.herokuapp.com/api/tasks/complete/${id}`)
      .then(res => {
        getTasks();
      })
      .catch(error => {
        console.log(error);
      });
  };

  const editTask = id => {
    setModalState(!modalState);
  };

  return (
    <>
      {modalState ? (
        <UpdateTask
          modal={modalState}
          toggle={() => setModalState(!modalState)}
          getTasks={getTasks}
          todo={{
            id,
            name,
            due_date,
            occurred,
            repeat,
            is_complete,
            desc,
            repeat_condition
          }}
        />
      ) : null}
      <Col md="12">
        {is_complete ? (
          <Card inverse color="success">
            <CardBody>
              <h4>{name}</h4>
              {due_date > 5000 ? (
                <CardSubtitle>
                  Due: {moment.unix(due_date).calendar()}
                </CardSubtitle>
              ) : null}
              <CardText>{desc}</CardText>
              {repeat ? <CardText>Completed {occurred} times</CardText> : null}
              {/* <Button onClick={() => removeTask(id)} color="danger">Delete</Button> */}
              <Button onClick={() => removeTask(id)} color="danger">
                Delete
              </Button>
              <Button onClick={() => completeTask(id)} color="secondary">
                Mark as uncomplete
              </Button>
              <Button onClick={() => editTask(id)} color="warning">
                Edit
              </Button>
            </CardBody>
          </Card>
        ) : (
          <Card>
            <CardBody>
              <h4>{name}</h4>
              {due_date > 5000 ? (
                <CardSubtitle>
                  Due: {moment.unix(due_date).calendar()}
                </CardSubtitle>
              ) : null}
              <CardText>{desc}</CardText>
              {repeat ? <CardText>Completed {occurred} times</CardText> : null}
              <Button onClick={() => removeTask(id)} color="danger">
                Delete
              </Button>
              <Button onClick={() => completeTask(id)} color="success">
                Mark as complete
              </Button>
              <Button onClick={() => editTask(id)} color="warning">
                Edit
              </Button>
            </CardBody>
          </Card>
        )}
      </Col>
    </>
  );
};

export default withCookies(Item);
