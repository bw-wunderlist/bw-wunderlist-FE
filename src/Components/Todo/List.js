import React from "react";
import Item from "../Todo/Item";

import { Row } from 'reactstrap'

const List = props => {
  return (
    <Row className="listItem">
      {props.todos.map(todo => (
        <Item
          key={todo.id}
          todo={todo}
          getTasks={props.getTasks}
        />
      ))}
    </Row>
  );
};

export default List;
