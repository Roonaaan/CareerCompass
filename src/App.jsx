import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './landing/Home';
import Login from './landing/Login';
import About from './landing/About';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="/Login" element={<Login />} />
          <Route path ="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
