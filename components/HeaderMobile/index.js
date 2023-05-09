import React, { useState, useEffect, useCallback } from "react";
import { useCartActions, useCartState } from "frontend-checkout";
import {
  Text,
  useWindowDimensions,
  Icon,
  Drawer,
} from "@trafilea/afrodita-components";
import { usePreventBodyScroll } from "../UtilsBrowserDom";
import { getItemQuantity } from "../UtilsObjectProperties";
import HeaderLogo from "../HeaderLogo";
import HeaderMainNav from "../HeaderMainNav";
import HeaderSecondaryNav from "../HeaderSecondaryNav";
import shapermint from "@trafilea/afrodita-../build/theme/shapermint.theme";
import styles from "./styles.module.css";
import dynamic from "next/dynamic";

const MobileMenu = dynamic(() => import("../MobileMenu"), { ssr: false });
const ShoppingBag = dynamic(() => import("../ShoppingBag"), { ssr: false });

/**
 * @typedef { import("lib/types").Menu } MenuType
 * @typedef { import("lib/types").CategoryMenuLink } CategoryMenuLink
 */

/**
 * @typedef {{
 *  mainMenu: MenuType,
 *  secondaryMenu: MenuType,
 *  socialsMenu: MenuType,
 *  categoryMenuLinks: CategoryMenuLink[],
 * }} HeaderProps
 *
 * @param { HeaderProps } props
 */
const Header = ({
  mainMenu,
  secondaryMenu,
  socialsMenu,
  categoryMenuLinks,
}) => {
  const { showCart } = useCartActions();
  const { items } = useCartState();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItemsQuantity, setCartItemsQuantity] = useState(0);
  const { isMobile } = useWindowDimensions(shapermint.mediaQueries);

  usePreventBodyScroll(isMobile && isMobileMenuOpen);

  useEffect(() => {
    const quantityCartItems = getItemQuantity(items);

    setCartItemsQuantity(quantityCartItems);
  }, [items]);

  const toogleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openSideCart = useCallback(() => {
    showCart();
  }, []);

  return (
    <div className={styles.header} data-show="mobile">
      <div className={`${styles.container} ${styles.wrapper}`}>
        <div className={styles.headerGrid}>
          <div className={`${styles.headerColumn} ${styles.headerColumn2}`}>
            <Text variant="link" onClick={toogleMobileMenu}>
              <Icon.Navigation.Hamburger width={1.7} height={1.2} />
            </Text>
          </div>
          <div className={`${styles.headerColumn} ${styles.headerColumn8}`}>
            <div className={styles.headerMainNav} data-show="max-1200">
              <HeaderLogo />
            </div>
            <div className={styles.headerMainNav} data-show="min-1201">
              <HeaderMainNav menu={mainMenu} />
            </div>
          </div>
          <div className={`${styles.headerColumn} ${styles.headerColumn2}`}>
            <div className={styles.headerSecondaryNav}>
              <HeaderSecondaryNav menu={secondaryMenu} />
              <div className={styles.headerList}>
                <div className={styles.headerCartIcon}>
                  <button
                    style={{
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                      margin: 0,
                    }}
                    onClick={openSideCart}>
                    <ShoppingBag items={cartItemsQuantity} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Drawer
        backdropColor="var(--colors-shades-550-color)"
        position="left"
        width="100%"
        isOpen={isMobileMenuOpen}>
        <MobileMenu
          menu={mainMenu}
          secondaryMenu={secondaryMenu}
          socialsMenu={socialsMenu}
          onCloseClick={toogleMobileMenu}
          categoryMenuLinks={categoryMenuLinks}
        />
      </Drawer>
    </div>
  );
};

export default Header;
