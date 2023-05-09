import React from 'react'
import styles from './styles.module.css'

/**
 * @typedef {{
 * textDesktop: string,
 * textMobile: string,
 * backgroundColor ?: string
 * styleContainer ?: string
 * mobileFontSize?: string
 * desktopFontSize?: string
 * mobileLineHeight?: string
 * desktopLineHeight?: string
 * }} props
 *
 * @param {props} props
 */
const TextDescription = ({
  textDesktop,
  textMobile,
  styleContainer = 'advertorial',
  mobileFontSize,
  desktopFontSize,
  mobileLineHeight,
  desktopLineHeight,
  backgroundColor = 'inherit',
}) => {
  return (
    <div
      style={{ backgroundColor: backgroundColor }}
      className={`${styles[styleContainer]}`}
    >
      <div data-show="desktop" className={styles.desktopWrap}>
        <div
          style={{
            fontSize: desktopFontSize || '20px',
            lineHeight: desktopLineHeight || '34px',
          }}
          dangerouslySetInnerHTML={{
            __html: textDesktop,
          }}
        />
      </div>

      <div data-show="mobile" className={styles.mobileWrap}>
        <div
          style={{
            fontSize: mobileFontSize || '14px',
            lineHeight: mobileLineHeight || '22px',
          }}
          dangerouslySetInnerHTML={{
            __html: textMobile,
          }}
        />
      </div>
    </div>
  )
}

export default TextDescription
