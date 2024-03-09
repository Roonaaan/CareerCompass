import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./styles/Profile.css"

// Images
import logo from "../assets/homepage/final-topright-logo.png";
import defaultImg from "../assets/signed-in/defaultImg.jpg"

const Profile = () => {

  const [userName, setUserName] = useState(''); 
  const [showDropdown, setShowDropdown] = useState(false);
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

    const handleProfileClick = () => {
      navigate('/My-Profile');
    }

    // Logout User
    const handleLogout = () => {
      sessionStorage.removeItem('user');
      navigate('/');
    }

    const DropdownModal = ({ logoutHandler }) => {
      return (
        <div className="dropdown-modal">
          <div className="profile-info">
            <img src={defaultImg} alt='profile' className='profileImg'/>
            <p className='username'>{userName}</p>
          </div>
          <ul>
            <li><button onClick={handleProfileClick}> My Profile </button></li>
            <li><button onClick={logoutHandler}> Log Out </button></li>
          </ul>
        </div>
      );
    };

    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    }

    return (
      <>
        <div className="profileContainer">
          <header className="navBar">
            <div className="navBarInner">
              <div className="navLogoContainer">
                <img src={logo} alt="logo" className="navLogo" />
              </div>
              <div className="navProfile">
                <img
                  src={defaultImg}
                  alt="profile"
                  className="profileImg"
                  onClick={toggleDropdown}
                />
              </div>
            </div>
          </header>

          <div className="profileInner">
            {/* Employee Profile */}
            <div className="profileEmpContainer">
              <div className="profileEmpImage">
                <img src={defaultImg} alt='profile' /> {/* IMAGE */}
              </div>
              <div className="profileEmpNameContainer">
                <div className="profileEmpNameDetails">
                  <h1> Employee Name </h1> {/* FIRST AND LAST NAME */}
                </div>
                <div className="profileEmpNameDetails">
                  <p> Job Title </p> {/* JOB_POSITIN */}
                </div>
                <div className="profileEmpNameDetails">
                  <p> Employee Number </p> {/* EMP_ID */}
                </div>
              </div>
              <div className="underline" />
              <div className="profileEmpDetailContainer">
                <div className="profileEmpDetail">
                  <p> Email Addres </p> {/* EMAIL */}
                </div>
                <div className="profileEmpDetail">
                  <p> Phone Number </p> {/* PHONE_NUMBER */}
                </div>
              </div>
            </div>
            {/* Employee Background */}
            <div className="profileEmpBackgroundContainer">
              <label htmlFor="personalInfo"> Personal Information </label>
              <div className="profileEmpBackgroundPersonalInfo">
                <div className="profileEmpPersonalInfo">
                  <p> Age </p> {/* AGE */}
                </div>
                <div className="profileEmpPersonalInfo">
                  <p> Birthday </p> {/* BIRTHDAY */}
                </div>
                <div className="profileEmpPersonalInfo">
                  <p> Gender </p> {/* GENDER */}
                </div>
                <div className="profileEmpPersonalInfo">
                  <p> Nationality </p> {/* NATIONALITY */}
                </div>
                <div className="profileEmpPersonalInfo">
                  <p> Civil Status </p> {/* CIVIL_STATUS */}
                </div>
              </div>
              {/* Employee Address */}
              <label htmlFor="Address"> Address </label>
              <div className="profileEmpBackgroundAddress">
                <div className="profileEmpAddress">
                  <p> Home Address </p> {/* HOME_ADDRESS */}
                </div>
                <div className="profileEmpAddress">
                  <p> District </p> {/* DISTRICT */}
                </div>
                <div className="profileEmpAddress">
                  <p> City </p> {/* CITY */}
                </div>
                <div className="profileEmpAddress">
                  <p> Province </p> {/* PROVINCE */}
                </div>
                <div className="profileEmpAddress">
                  <p> Postal Code </p> {/* POSTAL_CODE */}
                </div>
              </div>
            </div>
          </div>
          {showDropdown && <DropdownModal logoutHandler={handleLogout} />}
        </div>   
      </>
    );
}

export default Profile;