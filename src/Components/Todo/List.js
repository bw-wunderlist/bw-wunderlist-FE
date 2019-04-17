import React from "react";
import { connect } from "react-redux";
import { toggle } from "../actions/actions";
import Item from "../Todo/Item";
import "./Todo.css";

const List = props => {
  console.log(props);
  return (
    <div className="listItem">
      {props.todos.map(todo => (
        <Item
          key={todo.id}
          name={todo.name}
          id={todo.id}
          desc={todo.desc}
          repeat={todo.repeat}
          is_complete={todo.is_complete}
          due_date={todo.due_date}
          repeat_condition={todo.repeat_condition}
          getTasks={props.getTasks}
        />
      ))}
    </div>
  );
};

export default List;
