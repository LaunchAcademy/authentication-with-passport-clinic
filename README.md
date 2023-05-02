# User Authentication with Passport Clinic

---

## Important Items to Note

- **Important:** you need to create a `.env` file in your `server` folder. Then copy the secret key in your `.env.example` file and place a UUI string inside. This can be any string technically.
  - https://www.uuidgenerator.net/version1
- Be sure to restart your server when done (anytime you edit the `.env` file)

Our `config` file and `addExpressSession` middleware use this key to encyrpt your auth strategy.

## General Tidbits

- You can expand upon the error handling in the sign-in/sign-up forms if you wish!

- You can update the current-user endpoint to be less noisy if you want, but otherwise expect a 401 error before users are signed in (this should prevent functionality, and is expected)

---

## Agenda of Items Covered

### Signing Up

- Mostly a simple form, with extra validations
- We redirect on submit, user should be stored in a session at this point
- Posts to `usersRouter`, and logs them in

### Signing In

- Also mostly a standard form
- Posts to the userSessions router
- Despite advanced looking logic, this just checks that user credentials via `passportStrategy`, and then logs you in if correct

### Signing Out

- A delete request that calls passports `logout` method

### Accessing the current user

- Once logged in, `req.user` will be where your authenticated user information is stored on the backend
- On the frontend, userSession state is managed above your react router routes (otherwise we would have to get the user from the backend with every page)
- Alternative Route rendering is needed to get some state passed as a prop to a child
- Our `AuthenticatedRoute` is a Launch implementation of passing this down
- Use `AuthenticatedRoute` for pages where a user MUST be signed in
- Use rendering with components as a child of Route for pages where we want the user info, but you don;t need to be logged in

### Using Authenticated Route

- Passing User down as a prop
