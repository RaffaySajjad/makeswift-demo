import React from 'react'
import styles from './styles.module.css'
import { ResponsiveImage } from 'frontend-ui'

/**
 * @param {{
 *   desktopMaxWidth?: string
 *   containerStyle?: string;
 *   backgroundColor?: string
 *   mobileBackground?: string;
 *   tabletBackground?: string;
 *   desktopBackground?: string;
 * }} props
 */
const BlogImageBannerSection = ({
  desktopMaxWidth,
  containerStyle,
  mobileBackground,
  tabletBackground,
  desktopBackground,
  backgroundColor = '#ffffff',
}) => {
  return (
    <div
      style={{ backgroundColor }}
      className={styles[containerStyle || 'advertorial']}
    >
      <div className={styles.mobileBanner}>
        <ResponsiveImage src={mobileBackground} alt="mobile-background" />
      </div>
      <div className={styles.tabletBanner}>
        <ResponsiveImage
          style={{ maxWidth: desktopMaxWidth }}
          src={tabletBackground}
          alt="mobile-background"
        />
      </div>
      <div
        style={{ maxWidth: desktopMaxWidth }}
        className={styles.desktopBanner}
      >
        <ResponsiveImage src={desktopBackground} alt="mobile-background" />
      </div>
    </div>
  )
}

export default BlogImageBannerSection
