import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

// Landing, About Us and Login Page
import Home from './landing/Home';
import Login from './landing/Login';
import About from './landing/About';

// Signed-In user page
import Welcome from './signed_in/Home';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Landing, About Us and Login Page */}
          <Route path ="/" element={<Home />} />
          <Route path ="/Login" element={<Login />} />
          <Route path ="/About" element={<About />} />

          {/* Signed-In User Page */}
          <Route path ="/Welcome" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
