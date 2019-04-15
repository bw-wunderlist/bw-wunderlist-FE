import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
import RegisterPage  from './Components/RegisterPage/RegisterPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       
           <div>
            
           
            <RegisterPage/>
          </div>
         
      </div>
    );
  }
}

export default App;
