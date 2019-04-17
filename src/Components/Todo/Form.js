import React from "react"
//import {connect} from "react-redux";
//import {add, clear} from '../actions/actions'
import axios from "axios";
import './Todo.css'
import { withCookies } from "react-cookie";
//import {withCookies} from 'react-cookie'



class Form extends React.Component {
   constructor(props){
      super(props)
      this.state = {
         cookies: props.cookies,
         _uid:'',
         input:'',
         token: ''
      }
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

   inputHandler = (e) => {
      this.setState({
         input: e.target.value,
      })

      
   }

   addHandler = (e) => {
      e.preventDefault()
      //this.props.add(this.state.input)
      this.setState({
         input: "",
      })
      axios
      .post('https://wunderlist2.herokuapp.com//api/tasks', this.state.input, {headers: this.state._uid})
      .then(res => {
      console.log(res)
      console.log(this.state.cookies)
      this.setState({
      ...this.state,
         input:''
      })
      this.state.cookies.set('token', res.data.token)    
     })
   }

   clearCompleted = () => {
      this.props.clear()
      axios
      .delete('https://wunderlist2.herokuapp.com//api/tasks/{id}')
      .then (res => {
         this.setState({input: res.data});
      })
      .catch(error => {
         console.error('no', error);
      });
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
                     <button className="btn2" onClick={(e) => this.addHandler(e)}>+</button>
                     <button className="btn2" onClick={(e) => this.clearCompleted(e)}>-</button>
                  </div>
               </div>
            </form>
         </div>
      )
   }
}
export default withCookies(Form)
//export default connect(null, {add, clear})(Form) 
