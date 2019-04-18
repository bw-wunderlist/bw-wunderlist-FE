import React from "react";
import { Route } from "react-router-dom";
// import connect  from 'react-redux';

import  RegisterPage   from './Components/RegisterPage/RegisterPage';
import Login from './Components/LoginPage/login'
import  TodoApp from './Components/Todo/TodoApp'
import Edit from '../src/Components/UserProfile/Edit'

import './App.css';


const App = () => {
  
    return (
      <div className="App">
       
           <div> 
              <Route exact path='/' render={props => <Login {...props} /> }/>
             <Route path='/register' render={props => <RegisterPage {...props} /> }/>
             <Route path='/todo' render={props => <TodoApp {...props} /> } />
             <Route path='/edit' render={props => <Edit {...props} />} />
          </div>
         

      </div>
    </div>
  );
};

export default App;
