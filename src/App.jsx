import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Landing, About Us and Login Page
import Home from './landing/Home'
import About from './landing/About'
import ContactUs from './landing/Contact'


// Signed-In user page
import ForgotPasswordChange from './landing/forgot-password/Forgotpasschange'

// Signed-In user page
import Welcome from './signed_in/Home'
import EmpProfile from './signed_in/Profile'
import Recommend from './signed_in/Recommend/Recommend'
import SelectDept from './signed_in/Recommend/Selected'
import Roadmap from './signed_in/Roadmap/Roadmap'
import Form from './components/Form'
import Phase1 from './signed_in/Roadmap/Phase1'
import Phase2 from './signed_in/Roadmap/Phase2'
import Phase3 from './signed_in/Roadmap/Phase3'
import Phase4 from './signed_in/Roadmap/Phase4'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Landing, About Us and Login Page */}
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact-Us" element={<ContactUs />} />

          {/* Forgot Password Page */}
          <Route path="/Login/Forgot-Password/Change-Password" element={<ForgotPasswordChange />} />

          {/* Signed-In User Page */}
          <Route path="/Welcome" element={<Welcome />} />
          <Route path="/My-Profile" element={<EmpProfile />} />
          <Route path="/Recommend" element={<Recommend />} />
          <Route path="/Select-Department" element={<SelectDept />} />    
          <Route path="/Roadmap" element={<Roadmap />} />   
          <Route path="/Form" element={<Form />} />  
          <Route path="/Phase1" element={<Phase1/>} /> 
          <Route path="/Phase2" element={<Phase2/>} /> 
          <Route path="/Phase3" element={<Phase3/>} /> 
          <Route path="/Phase4" element={<Phase4/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
