import React, { useState } from 'react'

// CSS
import './styles/Login.css'

// Images and Logo
import Logo from '../assets/logo-dark.png'
import { FaLock, FaLockOpen } from 'react-icons/fa'

export const Login = () => {

    // Email and Password Validation
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

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

        {/* Password Validation
        
            else if (password.length < 8) {
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
        */}
    };

    // Show Password
    const [showPassword, setShowPassword] = useState(false);
    const [iconType, setIconType] = useState(FaLock); //serves as the Initial Icon

    // Remember Me
    const [isRememberMeChecked, setIsRememberMeChecked] = useState(false);

    return (
        <>

            <div className='header'>
                <img src={Logo} alt='Logo' className='logo' />
            </div>
            <div className='container'>
                <div className='header'>
                    <div className='text'> Log In </div>
                </div>
                <div className='loginHeaderText'> Please fill your detail to log in your account. </div>
                <div className='inputs'>
                    {/* Email Address*/}
                    <div className='input'>
                        <input
                            type='email'
                            placeholder=''
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label for='email'> Email Address </label>
                    </div>
                    {emailError && <div className='error-message'>{emailError} </div>}
                    {/* End of Email Address*/}
                    {/* Password */}
                    <div className='input'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder=''
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />
                        <label for='password'> Password </label>
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
                    <div className='forgot-password'>Forgot Password? </div>
                </div>
                <div className='submit-container'>
                    <button className='submit' onClick={handleValidation}>Log In</button>
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

export default Login;