
import React from "react";
import { useNavigate } from "react-router-dom";
//CSS
import "./styles/About.css";
//images
import logo from "../assets/final-topright-logo.png";
import footerlogo from "../assets/footerLogo.png";
const About = () => {
  const Logo = logo;
  const navigate = useNavigate();
  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <>
      <nav className="navbarWrapper">
        <div className="navbarInner">
          <div>
            <img
              src={Logo}
              alt="logo"
              className="brand"
              onClick={handleHomeClick}
            />
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
      <section className="description">
        <div className="description-container">
          <p className="header">
            {" "}
            We're guiding you to the find the right career path.{" "}
          </p>
          <p className="sub-heading">
            {" "}
            The team behind CareerCompass aims to develop a system that provides
            a comprehensive guide for employees within a company to achieve
            their intended roles with the assistance of Artificial Intelligence
            (AI). We're more than just a group of students; we're a dynamic
            force of change-makers who believe in the power of collaboration,
            innovation, and the unique views that each team member brings to the
            table. As we embark on this exciting journey, we encourage you to
            join us in creating CareerCompass's future. Let us work together to
            turn obstacles into opportunities and leave a legacy of innovation
            that extends beyond academic bounds.
          </p>
        </div>
      </section>
      <section className="mission">
        <div className="mission-container">
          <p className="mission-header"> Mission. </p>
          <p className="mission-sub-heading">
            {" "}
            Our goal is simple: empower employees by generating personalized
            career roadmaps based on their unique work experiences and skills.
            Through cutting-edge technology and a user-centric approach, we aim
            to provide dynamic insights, break down barriers, and inspire
            confidence in navigating the ever-evolving professional landscape.
            Join us in reshaping the future of career empowerment, one
            personalized roadmap at a time.
          </p>
        </div>
      </section>
    </>
  );
};
export default About;
