import {
  ButtonPrimary,
  ButtonSecondary,
  ComponentSize,
} from '@trafilea/afrodita-components'
import { ResponsiveImage } from 'frontend-ui'
import React from 'react'
import styles from './styles.module.css'

/**
 * @typedef {{
 *  title?: string
 *  backgroundColor?: string
 *  image?: string,
 *  buttonVariant?: 'primary' | 'secondary',
 *  text?: string,
 *  cta?: string,
 *  isImageBottom?: boolean
 * }} props
 *
 * @param { props } props
 */

const BUTTON_TAG = {
  primary: ButtonPrimary,
  secondary: ButtonSecondary,
}

const LandingHeroBannerMobile = ({
  isImageBottom = false,
  title,
  backgroundColor,
  image,
  buttonVariant = 'primary',
  text,
  cta,
}) => {
  const Button = buttonVariant && BUTTON_TAG[buttonVariant]

  const _getImageContainer = () => {
    return (
      <div className={styles.imageContainer}>
        <ResponsiveImage alt="" src={image} />
      </div>
    )
  }

  return (
    <div
      data-show="mobile"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <div className={styles.titleContainer}>
        <h2>{title}</h2>
      </div>
      {!isImageBottom && _getImageContainer()}
      <div className={styles.textContainer}>
        <span
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
      </div>
      <div className={styles.ctaContainer}>
        <Button
          text="SHOP NOW"
          size={ComponentSize.Medium}
          onClick={() => (window.location.href = cta)}
        />
      </div>
      {isImageBottom && _getImageContainer()}
    </div>
  )
}

export default LandingHeroBannerMobile
