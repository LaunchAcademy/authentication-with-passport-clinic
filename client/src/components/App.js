import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import AuthenticatedRoute from "./authentication/AuthenticatedRoute.js"

import UserProfile from "./UserProfile.js"
import AuthedUserProfile from "./AuthedUserProfile.js"

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);
  
  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        setCurrentUser(user);
      })
      .catch(() => {
        setCurrentUser(null);
      });
  }, []);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/users/new" component={RegistrationForm}/>
        <Route exact path="/user-sessions/new" component={SignInForm} />

        <AuthenticatedRoute 
          exact={true} 
          path="/profile" 
          component={AuthedUserProfile} 
          user={currentUser} 
        />

      </Switch>
    </Router>
  );
};



export default hot(App);
