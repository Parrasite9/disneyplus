import React from 'react'
import { Route, Routes } from 'react-router-dom'

// COMPONENT IMPORTS 
import Login from './Components/Login'
import Home from './Components/Home'

function App() {
  return (
    <div>
      {/* REACT ROUTER DOM STRUCTURE (ALSO VIEW INDEX.JS FOR STRUCTURE)  */}
      <Routes>
        <Route path='/' element={<Login />} />
        {/* <Route path='/home' element={} /> */}
        <Route path='/home' element={<Home />} />
      </Routes>
      
    </div>
  )
}

export default App
