import React, { useState, useEffect, useCallback } from "react";
import { useCartActions, useCartState } from "frontend-checkout";
import styles from "./styles.module.css";
import HeaderLogo from "../HeaderLogo";
import HeaderMainNav from "../HeaderMainNav";
import { getItemQuantity } from "../UtilsObjectProperties";
import dynamic from "next/dynamic";

const ShoppingBag = dynamic(() => import("../ShoppingBag"), {
  ssr: false,
});
const HeaderSecondaryNav = dynamic(() => import("../HeaderSecondaryNav"), {
  ssr: false,
});

/**
 * @typedef { import("lib/types").Menu } MenuType
 * @typedef { import("lib/types").CategoryMenuLink } CategoryMenuLink
 */

/**
 * @typedef {{
 *  mainMenu: MenuType,
 *  secondaryMenu: MenuType,
 * }} HeaderProps
 *
 * @param { HeaderProps } props
 */
const Header = ({ mainMenu, secondaryMenu }) => {
  const { showCart } = useCartActions();
  const { items } = useCartState();
  const [cartItemsQuantity, setCartItemsQuantity] = useState(0);
  useEffect(() => {
    const quantityCartItems = getItemQuantity(items);
    setCartItemsQuantity(quantityCartItems);
  }, [items]);
  const openSideCart = useCallback(() => {
    showCart();
  }, []);
  return (
    <div className={styles.header} data-show="desktop">
      <div className={`${styles.container} ${styles.wrapper}`}>
        <div className={styles.headerGrid}>
          <div className={`${styles.headerColumn} ${styles.headerColumn2}`}>
            <HeaderLogo />
          </div>
          <div className={`${styles.headerColumn} ${styles.headerColumn8}`}>
            <div className={styles.headerMainNav}>
              <HeaderMainNav menu={mainMenu} />
            </div>
          </div>
          <div className={`${styles.headerColumn} ${styles.headerColumn2}`}>
            <div className={styles.headerSecondaryNav}>
              <HeaderSecondaryNav menu={secondaryMenu} />
              <div className={styles.headerList}>
                <div className={styles.headerCartIcon}>
                  <button
                    className={styles.headerCartIconButton}
                    onClick={openSideCart}>
                    <ShoppingBag items={cartItemsQuantity} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
