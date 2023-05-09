import React, { useState } from 'react'
import { ButtonSecondary, ComponentSize } from '@trafilea/afrodita-components'
import { ResponsiveImage } from 'frontend-ui'
import styles from './styles.module.css'

/**
 * @param {{
 *  title?: string,
 *  ctaLink?: string,
 *  ctaLink2?: string,
 *  linkText?: string,
 *  icon?: string,
 * }} props
 */
const LandingHeaderCTA = ({
  title = 'PAGE TITLE',
  ctaLink,
  ctaLink2,
  linkText,
  icon,
}) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className={styles.section}>
      {showMenu && (
        <div className={styles.menuBar}>
          <div
            className={styles.menuRow}
            onClick={() => (window.location.href = ctaLink)}
          >
            <div className={styles.hyperlink}>{linkText}</div>
            <ResponsiveImage
              className={styles.ctaIcon}
              src={icon}
              alt="banner"
            />
          </div>
        </div>
      )}
      <div
        onClick={() => setShowMenu(!showMenu)}
        className={styles.hamburgerMenu}
      >
        <ResponsiveImage
          className={styles.image}
          src="https://cdn.shopify.com/s/files/1/2679/8624/files/Hamburger_Menu.png?v=1664218286"
          alt="Menu"
        />
      </div>
      <div className={styles.title}>
        <ResponsiveImage
          alt=""
          src="https://cdn.shopify.com/s/files/1/0021/4889/2732/files/lp-nav-logo.svg"
          className={styles.logo}
        />
        <div className={styles.authorName}>&nbsp;{title}</div>
      </div>
      <div className={styles.cta}>
        <ButtonSecondary
          onClick={() => window.location.replace(ctaLink2)}
          size={ComponentSize.Medium}
          text="SHOP NOW"
          type="button"
        />
      </div>
    </div>
  )
}

export default LandingHeaderCTA
