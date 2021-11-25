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
      {console.log(isAdmin)}
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