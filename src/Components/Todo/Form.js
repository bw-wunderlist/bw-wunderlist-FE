import React from "react"
import {connect} from "react-redux";
import {add, clear} from '../actions/actions'
import Axios from "axios";
import './Todo.css'



class Form extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         input: "",
      }
   }

   inputHandler = (e) => {
      this.setState({
         input: e.target.value,
      })

      
   }

   addHandler = () => {
      this.props.add(this.state.input)
      this.setState({
         input: "",
      })
      Axios
      .post('https://wunderlist2.herokuapp.com//api/tasks')
      .then(res => {
      console.log(res)
      this.setState({
      ...this.state,
         input:''
      })
      this.state.set(res.data.authorization)
      })
   }

   clearCompleted = () => {
      this.props.clear()
   }
    render(){
      return(
         <div className="form-bg">
            <form className="newform" onSubmit={(e) => e.preventDefault()}>
            <div className="todo-bg">
                  <input 
                     value={this.state.input} 
                     placeholder="Enter Todo"
                     maxLength="50"
                     onChange={this.inputHandler}
                     onKeyDown={(event) => {
                        if (event.keyCode === 13) {
                           this.addHandler()
                        }
                     }} 
                  />
                  <div className="btn-b">
                     <button className="btn2" onClick={() => this.addHandler()}>+</button>
                     <button className="btn2" onClick={() => this.clearCompleted()}>-</button>
                  </div>
               </div>
            </form>
         </div>
      )
   }
}

export default connect(null, {add, clear})(Form) 