import React from "react"
const AuthedUserProfile = (props) => {
  console.log(props)

  let message = ""
  if (props.user !== undefined ){
    message = props.user.email
  }

  return (
    <div>
      <h1>ONLY SIGNED IN KIDS CAN SEE</h1>
      <div>The current user is: {message} </div>
    </div>
  )
}
export default AuthedUserProfile