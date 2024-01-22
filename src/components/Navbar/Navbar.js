import React from "react";
import styles from "./Navbar.module.css";
import logo from "./img/final-topright-logo.png"

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
        <button className={styles.login}>
              Log In
            </button>
        </div>
      </div>
    </nav>
    </>
  );
};
export default Navbar;