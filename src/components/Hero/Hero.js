import styles from "./Hero.module.css";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className={`${styles.heroWrapper} center`}>

      <div className={`${styles.heroInner}`}>
        <h2 className={styles.headerText}>
          Create your own Roadmap
        </h2>
        <div className={styles.slogan}>
          <p>Discover your own career path! Input your skills, experience, and our system
            crafts a personalize roadmap just for you.
          </p>
        </div>
        <div className={styles.herocreate}>
          <Link to="Login" className={styles.herologin}>
            CREATE ROADMAP
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;
