import React, { useState } from "react";
import { Text, Icon } from "@trafilea/afrodita-components";
import { ResponsiveImage } from "frontend-ui";
import HeaderLogo from "../HeaderLogo";
import SubMenuMobile from "../SubMenuMobile";
import CategorySelector from "../CategorySelector";
import styles from "./styles.module.css";

/**
 * @typedef { import("lib/types").Menu } MenuType
 * @typedef { import("lib/types").MenuLink } MenuLink
 * @typedef { import("lib/types").CategoryMenuLink } CategoryMenuLink
 */

/**
 * @typedef {{
 *  menu: MenuType,
 *  secondaryMenu: MenuType,
 *  socialsMenu: MenuType,
 *  onCloseClick: () => void,
 *  categoryMenuLinks: CategoryMenuLink[],
 * }} HeaderMainNavProps
 *
 * @param { HeaderMainNavProps } props
 */
const MobileMenu = ({
  menu,
  secondaryMenu,
  socialsMenu,
  onCloseClick,
  categoryMenuLinks,
}) => {
  const [currentMenu, setCurrentMenu] = useState(null);
  /**
   * @type {{
   *    title: string,
   *    src: string,
   *    redirectUrl: string,
   * }[]}
   */
  const categories = categoryMenuLinks.map(({ name, link, imageUrl }) => ({
    title: name,
    src: imageUrl,
    redirectUrl: link,
  }));

  const handleClickMenu = (event, menuLink) => {
    if (menuLink.subMenuLinks && menuLink.subMenuLinks.length > 0) {
      if (event.cancelable) {
        event.preventDefault();
      }
      event.stopPropagation();
      setCurrentMenu(menuLink);
    }
  };

  /**
   * @param {MenuLink[]} menuLinks
   */
  const renderMainMenuLinks = (menuLinks) =>
    menuLinks.map((menuLink, index) =>
      menuLink.label
        ? renderMainMenuLink(menuLink, index)
        : renderBannerLink(menuLink)
    );

  /**
   * @param {MenuLink} menuLink
   */
  const renderMainMenuLink = (menuLink, index) => (
    <li
      key={index}
      className={styles.mobileMenuListItem}
      style={
        menuLink.backgroundFilled
          ? {
              background: "var(--colors-pallete-primary-soft-color)",
            }
          : undefined
      }>
      <Text
        variant="link"
        size="regular"
        weight="demi"
        href={menuLink.externalLink || menuLink.slug}
        className={styles.mobileMenuMainNavLink}
        onClick={(event) => handleClickMenu(event, menuLink)}
        style={
          menuLink.highlighted || menuLink.backgroundFilled
            ? { color: "var(--colors-semantic-urgent-color)" }
            : undefined
        }>
        {menuLink.image && (
          <div className={styles.menuListItemImgContainer}>
            <ResponsiveImage
              className={styles.menuListItemImg}
              src={menuLink.image}
              alt={menuLink.name}
            />
          </div>
        )}
        {menuLink.label}
        {menuLink.subMenuLinks && !!menuLink.subMenuLinks.length && (
          <div className={styles.navigationArrow}>
            <Icon.Arrows.ChevronRightVariant width={1.5} height={1.5} />
          </div>
        )}
      </Text>
    </li>
  );

  /**
   * @param {MenuLink} menuLink
   */
  const renderBannerLink = (menuLink) => (
    <li key={menuLink.name}>
      <Text
        variant="link"
        size="regular"
        weight="demi"
        href={menuLink.externalLink || menuLink.slug}
        onClick={(event) => handleClickMenu(event, menuLink)}>
        {menuLink.image && (
          <ResponsiveImage
            className={styles.bannerImg}
            src={menuLink.image}
            alt={menuLink.name}
          />
        )}
      </Text>
    </li>
  );

  return (
    <div className={styles.mobileMenu}>
      <div className={styles.mobileMenuHeader}>
        <div className={styles.container}>
          <div className={styles.headerGrid}>
            <div
              className={`${styles.headerColumn} ${styles.headerColumn2}`}></div>
            <div className={`${styles.headerColumn} ${styles.headerColumn8}`}>
              <div className={styles.headerMainNav}>
                <HeaderLogo />
              </div>
            </div>
            <div className={`${styles.headerColumn} ${styles.headerColumn2}`}>
              <div className={styles.headerSecondaryNav}>
                <div className={styles.headerList}>
                  <div className={styles.headerListItem}>
                    <Text
                      variant="link"
                      onClick={() => onCloseClick()}
                      style={{ padding: "7.5px 0 7.5px 7.5px" }}>
                      <Icon.Actions.Close width={1.1} height={1.1} />
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobileMenuBody}>
        {!currentMenu && (
          <div className={`${styles.container} ${styles.wrapper}`}>
            <div className={styles.mobileMenuMainNav}>
              <ul className={styles.mobileMenuList}>
                <CategorySelector categories={categories} />
                {renderMainMenuLinks(menu.menuLinks)}
              </ul>
            </div>
          </div>
        )}
        {currentMenu && (
          <SubMenuMobile
            subMenuMobile={currentMenu}
            setCurrentMenu={setCurrentMenu}
          />
        )}
        <SecondaryMenuOptions secondaryMenu={secondaryMenu} />
        <SocialLinks socialsMenu={socialsMenu} />
      </div>
    </div>
  );
};

