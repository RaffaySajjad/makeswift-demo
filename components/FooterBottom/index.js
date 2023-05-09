import React from 'react'
import { Text, useWindowDimensions } from '@trafilea/afrodita-components'
import styles from './styles.module.css'
import shapermint from '@trafilea/afrodita-components/build/theme/shapermint.theme'

/**
 * @typedef { import("lib/types").Menu } MenuType
 * @typedef { import("lib/types").Microcopy } MicrocopyType
 */

/**
 * @typedef {{
 *  menu: MenuType,
 *  showCopyright: boolean,
 *  copyrightSymbol: MicrocopyType,
 *  copyrightText: MicrocopyType
 * }} FooterBottomProps
 *
 * @param { FooterBottomProps } props
 */
const FooterBottom = ({
  menu,
  showCopyright,
  copyrightSymbol,
  copyrightText,
}) => {
  const { isMobile } = useWindowDimensions(shapermint.mediaQueries)
  const textSize = { fontSize: '14px', lineHeight: '22px' }

  /**
   *
   * @param {MenuType} menu
   */
  const renderSecondaryFooter = menu => {
    return menu.menuLinks.map((menuLink, index) => {
      return (
        <li key={index} className={styles.listItem}>
          <Text
            variant="link"
            href={menuLink.externalLink || menuLink.slug}
            className={styles.bottomMenuLink}
            size="regular"
            style={textSize}
          >
            {menuLink.label}
          </Text>
        </li>
      )
    })
  }

  return (
    <div className={styles.secondaryFooter}>
      <ul className={`${styles.list} ${styles.bottomMenu}`}>
        {showCopyright && (
          <li className={styles.listItem}>
            <Text
              variant="body"
              size="regular"
              style={
                isMobile
                  ? {
                      ...textSize,
                      padding: '2px 20px',
                      display: 'inline-block',
                    }
                  : {
                      ...textSize,
                      padding: '8px 20px',
                      display: 'inline-block',
                    }
              }
            >
              {copyrightSymbol.value} {new Date().getFullYear()}{' '}
              {copyrightText.value}
            </Text>
          </li>
        )}
        {renderSecondaryFooter(menu)}
      </ul>
    </div>
  )
}

export default FooterBottom
