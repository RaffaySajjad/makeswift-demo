import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

/**
 * @typedef {{
 * buttonText: string,
 * buttonCta: string,
 * startingPosition?: number,
 * endingPosition?: number,
 * position?: string,
 * }} props
 *
 * @param { props } props
 */
const StickyCTAMobile = ({
  buttonText,
  buttonCta,
  position = '0',
  startingPosition = 300,
  endingPosition = 3200,
}) => {
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScroll = () => {
    const position = window.scrollY

    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      style={{
        display:
          scrollPosition >= startingPosition && scrollPosition < endingPosition
            ? 'block'
            : 'none',
        bottom: position,
      }}
      data-show="mobile"
      className={styles.stickyBanner}
    >
      <a href={buttonCta}>{buttonText}</a>
    </div>
  )
}

export default StickyCTAMobile
