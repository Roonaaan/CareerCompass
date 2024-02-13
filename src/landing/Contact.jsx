import React from "react";
import { useNavigate } from "react-router-dom";

// CSS
import './styles/Contact.css';

// Images
import logo from '../assets/final-topright-logo.png';
import footerlogo from "../assets/footerLogo.png";

const Contact = () => {

    const Logo = logo;
    const handleAboutClick = () => {
        navigate("/About");
    };

    const handleHomeClick = () => {
        navigate("/");
    };

    const handleContactClick = () => {
        navigate("/Contact-Us");
    };

    return (
        <>
            {/* Navigation Bar */}
            <nav className="navigationbarWrapper">
                <div className="navbarInner">
                    <div className="navLeft">
                        <img
                            src={Logo}
                            alt="logo"
                            className="brand"
                            onClick={handleHomeClick}
                        />
                    </div>

                    <div className="login-container">
                        <btn className="login-text">Log in</btn>
                        <btn className="Signup-text">Sign up</btn>
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
            {/* Contact Us Section*/}
            <div className="contactUsWrapper">
                <div className="contactForm">
                    <div className="contactInputs">
                        <h1> Contact Form </h1>
                        <div className="contactInput">
                            <label> Name </label>
                            <input
                                type="name"
                                placeholder=""
                            />
                        </div>
                        <div className="contactInput">
                            <label> Email Address </label>
                            <input
                                type="email"
                                placeholder=""
                            />
                        </div>
                        <div className="contactInput">
                            <label> Message Here </label>
                            <textarea
                                rows='5'
                            />
                        </div>
                        <div className="contactSubmit">
                            <button
                                className="contactSubmitButtton"
                                placeholder=''
                            > Send
                            </button>
                        </div>
                    </div>
                </div>
                <div className="contactInfoContainer">
                    <div className="contactInfoForm">
                        <div className="contactInfoHeader">
                            <h1> Contact Info </h1>
                        </div>
                        <div className="contactInfoDetails">
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nisi ut sequi consequatur, voluptas totam delectus molestiae voluptatibus architecto tempora dicta consequuntur, commodi eligendi cumque! Blanditiis temporibus officia eius distinctio.</p>
                        </div>
                        <div className="contactInfoContact">
                            <div className="contactInfoItem">
                                <p1>Address:</p1>
                                <p>lorem ipsum</p>
                            </div>
                            <div className="contactInfoItem">
                                <p1>Email Address:</p1>
                                <p>lorem ipsum</p>
                            </div>
                            <div className="contactInfoItem">
                                <p1>Phone:</p1>
                                <p>lorem ipsum</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Contact Us Section*/}
            <nav className="footerNavbarWrapper">
                <div className="footerNavbarColumn">
                    <div className="footerNavbarInner">
                        <div className="footerLogoWrapper">
                            <div className="footerNavleft">
                                <img
                                    src={footerlogo}
                                    alt="Logo"
                                    className="footerLogo"
                                    onClick={handleHomeClick}
                                />
                            </div>
                            <div className="footerConnect">
                                <h1 className="connectWithUsText"> Connect with us </h1>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <span style={{ margin: "0 10px" }}>
                                        <a
                                            href="#facebook"
                                            className="fab fa-facebook-square fa-4x"
                                            style={{ color: "white" }}
                                        >
                                            {""}
                                        </a>
                                    </span>
                                    <span style={{ margin: "0 10px" }}>
                                        <a
                                            href="#google"
                                            className="fab fa-google fa-4x"
                                            style={{ color: "white" }}
                                        >
                                            {""}
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="footerAbout">
                            <h1 className="footerAboutHeader"> Our Team </h1>
                            <a
                                href="/About"
                                className="footerAboutLink"
                                onClick={handleAboutClick}
                            >
                                {" "}
                                About Us{" "}
                            </a>
                            <a href="" className="footerAboutLink">
                                {" "}
                                Mission and Vision{" "}
                            </a>
                            <a href="/Contact-Us" className="footerAboutLink" onClick={handleContactClick}>
                                {" "}
                                Contact us{" "}
                            </a>
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
};

export default Contact;