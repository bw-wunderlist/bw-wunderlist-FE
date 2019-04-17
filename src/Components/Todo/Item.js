import React from "react";
import styled from "styled-components";

const Task = styled.ul`
  ${props => (props.complete ? `text-decoration: line-through` : null)}
`;
const Item = props => {
  return (
    <div>
      <Task
        className="newItem"
        onClick={props.toggle}
        complete={props.completed}
      >
        <h4>{props.name}</h4>
        <p>{props.due_date}</p>
        <p>{props.desc}</p>
        {/* {props.repeat_condition} */}
        <p>{props.is_complete}</p>
      </Task>
    </div>
  );
};
export default Item;
