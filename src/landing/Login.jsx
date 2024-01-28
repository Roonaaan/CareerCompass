import React from 'react'

// CSS
import './styles/Login.css'

// Images
import Logo from '../assets/logo-dark.png'

export const Login = () => {

    return (
        <>

            <div className='header'>
                <img src={Logo} alt='Logo' className='logo' />
            </div>
            <div className='container'>
                <div className='header'>
                    <div className='text'> Log In </div>
                </div>
                <div className='inputs'>
                    <div className='input'>
                        <input type='email' placeholder='Email Address' />
                    </div>
                    <div className='input'>
                        <input type='password' placeholder='Password' />
                    </div>
                </div>
                <div className='forgot-password'>Forgot Password? <span>Click Here!</span> </div>
                <div className='submit-container'>
                    <div className='submit'>Log In</div>
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