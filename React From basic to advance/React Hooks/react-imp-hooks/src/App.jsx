import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import usestate from '../hooks/usestate.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <usestate/>
      <h1>
        Hii
      </h1>
    </div>
  
  
    
  )
}

export default App
