
import React from 'react'

const App = () => {
  let name = "Prem";
  const changeName = () => {
    name = "Rahul";

  return (
    <div>
     <h1>UserName is {name}</h1>
    </div>
  )
}
}
export default App
