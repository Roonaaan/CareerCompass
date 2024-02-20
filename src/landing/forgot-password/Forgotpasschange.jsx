import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// CSS
import './styles/Forgotpassword.css'

// Logo
import Logo from '../../assets/logo-dark.png'

export const Forgotpasschange = () => {

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handlePasswordValidation = () => {
        setPasswordError('');

        if (!password) {
            setPasswordError('Please input your New Password')
        } else if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
        } else if (!/[A-Z]/.test(password)) {
            setPasswordError('Password must contain at least one uppercase letter');
        } else if (!/[a-z]/.test(password)) {
            setPasswordError('Password must contain at least one lowercase letter');
        } else if (!/[0-9]/.test(password)) {
            setPasswordError('Password must contain at least one number');
        } else if (!/[^\w\s]/.test(password)) {
            setPasswordError('Password must contain at least one special character');
        } 
    }

    return (
        <>
            <div className="imageHeader">
                <img src={Logo} alt='Logo' className='imageHeaderLogo' />
            </div>
            <div className="headerContainer">
                <div className="forgotPassHeader">
                    <div className="forgotPassHeaderTitle"> Change your Password </div>
                </div>
                <div className="forgotPassHeaderText"> Enter your new password below </div>
                <div className="inputs">
                    <div className="input">
                        <input
                            type='password'
                            placeholder=''
                        />
                        <label for='password'> New Password </label>
                    </div>
                    <div className="input">
                        <input
                            type='password'
                            placeholder=''
                        />
                        <label for='password'> Confirm New Password </label>
                    </div>
                    {passwordError && <div className="error-message">{passwordError}</div>}
                </div>
                <div className='submit-container'>
                    <button 
                        className='submit' 
                        onClick={() =>{
                            handlePasswordValidation();
                        }}
                        > Confirm Password
                    </button>
                </div>
            </div>
        </>
    )
}

export default Forgotpasschange;