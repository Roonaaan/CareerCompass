import React from 'react'

import "./styles/styles.css"

import logo from "../assets/final-topright-logo.png";

const Home = () => {
  return (
    <>
    <div className='parent'>
    <header className='navBar'>
      <div className='navBarInner'>
        <div className='navLogoContainer'>
          <img src={logo} alt="logo" className="navLogo"/>
        </div>

        <div className='navProfile'>
          <input className='userImage' type="image"/>
          <p className='username'>Welcome, User</p>
        </div>
      </div>
    </header> 

    <section className='createRoadmap'>
      <div className='headerText'>
       <p className='welcomeText'> Welcome to CareerCompass </p>
       <p className='clickText'> Click to create your own roadmap! </p>
      </div>

      <div className='buttonContainer'>
      <button className='createButton'> CREATE ROADMAP </button>
      </div>
    </section>
    </div>

    </>
  )
}

export default Home
