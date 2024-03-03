import React from 'react'
import { useLocation } from 'react-router-dom'

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

// CSS
import './styles/Forgotpassword.css' 

// Logo
import Logo from '../../assets/login/logo-dark.png'

const Forgotpassmessage = () => {
  
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const email = params.get('email');

  const resendEmail = async () => {
    try {
      const response = await fetch ('http://localhost/CareerCompass/backend/login-page/resend-email.php', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application.json',
        },
        body: JSON.stringify({email}),
      });

      const data = await response.json();

      if (data.success) {
        console.log('Email resent successfully');
      } else {
        console.error('Failed to resend email');
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
        <div className="forgotPassMsgHeader">
          <FontAwesomeIcon icon={faEnvelope} className="mail-icon" />
          <div className="forgotPassMsgTitle"> Check your Email </div>
        </div>
        <div className="forgotPassMsgText"> Please check your email {email} for instructions to reset your password </div>
        <div className="forgotSubmit-container">
          <button
            className='forgotSubmit'
            onClick={resendEmail}
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
