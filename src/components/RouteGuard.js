import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const RouteGuard = ({
  component: Component,
  redPath,
  isAuthenticated,
  isAdmin,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => (
      <>
        {(isAuthenticated && isAdmin) ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: redPath,
              
              state: {from: props.location}
            }}
          />
        )}
      </>
    )}
  />
);

export default RouteGuard;