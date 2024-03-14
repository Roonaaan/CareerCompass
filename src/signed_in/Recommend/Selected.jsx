import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/recommend.css';

// Images
import logo from "../../assets/homepage/final-topright-logo.png";
import defaultImg from "../../assets/signed-in/defaultImg.jpg";

const SelectDept = () => {
    const [userImage, setUserImage] = useState('');
    const [userName, setUserName] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [departments, setDepartments] = useState([]);
    const [showDescriptions, setShowDescriptions] = useState({
        job1: false,
        job2: false,
        job3: false,
        job4: false,
        job5: false,
        job6: false,
    });
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost/CareerCompass/backend/algorithm/selected.php')
            .then(response => response.json())
            .then(data => setDepartments(data))
            .catch(error => console.error('Error fetching departments:', error));
    }, []);

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

    // Return to Home Page
    const handleHomeClick = () => {
        navigate('/Welcome')
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

    const toggleDescription = (jobKey) => {
        setShowDescriptions({
            ...showDescriptions,
            [jobKey]: !showDescriptions[jobKey],
        });
    };

    return (
        <>
            <div className="selectedContainer">
                <header className="navBar">
                    <div className="navBarInner">
                        <div className="navLogoContainer">
                            <img src={logo} alt="logo" className="navLogo" onClick={handleHomeClick}/>
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

                <div className="selectedJobContainer">
                    <div className="selectedJobContainerInner">
                        <div className="selectedJobContainerHeader">
                            <h1> Selected Job Role </h1>
                        </div>
                        <div className="selectedJobContainerSubtitle">
                            <p> Select a role you want to achive. </p>
                        </div>
                        <div className="selectedJobContainerSelection">
                            <div
                                className="selectedJobContainerPanel"
                                onClick={() => toggleDescription('job1')}>
                                <p className='job-title'> {departments.length > 0 && departments[0]} </p>
                                {showDescriptions.job1 && <p className="job-description-selected">Description 1</p>}
                            </div>
                            <div
                                className="selectedJobContainerPanel"
                                onClick={() => toggleDescription('job2')}>
                                <p className='job-title'> {departments.length > 1 && departments[1]} </p>
                                {showDescriptions.job2 && <p className="job-description-selected">Description 2</p>}
                            </div>
                            <div
                                className="selectedJobContainerPanel"
                                onClick={() => toggleDescription('job3')}>
                                <p className='job-title'> {departments.length > 2 && departments[2]} </p>
                                {showDescriptions.job3 && <p className="job-description-selected">Description 3</p>}
                            </div>
                            <div
                                className="selectedJobContainerPanel"
                                onClick={() => toggleDescription('job4')}>
                                <p className='job-title'> {departments.length > 3 && departments[3]} </p>
                                {showDescriptions.job4 && <p className="job-description-selected">Description 4</p>}
                            </div>
                            <div
                                className="selectedJobContainerPanel"
                                onClick={() => toggleDescription('job5')}>
                                <p className='job-title'> {departments.length > 4 && departments[4]} </p>
                                {showDescriptions.job5 && <p className="job-description-selected">Description 5</p>}
                            </div>
                            <div
                                className="selectedJobContainerPanel"
                                onClick={() => toggleDescription('job6')}>
                                <p className='job-title'> {departments.length > 5 && departments[5]} </p>
                                {showDescriptions.job6 && <p className="job-description-selected">Description 6</p>}
                            </div>
                        </div>

                    </div>
                </div>
                {showDropdown && <DropdownModal logoutHandler={handleLogout} />}
            </div>
        </>
    );
};

export default SelectDept;