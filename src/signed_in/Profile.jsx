import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./styles/Profile.css"

// Images
import logo from "../assets/homepage/final-topright-logo.png";
import defaultImg from "../assets/signed-in/defaultImg.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Profile = () => {

  const [userImage, setUserImage] = useState('');
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
            setUserImage(data.userImage);

            if (data.userImage) {
              setUserImage(`data:image/jpeg;base64,${data.userImage}`); // Assuming JPEG format, adjust content type if needed
            } else {
              setUserImage(defaultImg);
            }
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
          <img 
            src={userImage || defaultImg} 
            alt='profile' 
            className='profileImg' 
          />
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
                src={userImage || defaultImg}
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
                <p1> Employee Number:  </p1> {/* EMP_ID */}
              </div>
            </div>
            <div className="underline" />
            <div className="profileEmpDetailContainer">
              <div className="profileEmpDetail">
                <p><FontAwesomeIcon icon={faEnvelope} /> Email Address </p> {/* EMAIL */}
              </div>
              <div className="profileEmpDetail">
                <p><FontAwesomeIcon icon={faPhone} /> Phone Number </p> {/* PHONE_NUMBER */}
              </div>

              <div className="profileEmpBackgroundEmploymentHistoryContainer">
                <label htmlFor="empHistory"> Educational Background </label>
                <div className="profileEmpBackgroundEmploymentHistory">
                  <div className="profileEmpHistory">
                    <p> Grade/Level </p> {/* COMPANY */}
                    <p1> Grade/Level Here </p1>
                  </div>
                  <div className="profileEmpHistory">
                    <p> School: </p> {/* JOB_TITLE */}
                    <p1> School Here </p1>
                  </div>
                  <div className="profileEmpHistory">
                    <p> Academic Year: </p> {/* COMPANY_ADDRESS */}
                    <p1> Year Here </p1>
                  </div>
                  
                </div>             
              </div>
            </div>
          </div>
          {/* Employee Background */}
          <div className="profileEmpBackgroundContainer">
            <div className="profileEmpBackgroundPersonalInfoContainer">
              <label htmlFor="personalInfo"> Personal Information </label>
              <div className="profileEmpBackgroundPersonalInfo">
                <div className="profileEmpPersonalInfo">
                  <p> Age: </p> {/* AGE */}
                  <p1> Age Here </p1>
                </div>
                <div className="profileEmpPersonalInfo">
                  <p> Birthday: </p> {/* BIRTHDAY */}
                  <p1> Birthday Here </p1>
                </div>
                <div className="profileEmpPersonalInfo">
                  <p> Gender: </p> {/* GENDER */}
                  <p1> Gender Here </p1>
                </div>
                <div className="profileEmpPersonalInfo">
                  <p> Nationality: </p> {/* NATIONALITY */}
                  <p1> Nationality Here </p1>
                </div>
                <div className="profileEmpPersonalInfo">
                  <p> Civil Status: </p> {/* CIVIL_STATUS */}
                  <p1> Civil Status Here </p1>
                </div>
              </div>
            </div>
            {/* Employee Address */}
            <div className="profileEmpBackgroundAddressContainer">
              <label htmlFor="Address"> Address </label>
              <div className="profileEmpBackgroundAddress">
                <div className="profileEmpAddress">
                  <p> Home Address: </p> {/* HOME_ADDRESS */}
                  <p1> Home Address Here </p1>
                </div>
                <div className="profileEmpAddress">
                  <p> District: </p> {/* DISTRICT */}
                  <p1> District Here </p1>
                </div>
                <div className="profileEmpAddress">
                  <p> City: </p> {/* CITY */}
                  <p1> City Here </p1>
                </div>
                <div className="profileEmpAddress">
                  <p> Province: </p> {/* PROVINCE */}
                  <p1> Province Here </p1>
                </div>
                <div className="profileEmpAddress">
                  <p> Postal Code: </p> {/* POSTAL_CODE */}
                  <p1> Postal Code Here </p1>
                </div>
              </div>
            </div>
            {/* Employment History */}
            <div className="profileEmpBackgroundEmploymentHistoryContainer">
              <label htmlFor="empHistory"> Employment History </label>
              <div className="profileEmpBackgroundEmploymentHistory">
                <div className="profileEmpHistory">
                  <p> Company: </p> {/* COMPANY */}
                  <p1> Company Here </p1>
                </div>
                <div className="profileEmpHistory">
                  <p> Job Title: </p> {/* JOB_TITLE */}
                  <p1> Job Title Here </p1>
                </div>
                <div className="profileEmpHistory">
                  <p> Address: </p> {/* COMPANY_ADDRESS */}
                  <p1> Company Address Here </p1>
                </div>
                <div className="profileEmpHistory">
                  <p> Start Date: </p> {/* START_DATE */}
                  <p1> Start Date Here </p1>
                </div>
                <div className="profileEmpHistory">
                  <p> End Date: </p> {/* END_DATE */}
                  <p1> End Date Here </p1>
                </div>
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