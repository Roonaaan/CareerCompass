import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// CSS
import './styles/Forgotpassword.css' 

// Logo
import Logo from '../../assets/logo-dark.png'

const Forgotpassmessage = () => {
  
  return (
    <>
      <div className="imageHeader">
        <img src={Logo} alt='Logo' className='imageHeaderLogo' />
      </div>
      <div className="headerContainer">
        <div className="forgotPassMsgHeader">
          <FontAwesomeIcon icon={faEnvelope} className="mail-icon" />
          <div className="forgotPassMsgTitle"> Check your Email </div>
        </div>
        <div className="forgotPassMsgText"> Please check your email (email address here) for instructions to reset your password </div>
        <div className="forgotSubmit-container">
          <button
            className='forgotSubmit'
          > Resend Email
          </button>
        </div>
        <div className="forgotPassMsg"> Did not receive it yet, click the button to resend it </div>
      </div>
      <div className='footer'>
        <a href=''> Terms of use </a>
        |
        <a href=''> Privacy Policy </a>
      </div>
    </>
  )
}

export default Forgotpassmessage;
