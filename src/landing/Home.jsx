import React, {Fragment} from "react";
import { features } from './constants/features'

//import CSS
import './styles/Home.css'

//images
import logo from '../assets/final-topright-logo.png'

const Home = () => {
    const Logo = logo;

    return(
        <>
        {/* Navigation Bar */}
            <nav className="navbarWrapper">
                <div className="navbarInner">
                    <div className="navLeft">
                        <img src={Logo} alt="logo" className="brand" />
                    </div>
                    <div className="navRight">
                        <button className="login">
                            Log In
                        </button>
                        <button className="about">
                            About Us
                        </button>
                    </div>
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
                        <a className="herologin">
                            Create Roadmap
                        </a>
                    </div>
                </div>
            </div>
        {/* End of Hero */}
        {/* Features */}    
            <div className="featuresWrapper">
                <div className="featuresHeading">
                    <p> Main Features</p>
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
                        <div className="footerNavleft">Legal</div>
                        <div>
                            <a href="/" className="footerNavLink">
                                Terms of Use
                            </a>
                            <a href="/" className="footerNavLink">
                                Privacy Policy
                            </a>
                        </div>
                        <div>
                            <span>
                                <a href="#facebook" className="fab fa-facebook-square">
                                    {" "}
                                </a>
                            </span>
                            <span>
                                <a href="#instagram" className="fab fa-instagram" style={{ color: "black" }}> 
                                    {" "}
                                </a>
                            </span>
                            <span>
                                <a href="#pinterest" className="fab fa-pinterest">
                                    {" "}
                                </a>
                            </span>
                        </div>
                        {/* </div> */}
                    </div>
                    <div className="footerText">
                        <p>
                        Apple and the Apple logo are trademarks of Apple Inc., registered in
                        the U.S. and other countries. App Store is a service mark of Apple
                        Inc. Android, Google Play and the Google Play logo are trademarks of
                        Google LLC.
                        </p>
                    </div>
                </div>
            </nav>
        {/* End of Footer */}        
        </>
    )

}

export default Home;