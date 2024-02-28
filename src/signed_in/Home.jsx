import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./styles/styles.css"

// Images
import logo from "../assets/final-topright-logo.png";
import defaultImg from "../assets/signed-in/defaultImg.jpg"

const Home = () => {

  const [userName, setUserName] = useState(''); 
  const navigate = useNavigate();

  // React to PHP Connection
  useEffect(() => {
      const fetchUserName = async () => {
        try {
          const userEmail = sessionStorage.getItem('user'); // Retrieve user email from sessionStorage
          if (userEmail) {
            const response = await fetch(`http://localhost/CareerCompass/backend/signed-in/home.php?email=${userEmail}`);
            const data = await response.json();
  
            if (data.success) {
              setUserName(data.userName);
            } else {
              console.log('Failed to fetch user name');
            }
          }
        } catch (error) {
          console.error('An error occurred', error);
        }
      };
  
      fetchUserName();
    }, []);

    // Logout User (disabled)
    const handleLogout = () => {
      sessionStorage.removeItem('user');
      navigate('/');
    }

  return (
    <>
    <div className='parent'>
      <header className='navBar'>
        <div className='navBarInner'>
          <div className='navLogoContainer'>
            <img src={logo} alt="logo" className="navLogo"/>
          </div>

          <div className='navProfile'>
            <img src={defaultImg} alt='profile' className='profileImg'/>
            <p className='username'>Welcome, {userName}</p>
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

export default Home;
