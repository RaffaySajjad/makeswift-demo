import React from "react";
import styles from "./styles.module.css";

/**
 * @typedef {{
 *   basicArray?: any[]
 *   mobileBackground?: string
 *   tabletBackground?: string
 *   desktopBackground?: string
 *   bannerLink?: string
 *   background?: string
 * }} ImageBannerProps
 * @param {ImageBannerProps} props
 */
const ImageBanner = ({
  basicArray,
  mobileBackground,
  desktopBackground,
  bannerLink,
}) => {
  console.log(basicArray);
  return (
    <div className={styles.ImageBannerSectionContainer}>
      <a href={bannerLink}>
        <img
          className={styles.desktop}
          src={desktopBackground}
          alt={desktopBackground}
        />
        <img
          className={styles.mobile}
          src={mobileBackground}
          alt={mobileBackground}
        />
      </a>
    </div>
  );
};

/**
 * @param {ImageBannerProps} allProps
 */
const ImageBannerSection = (props) => <ImageBanner {...props} />;

export default ImageBannerSection;
