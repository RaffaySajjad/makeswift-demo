import { useWindowDimensions } from '@trafilea/afrodita-components'
import React from 'react'
import styles from './styles.module.css'

/**
 * @param {{
 *  containerColor?: string
 *  buttonInnerPadding?: string
 *  backgroundColor: string,
 *  buttonText: string,
 *  display: 'flex' | 'none' | 'inline' | 'block' | 'inline-block',
 *  justifyContent: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'initial' | 'inherit',
 *  padding?: string,
 *  ctaLink: string,
 *  showOnlyDevice?: 'mobile' | 'desktop',
 *  containerBackgroundColor?: string,
 * }} props
 */
const CustomCTA = ({
  backgroundColor,
  buttonText,
  buttonInnerPadding,
  display,
  justifyContent,
  padding,
  ctaLink,
  containerColor,
  showOnlyDevice,
  containerBackgroundColor = 'inherit',
}) => {
  const { isMobile } = useWindowDimensions({ mobile: 0, desktop: 650 })

  const shouldShowCTA = () => {
    if (showOnlyDevice === undefined) return true

    return showOnlyDevice === 'mobile' ? isMobile : !isMobile
  }

  if (!shouldShowCTA()) return null

  return (
    <div
      style={{
        display,
        justifyContent,
        padding,
        backgroundColor: containerColor,
      }}
    >
      <a
        href={ctaLink}
        style={{
          background: backgroundColor,
          padding: buttonInnerPadding,
        }}
        className={styles.button}
      >
        <span
          dangerouslySetInnerHTML={{
            __html: buttonText,
          }}
        />
      </a>
    </div>
  )
}

export default CustomCTA
