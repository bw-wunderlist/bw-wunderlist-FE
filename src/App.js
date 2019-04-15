import React, { Component } from 'react';
import { Router as Route} from 'react-router-dom';
// import connect  from 'react-redux';
import  RegisterPage   from './Components/RegisterPage/RegisterPage';
import  TodoApp from './Components/Todo/TodoApp'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       
           <div>
             
             <Route exact path='/register' Component={RegisterPage} />
             <Route path='/TodoApp' Component={TodoApp} />


           
           
           
             
          </div>
         
      </div>
    );
  }
}

export default App;
