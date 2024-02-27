import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// CSS
import './styles/Login.css'

// Images and Logo
import Logo from '../assets/logo-dark.png'
import { FaLock, FaLockOpen } from 'react-icons/fa'

export const Login = () => {

    // Email and Password Validation
    const naviget = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [error, setError] = useState('');
    const [msg, setMsg] = useState('');

    useEffect(() => {
        setTimeout(function(){
            setMsg('');
        }, 5000);
    }, [msg]);

    const handleInputChange = (e, type) => {
        switch (type) {
            case 'email':
                setEmailError('');
                setEmail(e.target.value);
                if (e.target.value === '') {
                    setEmailError('Email Address has left blank');
                }
                break;
            case 'password':
                setPasswordError('');
                setPassword(e.target.value);
                if (e.target.value === '') {
                    setPasswordError('Password has left blank');
                }
                break;
            default:
        }
    }

    function loginSubmit(){ //PHP to ReactJS Connection
        if(email !== '' && password !== ''){
            var url = "http://localhost/CareerCompass/backend/login-page/login.php"; //Login.php folder location
            var headers = {
                "Accept": "application/json",
                "Content-Type": "application.json"
            };
            var Data = {
                email: email,
                password: password,
            };
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(Data)
            }).then((response) => response.json())
            .then((response) => {
                if(response[0].result === "Incorrect Email Address" || response[0].result === "Incorrect Password") {
                    setError(response[0].result);
                } 
                else {
                    setMsg(response[0].result);
                    setTimeout(function(){
                        naviget('/Welcome');
                    }, 5000);
                }                
            }).catch((err) => {
                setError(err);
                console.log(err);
            })
        } else {
            setError(''); {/*All field are required*/}
        }
    }

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

    // Enter Event Key (press enter)
    const handleKeydown = (event) => {
        if(event.key === 'Enter'){
            handleValidation();
            loginSubmit();
        }
    };

    // Forgot Password
    const navigate = useNavigate();
    const handleForgotPassClick = () => {
        navigate('/Login/Forgot-Password')
    }
    

    return (
        <>
            
            <div className='container'>
            <div className='loginHeader'>
                <img src={Logo} alt='Logo' className='logo' />
            </div>
                <div className='loginHeader'>
                    <div className='text'> WELCOME </div>
                </div>
                <div className='loginHeaderText'> Please fill your detail to log in your account. </div>
                <div className='error-message'>
                    <p>
                        {
                            error !== '' ?
                            <span>{error}</span> :
                            <span>{msg}</span>
                        }
                    </p>
                </div>
                <div className='inputs'>
                    {/* Email Address*/}
                    <div className='input'>
                        <input
                            type='email'
                            placeholder=''
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value),
                                handleInputChange(e, 'email')
                            }}
                            onKeyDown={handleKeydown}
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
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value),
                                handleInputChange(e, 'password')
                            }}
                            onKeyDown={handleKeydown}
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
                    <div className='forgot-password' onClick={handleForgotPassClick}>Forgot Password? </div>
                </div>

                
                <div className='submit-container'>
                    <button 
                        className='submit' 
                        onClick={() =>{
                            handleValidation();
                            loginSubmit();
                        }}
                        onKeyDown={handleKeydown}
                        > LOG IN
                    </button>
                </div>
                <div className='no-account'>
                    <p>Don't have an account? <a href='#'>Sign up</a></p>                   
                </div>

                <div className='footer'>
                <a className='termsPolicy' href=''> Terms of use </a>
                |
                <a className='termsPolicy' href=''> Privacy Policy </a>
            </div>           
            </div>

            

            
        </>
    )
}

export default Login;