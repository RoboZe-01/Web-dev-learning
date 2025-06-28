import React, { useState } from 'react'

const App = () => {

const [Num, setNum] = useState(0)



const changeA =()=> {
  console.log("Chal gya")
  setA(20)
}

  return (
    <div>
 <h2>Number is {Num}</h2>
 <button onClick={function(){
  setNum(Num + 10)



 }}>Increment</button>
 <button onClick={()=>{
  setNum(Num-10)
 }}>decrement</button>
    </div>
  )
}

export default App
