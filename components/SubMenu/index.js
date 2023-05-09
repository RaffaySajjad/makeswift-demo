import React, { useState } from 'react'
import { Text } from '@trafilea/afrodita-components'
import { ResponsiveImage } from 'frontend-ui'
import shapermint from '@trafilea/afrodita-components/build/theme/shapermint.theme'
import styles from './styles.module.css'

/**
 * @typedef { import("lib/types").MenuLink } MenuLink
 */

/**
 * @typedef {{
 *  menuLink: MenuLink,
 *  renderImage: boolean,
 * }} SubMenuProps
 *
 * @param { SubMenuProps } props
 */
const SubMenu = ({ menuLink, renderImage }) => {
  const { label, subMenuLinks, externalLink, image, name, slug } = menuLink
  const [hoverImage, setHoverImage] = useState('')

  return (
    <div className={`${styles.subMenuContainer}`}>
      <div>
        <span className={styles.subMenuTitle}>{label}</span>
        <div>
          {subMenuLinks.map(subMenu => (
            <RenderSubMenuOptions
              key={subMenu?.name}
              subMenu={subMenu}
              setHoverImage={setHoverImage}
              renderImage={renderImage}
            />
          ))}
        </div>
      </div>
      {renderImage && (
        <a className={styles.collectionLink} href={externalLink || slug}>
          <ResponsiveImage
            className={styles.menuImage}
            src={hoverImage || image}
            alt={name}
          />
          <div className={styles.collectionButton}>Explore Collection</div>
        </a>
      )}
    </div>
  )
}

/**
 * @param {{
 * subMenu: MenuLink
 * setHoverImage: React.Dispatch<React.SetStateAction<string>>
 * renderImage: boolean
 * }} props
 */
function RenderSubMenuOptions({ subMenu, setHoverImage, renderImage }) {
  const handleOptionHover = optionImage => {
    if (renderImage) {
      setHoverImage(optionImage)
    }
  }

  return (
    <div
      onMouseOver={() => handleOptionHover(subMenu.image)}
      onMouseLeave={() => handleOptionHover('')}
      className={styles.subMenuOption}
    >
      <Text
        variant="link"
        size="small"
        href={subMenu.externalLink || subMenu.slug}
        style={
          subMenu.highlighted
            ? {
                color: shapermint.colors.semantic.urgent.color,
                fontWeight: 600,
              }
            : undefined
        }
      >
        {subMenu.label}
      </Text>
    </div>
  )
}

export default SubMenu
