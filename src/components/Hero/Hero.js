import styles from "./Hero.module.css";

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
          <a href="/" className={styles.herologin}>
            CREATE ROADMAP
          </a>
        </div>
      </div>
    </div>
  );
};
export default Hero;
