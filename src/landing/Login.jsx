import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Login.css';
import Logo from '../assets/logo-dark.png';
import { FaLock, FaLockOpen } from 'react-icons/fa';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleValidation = () => {
        setEmailError('');
        setPasswordError('');

        if (!email) {
            setEmailError('Please enter your email address');
        } else if (!/\S+@\S+\.\S+/.test(email)) { // Basic email validation
            setEmailError('Please enter a valid email address');
        }

        if (!password) {
            setPasswordError('Please input your password');
        }
    };

    const [showPassword, setShowPassword] = useState(false);
    const [iconType, setIconType] = useState(FaLock); //serves as the Initial Icon
    const [isRememberMeChecked, setIsRememberMeChecked] = useState(false);
    const navigate = useNavigate();

    const handleForgotPassClick = () => {
        navigate('/Login/Forgot-Password');
    };

    const handleKeydown = (event) => {
        if(event.key === 'Enter'){
            handleValidation();
            loginSubmit();
        }
    };

    const loginSubmit = async () => {
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));

            const response = await fetch('http://localhost/CareerCompass/backend/login-page/login.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password}),
            });

            const data = await response.json();

            if (data.success) {
                sessionStorage.setItem('user', email);
                navigate('/Welcome');
            } else {
                console.log('Login failed');
                setErrorMsg('Incorrect Email or Password');
            }
        } catch (error) {
            console.error('An error occurred', error);
        }
    };

    return (
        <>
            <div className="container">
            <div className='loginHeader'>
                    <img src={Logo} alt='Logo' className='logo' />
                </div>
                <div className='loginHeader'>
                    <div className='text'> Welcome </div>
                </div>
                <div className='loginHeaderText'> Please fill your detail to log in your account. </div>
                <div className='inputs'>
                    {/* Email Address*/}
                    <div className='input'>
                        <input
                            type='email'
                            placeholder=''
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailError('');
                            }}
                            onKeyDown={handleKeydown}
                        />
                        <label htmlFor='email'> Email Address </label>
                    </div>
                    {emailError && <div className='error-message'>{emailError} </div>}
                    {/* End of Email Address*/}
                    {/* Password */}
                    <div className='input'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder=''
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setPasswordError('');
                            }}
                            onKeyDown={handleKeydown}
                        />
                        <label htmlFor='password'> Password </label>
                        <button
                            className='show-password-button'
                            onClick={() => {
                                setShowPassword(!showPassword);
                                setIconType(showPassword ? FaLock : FaLockOpen); // This will Toggle the Icon
                            }}
                        >
                            <span className='password-icon'>{iconType}</span>
                        </button>
                    </div>
                    {passwordError && <div className="error-message">{passwordError}</div>}
                    {/* End of Password */}
                </div>
                <div className='password'>
                    <div className='remember-me'>
                        <input
                            type='checkbox'
                            id='remember-me'
                            checked={isRememberMeChecked}
                            onChange={(e) => setIsRememberMeChecked(e.target.checked)}
                        />
                        <label htmlFor='remember-me'> Remember me </label>
                    </div>
                    <div className='forgot-password' onClick={handleForgotPassClick}>Forgot Password? </div>
                </div>
                {errorMsg && <div className="loginErrorMsg">{errorMsg}</div>}
                <div className='submit-container'>
                    <button
                        className='submit'
                        onClick={() =>{
                            handleValidation();
                            loginSubmit();
                        }}
                        onKeyDown={handleKeydown}
                    >Log In
                    </button>
                </div>
                <div className='no-account'>
                    <p>Don't have an account? <a href='#'>Sign up</a></p>
                </div>
                <div className='footer'>
                    <a href=''> Terms of use </a>
                    |
                    <a href=''> Privacy Policy </a>
                </div>
            </div>
        </>
    );
};

export default Login;