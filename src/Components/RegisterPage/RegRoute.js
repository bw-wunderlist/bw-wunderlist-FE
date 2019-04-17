import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {withCookies} from 'react-cookie'

const RegRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props => {
          if (this.state.cookies.get('_uid')) {
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