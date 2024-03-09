import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/recommend.css';

// Images
import logo from "../../assets/homepage/final-topright-logo.png";
import defaultImg from "../../assets/signed-in/defaultImg.jpg";

const Recommend = () => {
    const [userName, setUserName] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDescriptions, setShowDescriptions] = useState({
        job1: false,
        job2: false,
        job3: false,
    });
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
                    <img src={defaultImg} alt='profile' className='profileImg' />
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

    const toggleDescription = (jobKey) => {
        setShowDescriptions({
            ...showDescriptions,
            [jobKey]: !showDescriptions[jobKey],
        });
    };

    const handleSelectClick = () => {
        navigate('/Select-Department');
    }

    return (
        <>
            <div className="recommendContainer">
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

                <div className="recommendJobContainer">
                    <div className="recommendJobContainerInner">
                        <div className="recommendJobContainerHeader">
                            <h1> Recommended Job Role </h1>
                        </div>
                        <div className="recommendJobContainerSubtitle">
                            <p> Top 3 recommended job roles for you based on your profile </p>
                        </div>
                        <div className="recommendJobContainerSelection">
                            <div 
                                className="recommendJobContainerPanel" 
                                onClick={() => toggleDescription('job1')}>
                                <p className='job-title'> Job 1 </p>
                                {showDescriptions.job1 && <p className="job-description">Description for Job 1</p>}
                            </div>
                            <div 
                                className="recommendJobContainerPanel" 
                                onClick={() => toggleDescription('job2')}>
                                <p className='job-title'> Job 2 </p>
                                {showDescriptions.job2 && <p className="job-description">Description for Job 2</p>}
                            </div>
                            <div 
                                className="recommendJobContainerPanel" 
                                onClick={() => toggleDescription('job3')}>
                                <p className='job-title'> Job 3 </p>
                                {showDescriptions.job3 && <p className="job-description">Description for Job 3</p>}
                            </div>
                        </div>
                        <div className="recommendJobContainerButton">
                            <button className='recommendJobContainerProceed'> PROCEED </button>
                        </div>
                        <span onClick={handleSelectClick}> Want to choose your own job position, click here </span>
                    </div>
                </div>
                {showDropdown && <DropdownModal logoutHandler={handleLogout} />}
            </div>
        </>
    );
};

export default Recommend;
