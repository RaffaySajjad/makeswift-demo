import React from "react";
import { Portal, useModal } from "@trafilea/afrodita-components";
import styles from "./styles.module.css";
import { useHeaderHeight } from "../Hooks";
import dynamic from "next/dynamic";

const SubMenu = dynamic(() => import("../SubMenu"), { ssr: false });

/**
 * @typedef { import("lib/types").MenuLink } MenuLink
 */

/**
 * @typedef {{
 *  shapewareMenu: MenuLink,
 * }} ShapewareMenu
 *
 * @param { ShapewareMenu } props
 */
const ShapewareMenu = ({ shapewareMenu }) => {
  const { opened, close } = useModal("shapeware-popup");
  const headerHeight = useHeaderHeight();

  if (!opened || !shapewareMenu) {
    return null;
  }

  return (
    <Portal id="shapeware-popup">
      <div
        id="shapeware-menu"
        className={styles.container}
        onMouseLeave={() => close()}
        style={{
          top: headerHeight,
        }}>
        {shapewareMenu.subMenuLinks.map((menuLink, menuLinkIndex) => (
          <SubMenu
            key={menuLinkIndex}
            menuLink={menuLink}
            renderImage={!menuLinkIndex}
          />
        ))}
      </div>
    </Portal>
  );
};

export default ShapewareMenu;
