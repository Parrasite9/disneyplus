import React from 'react'
import { Route, Routes } from 'react-router-dom'

// COMPONENT IMPORTS 
import Login from './Components/Login'

function App() {
  return (
    <div>
      {/* REACT ROUTER DOM STRUCTURE (ALSO VIEW INDEX.JS FOR STRUCTURE)  */}
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
      
    </div>
  )
}

export default App
