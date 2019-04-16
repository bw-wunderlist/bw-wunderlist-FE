import React from "react"
import {connect} from "react-redux";
import {toggle} from '../actions/actions'
import Item from '../Todo/Item';
import './Todo.css'


const List = (props) => {
   
   return(
      <div className="listItem">
         {props.todos.map(todo =>
            <Item 
               
               key={todo.id}
               todo={todo}
               id={todo.id}
               task={todo.task}
               completed={todo.completed}
               toggle={() => props.toggle(todo.id)}
            />
            )}
      </div>
   )
}
const mapStateToProps = (state) => {
   return {todos: state.todos}
}
 export default connect(mapStateToProps, {toggle})(List)




  

