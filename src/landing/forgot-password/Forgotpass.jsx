import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// CSS
import './styles/Forgotpassword.css'

// Logo
import Logo from '../../assets/logo-dark.png'


export const Forgotpass = () => {

    // Navigation
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate('/Login');
    };

    // Email Validation
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleValidation = () => {
        setEmailError('');

        if (!email) {
            setEmailError('Please enter your email address');
        } else if (!/\S+@\S+\.\S+/.test(email)) { // Basic email validation
            setEmailError('Please enter a valid email address');
        } else {
            emailSent();
        }
    }

    // Enter Event Key (Press enter)
    const handleKeydown = (event) => {
        if(event.key === 'Enter'){
            handleValidation();
        }
    };

    // Function to send reset email
    const emailSent = async () => {
        try {
            const response = await fetch ('http://localhost/CareerCompass/backend/login-page/forgot-password.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application.json',
                },
                body: JSON.stringify({email}),
            });

            const data = await response.json();

            if (data.success) {
                navigate(`/Login/Forgot-Password/Email-Sent?email=${encodeURIComponent(email)}`);
            } else {

            }
        } catch (error) {
            console.error('An error occured', error);
        }
    };
    

    return (
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
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={handleKeydown}
                        />
                        <label htmlFor='email'> Email Address </label>
                    </div>
                    {emailError && <div className='forgotErrorMsg'>{emailError} </div>}
                </div>
                <div className="forgotSubmit-container">
                    <button
                        className='forgotSubmit'
                        onClick={handleValidation}
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