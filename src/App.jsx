import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

// Landing, About Us and Login Page
import Home from './landing/Home';
import Login from './landing/Login';
import About from './landing/About';
import ContactUs from './landing/Contact';

// Signed-In user page
import ForgotPassword from './landing/forgot-password/Forgotpass';
import ForgotMessage from './landing/forgot-password/Forgotpassmessage';
import ForgotPasswordChange from './landing/forgot-password/Forgotpasschange';

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
          <Route path ="/Contact-Us" element={<ContactUs />} />

          {/* Forgot Password Page */}
          <Route path ="/Login/Forgot-Password" element={<ForgotPassword />} />
          <Route path ="/Login/Forgot-Password/Email-Sent" element={<ForgotMessage />} />
          <Route path ="/Login/Forgot-Password/Change-Password" element={<ForgotPasswordChange />} />

          {/* Signed-In User Page */}
          <Route path ="/Welcome" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
