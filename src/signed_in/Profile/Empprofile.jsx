import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./styles/Profile.css"

// Images
import logo from "../../assets/homepage/final-topright-logo.png";
import defaultImg from "../../assets/signed-in/defaultImg.jpg"

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