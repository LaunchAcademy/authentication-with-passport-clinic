
# User Authentication with Passport Clinic

### Signing Up 
### Signing In 
### Signing Out 

### Behind the Scenes Passport middlewares 

### Using Authenticated Route 
### Passing User down as a prop 

---

### Important items to note: 


* need to make .env in server, otherwise sessions won't be stored, and you wont be able to retrieve user after signing in 
* you can update the current-user endpoint to be less noisy if you want, but otherwise expect a 401 error before users are signed in (this should prevent functionality, and is expected)
* feel free to keep the older .then syntax in the getCurrent user call. Its functionally equivalent and style decision 