/**
 * @param {{socialsMenu: MenuType}} props
 */
function SocialLinks({ socialsMenu }) {
  return (
    <div className={styles.socialLinks}>
      <Text
        variant="link"
        href={
          socialsMenu.menuLinks.find(({ slug }) => slug === "social-instagram")
            ?.externalLink
        }
        style={{ padding: "15px", display: "inline-block" }}>
        <Icon.SocialMedia.Instagram width={1} height={1.15} />
      </Text>
      <Text
        variant="link"
        href={
          socialsMenu.menuLinks.find(({ slug }) => slug === "social-facebook")
            ?.externalLink
        }
        style={{ padding: "15px", display: "inline-block" }}>
        <Icon.SocialMedia.Facebook width={1.4} height={1.2} />
      </Text>
      <Text
        variant="link"
        href={
          socialsMenu.menuLinks.find(({ slug }) => slug === "social-youtube")
            ?.externalLink
        }
        style={{ padding: "15px", display: "inline-block" }}>
        <Icon.SocialMedia.Youtube width={1.8} height={1.2} />
      </Text>
      <Text
        variant="link"
        href={
          socialsMenu.menuLinks.find(({ slug }) => slug === "social-twitter")
            ?.externalLink
        }
        style={{ padding: "15px", display: "inline-block" }}>
        <Icon.SocialMedia.Twitter width={1.8} height={1.2} />
      </Text>
      <Text
        variant="link"
        href={
          socialsMenu.menuLinks.find(({ slug }) => slug === "social-pinterest")
            ?.externalLink
        }
        style={{ padding: "15px", display: "inline-block" }}>
        <Icon.SocialMedia.Pinterest width={1.8} height={1.2} />
      </Text>
    </div>
  );
}

/**
 * @param {{secondaryMenu: MenuType}} props
 */
function SecondaryMenuOptions({ secondaryMenu }) {
  return (
    <div className={styles.mobileMenuFooter}>
      {secondaryMenu.menuLinks.map((menuLink) => {
        if (menuLink.hideOn === "mobile") {
          return null;
        }

        const [namespace, icon] = menuLink.name.split("/");
        const LinkIcon = Icon[namespace][icon];

        return (
          <Text
            variant="link"
            href={menuLink.externalLink || menuLink.slug}
            key={menuLink.slug}
            className={styles.footerOption}>
            <LinkIcon width={1.4} height={1.4} />
            {menuLink.label}
          </Text>
        );
      })}
    </div>
  );
}

export default MobileMenu;
