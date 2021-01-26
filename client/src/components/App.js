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

  // define state above the rest of the app, so that this state can be accessed across the app 
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
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        
        <Route exact path="/profile">
          <UserProfile user={currentUser} />
        </Route>
       
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />

        <AuthenticatedRoute exact path="/authed-profile" component={AuthedUserProfile} user={currentUser} />

      </Switch>
    </Router>
  );
};



export default hot(App);
