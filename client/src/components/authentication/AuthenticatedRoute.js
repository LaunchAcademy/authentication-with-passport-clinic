import React from "react";
import { Redirect, Route } from "react-router";

const AuthenticationCheck = ({ component: Component, user }) => {
  // check to see if the user is logged in, otherwise send them to the login page
  if (user !== null) {
    return <Component user={user} />;
  }
  return <Redirect to="/user-sessions/new" />;
};

const AuthenticatedRoute = ({ component, user, ...rest }) => {
  // ensure that standard react router stuff is passed down
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      <AuthenticationCheck user={user} component={component} />
    </Route>
  );
};

export default AuthenticatedRoute;
