import React from "react";
import { Route, Switch } from "react-router-dom";
import Edit from "../src/Components/UserProfile/edit.js";
// import connect  from 'react-redux';

import SignUp from "./Components/RegisterPage/SignupForm";
import Login from "./Components/LoginPage/login";
import TodoApp from "./Components/Todo/TodoApp";

const App = () => {
  return (
    <div>
      <div>
        <Switch>
          <Route
            exact
            path="/register"
            render={props => <SignUp {...props} />}
          />
          <Route exact path="/todo" render={props => <TodoApp {...props} />} />
          <Route exact path="/edit" render={props => <Edit {...props} />} />
          <Route path="/" render={props => <Login {...props} />} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
