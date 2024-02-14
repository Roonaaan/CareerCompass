import React from "react";
import { useNavigate } from "react-router-dom";

// CSS
import './styles/Forgotpass.css'

// Logo
import Logo from '../../assets/logo-dark.png'

// Navigation
const navigate = useNavigate();
const handleLoginClick = () => {
  navigate("/Login");
};

export const Forgotpass = () => {

    return(
        <>
        <div className="imageHeader">
            <img src={Logo} alt='Logo' className='imageHeaderLogo' />
        </div>
        <div className="headerContainer">
            <div className="forgotPassHeader">
                <div className="forgotPassHeaderTitle"> Reset your Password </div>
            </div>
            <div className="forgotPassHeaderText"> Enter your email address and we will send you instructions to reset your password </div>
            <div className="inputs">
                <div className="input">
                    <input
                        type='email'
                        placeholder=''
                    />
                    <label for='email'> Email Address </label>
                </div>
            </div>
            <div className="forgotSubmit-container">
                <button
                    className='forgotSubmit'
                > Continue 
                </button>
            </div>
            <div className="return">
                <button className="return-submit" onClick={handleLoginClick}> Click here to return to Login </button>
            </div>
        </div>
        <div className='footer'>
                <a href=''> Terms of use </a>
                |
                <a href=''> Privacy Policy </a>
            </div>
        </>
    )

}

export default Forgotpass;