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

           
        
          <div className="userProfile">
            <p className="userProfileText">Profile</p>
          </div>

          <div className='userProfileParent'>
            <div className='displayPictureInfo'>
                <div className='userProfilePicture'>
                    <img className='userImage' src={defaultImg} alt="profile"/>
                </div>

            <div className='userNameRoleAddress'>
                <p className='userName Text'>Christoper Mirafuente Bulawan</p>
                <p className='userRole Text'>Software Engineer</p>
                <p className='userAddress Text'>bulawan.christoper.bscs2020@gmail.com</p>
                <p className='Text'>09123456789</p>
                
            </div>
          </div>

          {showDropdown && <DropdownModal logoutHandler={handleLogout} />}
          </div>

          <div className="personalInformationHeader">
            <p className="personalInformationText">Personal Information</p>
          </div>

          <div className='userProfileParent'>

            <div className='personalInformationParent'>
            <div className='userNameRoleAddress'>
                <p className='userName Text'>Age</p>
                <p className='userRole Text'>21</p>   
            </div>

            <div className='userNameRoleAddress'>
                <p className='userName Text'>Gender</p>
                <p className='userRole Text'>Male</p>
                
            </div>


            
          </div>
          {showDropdown && <DropdownModal logoutHandler={handleLogout} />}
          </div>
        </div>
      </>
    );
}

export default Profile;