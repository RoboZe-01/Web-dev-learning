import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css' Commentet out for now
import'./App2.jsx' // USing this for now to avoid errors
import App from './App.jsx'
import { jsx } from 'react/jsx-runtime'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
jsx - java