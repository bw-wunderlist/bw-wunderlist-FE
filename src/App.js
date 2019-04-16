import React from 'react';
import {Route} from 'react-router-dom';
// import connect  from 'react-redux';
import  RegisterPage   from './Components/RegisterPage/RegisterPage';
import Login from './Components/LoginPage/login'
import  TodoApp from './Components/Todo/TodoApp'
import './App.css';

const App = () => {
  
    return (
      <div className="App">
       
           <div> 
              <Route exact path='/' component={Login} />
             <Route path='/RegisterPage' component={RegisterPage} />
             <Route path='/TodoApp' component={TodoApp} />
             {/* <RegisterPage />
             <TodoApp />     */}
          </div>
         
      </div>
    );
  
}

export default App;
