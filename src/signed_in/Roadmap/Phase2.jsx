import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ROADMAP CSS
import "./styles/style.css";

import logo from "../../assets/homepage/final-topright-logo.png";
import defaultImg from "../../assets/signed-in/defaultImg.jpg";

const Phase2 = () => {
  const [userImage, setUserImage] = useState("");
  const [userName, setUserName] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const userEmail = sessionStorage.getItem("user"); 
        if (userEmail) {
          const response = await fetch(
            `http://localhost/CareerCompass/backend/signed-in/home.php?email=${userEmail}`
          );
          const data = await response.json();

          if (data.success) {
            setUserName(data.userName);
            setUserImage(data.userImage);

            if (data.userImage) {
              setUserImage(`data:image/jpeg;base64,${data.userImage}`); 
            } else {
              setUserImage(defaultImg);
            }
          } else {
            console.log("Failed to fetch user name");
          }
        }
      } catch (error) {
        console.error("An error occurred", error);
      }
    };

    fetchUserName();
  }, []);

  const handleProfileClick = () => {
    navigate("/My-Profile");
  };

  // Logout User
  const handleLogout = () => {
    sessionStorage.removeItem("user");
    navigate("/");
  };

  const DropdownModal = ({ logoutHandler }) => {
    return (
      <div className="dropdown-modal">
        <div className="profile-info">
          <img
            src={userImage || defaultImg}
            alt="profile"
            className="profileImg"
          />
          <p className="username">{userName}</p>
        </div>
        <ul>
          <li>
            <button onClick={handleProfileClick}> My Profile </button>
          </li>
          <li>
            <button onClick={logoutHandler}> Log Out </button>
          </li>
        </ul>
      </div>
    );
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleNextButtonClick = () => {
    navigate("/Phase3");
  };

  const handlePrevButtonClick = () => {
    navigate("/Phase1");
  };


  return (
    <div className="roadmapWrapper">
      {/* Navigation Bar */}
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

      <section className="progressFrame">
        <div className="leftSide">
          <ul className="progressBarList  ">
            <li className="progressBarItem  ">
              <span className="phaseCount ">1</span>
              <span className="phaseProgressLabel">Phase 1</span>
            </li>

            <li className="progressBarItem currentItem ">
              <span className="phaseCount">2</span>
              <span className="phaseProgressLabel">Phase 2</span>
            </li>

            <li className="progressBarItem  ">
              <span className="phaseCount">3</span>
              <span className="phaseProgressLabel">Phase 3</span>
            </li>

            <li className="progressBarItem">
              <span className="phaseCount">4</span>
              <span className="phaseProgressLabel">Phase 4</span>
            </li>
          </ul>
          <div className="progressDescription"></div>
        </div>
      </section>

      {/* Middle Section */}
      <div className="middleSection">
        <section className="rightSide">
          <div className="rightsideTitle"> Phase 2 </div>
          <div className="taskDiv">
            <div className="taskTitle"> Task Title </div>
            <div className="taskDescription">
              {" "}
              Task Description: Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.{" "}
            </div>
            <div className="button-section">
            <button
        className="done-button">
        Done
      </button>
            </div>
          </div>
          <div className="taskDiv">
            <div className="taskTitle"> Task Title </div>
            <div className="taskDescription">
              {" "}
              Task Description: Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.{" "}
            </div>
            <div className="button-section">
            <button
        className="done-button1">
        Done
      </button>
            </div>
          </div>
          <div className="taskDiv">
            <div className="taskTitle"> Task Title </div>
            <div className="taskDescription">
              {" "}
              Task Description: Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.{" "}
            </div>
            <div className="button-section">
            <button
        className="done-button2">
        Done
      </button>
            </div>
          </div>
        </section>

        <div className="button-section-footer">
        <button className="prev-button-footer" onClick={handlePrevButtonClick}> 
        PREV PHASE </button>
        <button className="next-button-footer" onClick={handleNextButtonClick}>
        NEXT PHASE
      </button>
          
        </div>
      </div>
    </div>
  );
};

export default Phase2;
