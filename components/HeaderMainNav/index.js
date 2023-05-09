import React, { useState } from "react";
import { Text, modalEvent, Icon } from "@trafilea/afrodita-components";
import styles from "./styles.module.css";
import shapermint from "@trafilea/afrodita-components/build/theme/shapermint.theme";
import dynamic from "next/dynamic";

const ShapewareMenu = dynamic(() => import("../ShapewareMenu"), { ssr: false });
const CommunityMenu = dynamic(() => import("../CommunityMenu"), {
  ssr: false,
});

/**
 * @typedef { import("lib/types").Menu } MenuType
 */

/**
 * @typedef {{
 *  menu: MenuType,
 * }} HeaderMainNavProps
 *
 * @param { HeaderMainNavProps } props
 */
const HeaderMainNav = ({ menu }) => {
  const [currentMenu, setCurrentMenu] = useState(null);

  const openMenu = (menuLink) => {
    if (menuLink.label === "Shapewear") {
      modalEvent("community-popup", { type: "close" });
      modalEvent("shapeware-popup", { type: "open" });
      setCurrentMenu(menuLink);
    } else if (menuLink.label === "Community") {
      modalEvent("shapeware-popup", { type: "close" });
      modalEvent("community-popup", { type: "open" });
      setCurrentMenu(menuLink);
    }
  };

  const closeMenus = (event) => {
    const toElement = event.toElement || event.relatedTarget;

    if (
      !toElement ||
      !["shapeware-menu", "community-menu"].includes(toElement.id)
    ) {
      modalEvent("community-popup", { type: "close" });
      modalEvent("shapeware-popup", { type: "close" });
    }
  };

  /**
   * @param {MenuType} menu
   */
  const renderMenuLinks = (menu) => {
    return menu.menuLinks.map((menuLink, index) => {
      return (
        <li
          key={index}
          className={styles.headerListItem}
          onMouseEnter={() => openMenu(menuLink)}>
          <Text
            variant="link"
            className={styles.headerListItemLink}
            href={menuLink.externalLink || menuLink.slug}
            size="small"
            style={
              menuLink.highlighted
                ? { color: shapermint.colors.semantic.urgent.color }
                : undefined
            }>
            {menuLink.label}
            {menuLink.subMenuLinks && !!menuLink.subMenuLinks.length && (
              <Icon.Arrows.ChevronDown width={0.6} height={0.6} />
            )}
          </Text>
        </li>
      );
    });
  };

  return (
    <>
      <ul onMouseLeave={closeMenus} className={styles.headerList}>
        {renderMenuLinks(menu)}
      </ul>
      <ShapewareMenu shapewareMenu={currentMenu} />
      <CommunityMenu communityMenu={currentMenu} />
    </>
  );
};

export default HeaderMainNav;
