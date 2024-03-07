import React, { useState } from 'react';
import './styles/recommend.css';

// Images
import logo from "../../assets/homepage/final-topright-logo.png";
import Img1 from "../../assets/aboutus/ppBulawan.jpg";
import Img2 from "../../assets/aboutus/ppDeJesus.png";
import Img3 from "../../assets/aboutus/ppPajerga.jpg";
import defaultImg from "../../assets/signed-in/defaultImg.jpg";

const Recommend = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDescriptions, setShowDescriptions] = useState({
        img1: false,
        img2: false,
        img3: false,
    });

    const handleLogout = () => {
        sessionStorage.removeItem('user');
        navigate('/');
    };

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
        );
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const toggleDescription = (imgKey) => {
        setShowDescriptions({
            ...showDescriptions,
            [imgKey]: !showDescriptions[imgKey],
        });
    };

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
                            <div className="recommendJobContainerPanel" onClick={() => toggleDescription('img1')}>
                                <img 
                                    src={Img1} 
                                    alt="Image 1"
                                />
                                {showDescriptions.img1 && <p className="image-description">Description for Image 1</p>}
                            </div>
                            <div className="recommendJobContainerPanel" onClick={() => toggleDescription('img2')}>
                                <img 
                                    src={Img2} 
                                    alt="Image 2" 
                                />
                                {showDescriptions.img2 && <p className="image-description">Description for Image 2</p>}
                            </div>
                            <div className="recommendJobContainerPanel" onClick={() => toggleDescription('img3')}>
                                <img 
                                    src={Img3} 
                                    alt="Image 3" 
                                />
                                {showDescriptions.img3 && <p className="image-description">Description for Image 3</p>}
                            </div>
                        </div>
                        <div className="recommendJobContainerButton">
                            <button className='recommendJobContainerProceed'> PROCEED </button>
                        </div>
                    </div>
                </div>
                {showDropdown && <DropdownModal logoutHandler={handleLogout} />}
            </div>
        </>
    );
};

export default Recommend;