import React, { useState } from 'react'
import "./styles/Profile.css"

// Images
import logo from "../../assets/homepage/final-topright-logo.png";
import defaultImg from "../../assets/signed-in/defaultImg.jpg"

const Profile = () => {

    const [showDropdown, setShowDropdown] = useState(false);

    // Logout User (disabled)
    const handleLogout = () => {
        sessionStorage.removeItem('user');
        navigate('/');
      }
  
      const DropdownModal = ({ logoutHandler }) => {
        return (
          <div className="dropdown-modal">
            <div className="profile-info">
              <img src={defaultImg} alt='profile' className='profileImg'/>
              <p className='username'>sample</p>
            </div>
            <ul>
                <li><button> Return Home</button></li>
              <li><button>My Roadmap</button></li>
              <li><button onClick={logoutHandler}>Log Out</button></li>
            </ul>
          </div>
        )
      };

      const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
      }

    return(
        <>
        <div className="profileContainer">
            <header className='navBar'>
                <div className='navBarInner'>
                    <div className='navLogoContainer'>
                        <img src={logo} alt="logo" className="navLogo"/>
                    </div>
                    <div className='navProfile'>
                        <img 
                            src={defaultImg} 
                            alt='profile' 
                            className='profileImg'
                            onClick={toggleDropdown}
                        />
                    </div>
                </div>
            </header> 
            <div className="profileNavigation">
                <div className="profileNavigationInner">
                    <input 
                        type="radio"
                        id='profileInformation' 
                        name="navigationOption" 
                        onClick={'#'}
                        checked
                    />
                    <label htmlFor="profileInformation"> Profile Information </label>
                    <input 
                        type="radio"
                        id='workHistory' 
                        name="navigationOption" 
                        onClick={'#'}
                    />
                    <label htmlFor="workHistory"> Work History </label>
                    <input 
                        type="radio"
                        id='educational' 
                        name="navigationOption" 
                        onClick={'#'}
                    />
                    <label htmlFor="educational"> Educational Background </label>
                    <input 
                        type="radio"
                        id='skills' 
                        name="navigationOption" 
                        onClick={'#'}
                    />
                    <label htmlFor="skills"> Skills </label>
                </div>
            </div>
            <div className="profileDisplay">
                <div className="profileTitle">
                    <h1> Employee Profile </h1>
                </div>
                <div className="profileDisplayContainer">
                    <div className="profileImage">
                        <img src={defaultImg} alt="profile"/>
                    </div>
                    <div className="profileDetailContainer">
                        <div className="profileName">
                            <p> Employee Name </p>
                            <div className="profileEmpName">
                                <p> First Name </p>
                                <p> First Name Here </p>
                            </div>
                            <div className="profileEmpName">
                                <p> Last Name </p>
                                <p> Last Name Here </p>
                            </div>
                        </div>
                        <div className="profileAge">
                            <div className="profileEmpAge">
                                <p> Age </p>
                                <p> Age Here </p>
                            </div>
                            <div className="profileEmpAge">
                                <p> Birthday </p>
                                <p> Birthday Here </p>
                            </div>
                        </div>
                        <div className="profileJobPosition">
                            <p> Position </p>
                            <p> Position Here </p>
                        </div>
                        <div className="profileAddress">
                            <p> Address </p>
                            <div className="profileEmpAddress">
                                <p> Home Address </p>
                                <p> Home Address Here </p>
                            </div>
                            <div className="profileEmpAddress">
                                <p> District </p>
                                <p> District Here </p>
                            </div>
                            <div className="profileEmpAddress">
                                <p> City </p>
                                <p> City Here </p>
                            </div>
                            <div className="profileEmpAddress">
                                <p> Province </p>
                                <p> Province Here </p>
                            </div>
                            <div className="profileEmpAddress">
                                <p> Postal Code </p>
                                <p> Postal Code Here </p>
                            </div>
                        </div>
                        <div className="profileContact">
                            <div className="profileEmpContact">
                                <p> Email Address </p>
                                <p> Email Address Here </p>
                            </div>
                            <div className="profileEmpContact">
                                <p> Phone Number </p>
                                <p> Phone Number Here </p>
                            </div>
                        </div>
                        <div className="profileBackground">
                            <div className="profileEmpBackground">
                                <p> Gender </p>
                                <p> Gender Here </p>
                            </div>
                            <div className="profileEmpBackground">
                                <p> Civil Status </p>
                                <p> Civil Status Here </p>
                            </div>
                            <div className="profileEmpBackground">
                                <p> Nationality </p>
                                <p> Nationality Here </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showDropdown && <DropdownModal logoutHandler={handleLogout} />}
        </div>
        </>
    )
}

export default Profile;