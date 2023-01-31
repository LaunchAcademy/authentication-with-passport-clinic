import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import AuthenticatedRoute from "./authentication/AuthenticatedRoute.js";

import RandomPage from "./RandomPage.js";
import AuthedUserProfile from "./AuthedUserProfile.js";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(undefined);

  // define state above the rest of the app, so that this state can be accessed across the app
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser();
      setCurrentUser(user);
    } catch (err) {
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />

        {/* passing user down without requiring a login */}
        <Route exact path="/random-page">
          <RandomPage user={currentUser} />
        </Route>


        {/* passing a user down AND requiring login to see the page */}
        <AuthenticatedRoute
          exact={true}
          path="/authed-profile"
          component={AuthedUserProfile}
          user={currentUser}
        />

 
      </Switch>
    </Router>
  );
};

export default hot(App);


// const RestaurantShow = (props) => {
//   // restaurant state

//   let reviewForm = "Login if you want to write a review"
//   if (props.user){
//     reviewForm = <ReviewForm />
//   }


//   return (
//     <div>
//       {restaurant.name}

//       {reviewForm}
//     </div>
//   )
// }