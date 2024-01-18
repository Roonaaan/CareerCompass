import React from "react";
import styles from "./Navbar.module.css";
import logo from "./final-topright-logo.png"

const Navbar = ({ hamActive, setHamActive }) => {
  const Logo = logo;
  const handleClick = () => {
    setHamActive(!hamActive);
  };

  return (
    <nav className={`${styles.navbarWrapper} center`}>
      <div className={`${styles.navbarInner} center`}>
        <button
          className={`${styles.hamburger} ${hamActive && styles.active}`}
          onClick={handleClick}
        >
          <span className={styles.hamburgerLines}></span>
        </button>
        <div className={`${styles.navLeft}`}>
          <img src={Logo} alt="logo" className={styles.brand} />
        </div>
        <div className={`${styles.navRight} center`}>
        <a href="/" className={styles.login}>
              Log in
            </a>
            <button className={styles.signup}>Sign Up</button>
          <div>
            
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
