import { Fragment } from "react";
import styles from "./Features.module.css";
import { features } from "../../constants/features";
import feature_1 from "src/assets/img/feature1.jpg"

const Features = () => {
  return (
    <div className={`${styles.featuresWrapper} center`}>
      <div className={styles.featuresHeading}>
        <p>Main Features</p>        
        <p className={styles.featureDesc}> 
          We aim to provide a guide for employees within this company to achieve your
          intended roles with the assistance of Artificial Inteligence(AI)
        </p>
      </div>
      <div className={`${styles.featuresListWrapper} center`}>
        <div className={`${styles.featuresList} center`}>
          {features.map(({ feature, description, image }) => {
            return (
              <div className={`${styles.featureDiv} center`}>
                <Fragment>
                  <div className={styles.feature}>
                    <p>{feature}</p>
                  </div>
                  <div className={styles.featureDescription}>
                    <p>{description}</p>
                  </div>
                  <div>
                    <img className={styles.featureImg} src={image} alt="img" />
                  </div>
                </Fragment>
              </div>
            );
          })}
        </div>
      </div>
      <button className={styles.shopBtn}>Start shopping</button>
    </div>
  );
};

export default Features;
