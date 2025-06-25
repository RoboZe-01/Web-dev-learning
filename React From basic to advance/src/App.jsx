import React from 'react'

const App = () => {


  const hello = ()=>{
    console.log("hello!!")
  }
  let user = "Prem"
  let changeUser =()=>{
    console.log(user)

  return (
    <div>
      <h1>User name is {user}</h1>
      <button onClick={changeUser}>Change user</button>
    </div>
  )
}

export default App



// hooks - special type of functions 