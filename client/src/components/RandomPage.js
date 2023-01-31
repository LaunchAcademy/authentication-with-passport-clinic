import React from "react"

const RandomPage = (props) => {
 console.log(props)

  let message = ""
  if (props.user !== undefined && props.user !== null ){
    message = props.user.email
  }

  return (
    <div>
      <h1>Generic page that anyone can see</h1>


      <div>FYI: The current user is: {message} </div>
    </div>
  )
}

export default RandomPage