import React from "react";
import dynamic from "next/dynamic";
import { Portal, useModal } from "@trafilea/afrodita-components";
import { useHeaderHeight } from "../Hooks";
import { ResponsiveImage } from "frontend-ui";
import styles from "./styles.module.css";

const SubMenu = dynamic(() => import("../SubMenu"), { ssr: false });

/**
 * @typedef { import("lib/types").MenuLink } MenuLink
 */

/**
 * @typedef {{
 *  communityMenu: MenuLink,
 * }} CommunityMenu
 *
 * @param { CommunityMenu } props
 */
const CommunityMenu = ({ communityMenu }) => {
  const { opened, close } = useModal("community-popup");
  const headerHeight = useHeaderHeight();

  if (!opened || !communityMenu) {
    return null;
  }

  const [subMenu, quoteMenu] = communityMenu.subMenuLinks || [];
  const [content, author] = quoteMenu?.label.split("@");

  return (
    <Portal id="community-popup">
      <div
        id="community-menu"
        className={styles.container}
        onMouseLeave={() => close()}
        style={{
          top: headerHeight,
        }}>
        <SubMenu menuLink={subMenu} renderImage={false} />
        {quoteMenu && (
          <div>
            <div className={styles.quoteContainer}>
              <div className={styles.quoteInfo}>
                <p>{content}</p>
                <span>@{author}</span>
              </div>
              <div className={styles.quoteImageContainer}>
                <ResponsiveImage
                  className={styles.quoteImage}
                  src={quoteMenu?.image}
                  alt="author"
                />
              </div>
            </div>
            {quoteMenu.subMenuLinks?.length && (
              <div className={styles.linkContainer}>
                <a
                  className={styles.linkAction}
                  href={
                    quoteMenu.subMenuLinks[0].externalLink ||
                    quoteMenu.subMenuLinks[0].slug
                  }>
                  {quoteMenu.subMenuLinks[0].label}
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </Portal>
  );
};

export default CommunityMenu;
