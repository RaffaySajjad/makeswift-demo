import React, { useCallback } from "react";
import {
  Text,
  useWindowDimensions,
  Icon,
  modalEvent,
} from "@trafilea/afrodita-components";
import styles from "./styles.module.css";
import shapermint from "@trafilea/afrodita-components/build/theme/shapermint.theme";
import { useStoreConfig } from "../StoreConfig";
import { useCustomerState } from "frontend-customer";
import { getCustomerName } from "../Utils";
import { HelpCenterDropdown } from "../DropdownDialog";

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
const HeaderSecondaryNav = ({ menu }) => {
  const { search_type } = useStoreConfig();
  const { isMobile } = useWindowDimensions(shapermint.mediaQueries);
  const customer = useCustomerState();
  const [name] = getCustomerName(customer).split(" ");
  const displaySearchSection = useCallback(() => {
    if (search_type === "LEGACY") {
      window.location.href = `https://shapermint.com/search?q=&type=product`;
      return;
    }
    modalEvent("search-popup", { type: "open" });
  }, [search_type]);
  const isUserLoggedIn = useCallback(
    (link) => {
      if (customer.isLoggedIn) {
        window.location.href = `/account/information`;
      } else {
        window.location.href = link;
      }
      return;
    },
    [customer]
  );
  /**
   * @param {MenuType} menu
   */
  const renderMenuLinks = useCallback(
    (menu) => {
      return !isMobile ? (
        menu.menuLinks.map((menuLink, index) => {
          if (menuLink.hideOn === "desktop") {
            return null;
          }
          const [namespace, icon] = menuLink.name.split("/");
          // @ts-ignore
          const LinkIcon = Icon[namespace][icon];
          return (
            <li key={index} className={styles[icon.toLocaleLowerCase()]}>
              <Text
                variant="link"
                style={{ padding: "7.5px", position: "relative" }}
                {...(menuLink.slug === "search"
                  ? { onClick: displaySearchSection, href: undefined }
                  : menuLink.slug === "user"
                  ? {
                      onClick: () => isUserLoggedIn(menuLink.externalLink),
                      href: undefined,
                    }
                  : {
                      href: menuLink.externalLink || menuLink.slug,
                    })}>
                <LinkIcon width={1.4} height={1.4} />
                {name && (
                  <Text
                    variant="body"
                    weight="regular"
                    style={{ fontSize: "14px" }}
                    className={styles.tooltiptext}>
                    Hi, {name}
                  </Text>
                )}
              </Text>
              {icon.toLocaleLowerCase() === "questioncircle" && (
                <HelpCenterDropdown />
              )}
            </li>
          );
        })
      ) : (
        <li>
          <Text
            variant="link"
            style={{ padding: "7.5px" }}
            onClick={displaySearchSection}>
            <Icon.Navigation.Search
              width={1.3}
              height={1.3}
              testId="header-search-icon"
            />
          </Text>
        </li>
      );
    },
    [displaySearchSection, isMobile, name, customer]
  );
  return (
    <nav>
      <ul className={styles.headerList}>{renderMenuLinks(menu)}</ul>
    </nav>
  );
};

export default HeaderSecondaryNav;
