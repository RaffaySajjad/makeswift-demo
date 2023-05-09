import React from 'react'
import { Icon } from '@trafilea/afrodita-components'

import classes from './styles.module.css'

/**
 * @typedef {{
 *  items: number,
 * }} ShoppingBag
 *
 * @param {ShoppingBag} props
 */

const ShoppingBag = ({ items }) => {
  return (
    <div className={classes.wrapper}>
      <Icon.Navigation.ShoppingBag
        width={1.4}
        height={1.4}
        testId="header-cart-icon"
      />
      {!!items && <span className={classes.headerCartIconItems}>{items}</span>}
    </div>
  )
}

export default ShoppingBag
