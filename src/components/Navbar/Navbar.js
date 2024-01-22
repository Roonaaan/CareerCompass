import React from "react";
import styles from "./Navbar.module.css";
import logo from "./img/final-topright-logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
  const Logo = logo;


  return (
    <>
    <nav className={`${styles.navbarWrapper} center`}>
      <div className={`${styles.navbarInner} center`}>
        <div className={`${styles.navLeft}`}>
        <img src={Logo} alt="logo" className={styles.brand} />
        </div>
        <div className={`${styles.navRight} center`}>
        <Link to="Login" className={styles.login}>
              Log In
            </Link>
        </div>
      </div>
    </nav>
    </>
  );
};
export default Navbar;