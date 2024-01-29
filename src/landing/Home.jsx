import React, { Fragment } from "react";
import { features } from './constants/features'
import { useNavigate } from "react-router-dom";

//import CSS
import './styles/Home.css'

//images
import logo from '../assets/final-topright-logo.png'
import footerlogo from '../assets/footerLogo.png'

const Home = () => {
    const Logo = logo;

    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/Login')
    }
    const handleAboutClick = () => {
        navigate('/About')
    }

    const handleHomeClick = () => {
        navigate('/')
    }

    return (
        <>
            {/* Navigation Bar */}
            <nav className="navbarWrapper">
                <div className="navbarInner">
                    <div className="navLeft">
                        <img src={Logo} alt="logo" className="brand" onClick={handleHomeClick} />
                    </div>
                    {/* Login and About Header
                    <div className="navRight">
                        <button className="about" onClick={handleAboutClick}>
                            About Us
                        </button>
                        <button className="login" onClick={handleLoginClick}>
                            Log In
                        </button>
                    </div>
                    */}
                </div>
            </nav>
            {/* End of Navigation Bar */}
            {/* Hero */}
            <div className="heroWrapper">
                <div className="heroInner">
                    <h1 className="headerText">
                        Create your own Roadmap
                    </h1>
                    <div className="slogan">
                        <p>
                            Discover your own career path! Input your skills, experience, and our system
                            crafts a personalize roadmap just for you.
                        </p>
                    </div>
                    <div className="herocreate">
                        <a className="herologin" onClick={handleLoginClick}>
                            Create Roadmap
                        </a>
                    </div>
                </div>
            </div>
            {/* End of Hero */}
            {/* Features */}
            <div className="featuresWrapper">
                <div className="featuresHeading">
                    <p className="featureTitle"> Main Features</p>
                    <p classname="featureDesc">
                        We aim to provide a guide for employees within this company to achieve your
                        intended roles with the assistance of Artificial Inteligence(AI)
                    </p>
                </div>
                <div className="featuresListWrapper">
                    <div className="featuresList">
                        {/* go to components/features.js */}
                        {features.map(({ feature, description, image }) => {
                            return (
                                <div className="featureDiv">
                                    <Fragment>
                                        <div className="feature">
                                            <p>{feature}</p>
                                        </div>
                                        <div className="featureDescription">
                                            <p>{description}</p>
                                        </div>
                                        <div>
                                            <img className="featureImg" src={image} alt='img' />
                                        </div>
                                    </Fragment>
                                </div>
                            );
                        })}
                        {/* end */}
                    </div>
                </div>
            </div>
            {/* End of Features */}
            {/* Footer */}
            <nav className="footerNavbarWrapper">
                <div className="footerNavbarColumn">
                    <div className="footerNavbarInner">                      
                        <div className="footerLogoWrapper">
                        <div className="footerNavleft">
                            <img src={footerlogo} alt="Logo" className="footerLogo" onClick={handleHomeClick} />
                        </div>
                        <div className="footerConnect">
                            <h1> Connect with us </h1>
                            <div>
                                <span>
                                    <a href="#facebook" className="fab fa-facebook-square fa-6x" style={{ color: 'white' }}>
                                        {''}
                                    </a>
                                </span>
                                <span>
                                    <a href="#facebook" className="fab fa-google fa-6x" style={{ color: 'white' }}>
                                        {''}
                                    </a>
                                </span>
                            </div>
                        </div>
                        </div>
                        <div className="footerAbout">
                            <h1> Our Team </h1>
                            <a href="" className="footerAboutLink"> About Us </a>
                            <a href="" className="footerAboutLink"> Mission and Vision </a>
                            <a href="" className="footerAboutLink"> Contact us </a>
                        </div>
                    </div>
                    <div className="underline" />
                    <div className="footerText">
                        <p className="footerTextCopyright">
                            Copyright &#169; CareerCompass. All Rights Reserved
                        </p>
                    </div>
                </div>
            </nav>
            {/* End of Footer */}
        </>
    )

}

export default Home;