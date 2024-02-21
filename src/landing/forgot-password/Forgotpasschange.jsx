import React from "react";

// CSS
import './styles/Forgotpassword.css'

// Logo
import Logo from '../../assets/logo-dark.png'

export const Forgotpasschange = () => {

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
                        <label for='password'> Current Password </label>
                    </div>
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
                </div>
                <div className='submit-container'>
                    <button
                        className='submit'
                    > Change Password
                    </button>
                </div>
            </div>
        </>
    )
}

export default Forgotpasschange;