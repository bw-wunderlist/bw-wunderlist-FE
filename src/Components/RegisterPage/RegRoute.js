import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const RegRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props => {
          if (localStorage.getItem('token')) {
            return <Component {...props} />;
          } else {
            // redirect to login
            return <Redirect to="/RegisterPage" />;
          }
        }}
      />
    );
  };
  
  export default RegRoute;