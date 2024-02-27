import React, { useState } from "react";

// CSS
import './styles/Forgotpassword.css'

// Logo
import Logo from '../../assets/logo-dark.png'

export const Forgotpasschange = () => {

    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleChangePassword = (e) => {
        setNewPassword(e.target.value);
    }

    const handleChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleSubmit = () => {
        if (newPassword.length < 8) {
            setPasswordError('Password must be at least 8 characters long');
        } else if (!/[A-Z]/.test(newPassword)) {
            setPasswordError('Password must contain at least one uppercase letter');
        } else if (!/[a-z]/.test(newPassword)) {
            setPasswordError('Password must contain at least one lowercase letter');
        } else if (!/[0-9]/.test(newPassword)) {
            setPasswordError('Password must contain at least one number');
        } else if (!/[^\w\s]/.test(newPassword)) {
            setPasswordError('Password must contain at least one special character');
        } else if (newPassword !== confirmPassword) {
            setPasswordError('Passwords do not match')
        } else {
            setPasswordError('');
        }

        if (newPassword.length >= 8 && /[A-Z]/.test(newPassword) && /[a-z]/.test(newPassword) && /[0-9]/.test(newPassword) && /[^\w\s]/.test(newPassword) && newPassword === confirmPassword) {

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
                        <label htmlFor='password'> Current Password </label>
                    </div>
                    <div className="input">
                        <input
                            type='text'
                            placeholder=''
                            value={newPassword}
                            onChange={handleChangePassword}
                        />
                        <label htmlFor='password'> New Password </label>
                    </div>
                    <div className="input">
                        <input
                            type='text'
                            placeholder=''
                            value={confirmPassword}
                            onChange={handleChangeConfirmPassword}
                        />
                        <label htmlFor='password'> Confirm New Password </label>
                    </div>
                </div>
                {passwordError && <div className="changePassErrorMsg">{passwordError}</div>}
                {confirmPasswordError && <div className="changePassErrorMsg">{confirmPasswordError}</div>}
                <div className='changePassSubmit'>
                    <button
                        className='submit'
                        onClick={handleSubmit}
                    > Change Password
                    </button>
                </div>
            </div>
        </>
    )
}

export default Forgotpasschange;