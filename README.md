# User Authentication with Passport Clinic

## Everyone needs to update their devDependencies after clinic

```
{
  ...rest of file
  "devDependencies": {
    "@babel/core": "^7.12.10",
    "@babel/preset-env": "^7.12.11",
    "@types/express": "^4.17.11",
    "@types/jest": "^26.0.20",
    "babel-jest": "^26.6.3",
    "dotenv": "^8.2.0",
    "errorhandler": "^1.5.1",
    "eslint": "7.2.0",
    "eslint-config-airbnb": "18.2.1",
    "eslint-config-prettier": "^7.2.0",
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-jsx-a11y": "^6.4.1",
    "eslint-plugin-prettier": "^3.3.1",
    "eslint-plugin-react": "^7.21.5",
    "eslint-plugin-react-hooks": "4.0.0",
    "install-peerdeps": "^3.0.0",
    "jest": "^26.6.3",
    "nodemon": "^2.0.7",
    "webpack": "^5.3.2",
    "webpack-dev-middleware": "^4.0.0",
    "webpack-hot-middleware": "^2.25.0"
  },
  "dependencies": {
    ...other dependencies
  }
}
```

---

### Important items to note: 

* **Important:** you need to create a `.env` file in your `server` folder. Then copy the secret key in your `.env.example` file and place a UUI string inside. This can be any string technically.
* be sure to restart your server when done
  

Our `config` file and `addExpressSession` middleware use this key to encyrpt your auth strategy. 

## General Tidbits
* you can expand upon the error handling in the sign-in/sign-up forms if you wish!

* you can update the current-user endpoint to be less noisy if you want, but otherwise expect a 401 error before users are signed in (this should prevent functionality, and is expected)

* it is okay keep the older `.then` syntax in the `getCurrent` user call. Its functionally equivalent and style decision 



--- 

## Agenda of Items Covered

* Signing Up 
- mostly a simple form, with extra validations
- we redirect on submit, user should be stored in a session at this point
- posts to "usersRouter", and logs them in

* Signing In 
- also mostly a standard form 
- posts to the userSessions router
- despite advanced looking logic, this just checks that user credentials via `passportStrategy`, and then logs you in if correct

* Signing Out 
- a delete request that calls passports `logout` method

* Accessing the current user
- once logged in, `req.user` will be where your authenticated user information is stored on the backend
- on the frontend, userSession state is managed above your react router routes (otherwise we would have to get the user from the backend with every page)
- alternative Route rendering is needed to get some state passed as a prop to a child
- our `AuthenticatedRoute` is a Launch implementation of passing this down
- use `AuthenticatedRoute` for pages where a user MUST be signed in 
- use rendering with components as a child of Route for pages where we want the user info, but you dont need to be logged in

* Using Authenticated Route 
* Passing User down as a prop 


https://www.uuidgenerator.net/version1