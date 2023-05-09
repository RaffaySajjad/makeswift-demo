import React from "react";
import { Text, useWindowDimensions, Icon } from "@trafilea/afrodita-components";
import shapermint from "@trafilea/afrodita-components/build/theme/shapermint.theme";
import dynamic from "next/dynamic";
import styles from "./styles.module.css";

const FooterAppLogos = dynamic(() => import("../FooterAppLogos"), {
  ssr: false,
});
const FooterNewsletter = dynamic(() => import("../FooterNewsletter"), {
  ssr: false,
});

/**
 * @typedef { import("lib/types").Menu } MenuType
 * @typedef { import("lib/types").MenuLink } MenuLinkType
 * @typedef { import("lib/types").Microcopy } MicrocopyType
 */

/**
 * @typedef {{
 *  mainMenu: MenuType,
 *  showNewsletter: boolean,
 *  newsletterTitle: string,
 *  newsletterText: string,
 *  newsletterListId: string,
 *  newsletterSubscribeEndpoint: string,
 *  newsletterSignUpText: MicrocopyType,
 *  newsletterInputPlaceholder: MicrocopyType,
 *  newsletterEmptyInputMessage: MicrocopyType,
 *  newsLetterSuccessTitle: MicrocopyType,
 *  newsLetterSuccessSubtitle: MicrocopyType,
 *  newsLetterSuccessDescriptionHtml: MicrocopyType,
 *  showSocialIcons: boolean,
 *  socialsMenu: MenuType,
 *  showAppLogos: boolean,
 *  appLogosTitle: string
 * }} FooterMainProps
 *
 * @param { FooterMainProps } props
 */

const FooterMain = ({
  mainMenu,
  showNewsletter,
  newsletterTitle,
  newsletterText,
  newsletterListId,
  newsletterSubscribeEndpoint,
  newsletterSignUpText,
  newsletterInputPlaceholder,
  newsletterEmptyInputMessage,
  newsLetterSuccessTitle,
  newsLetterSuccessSubtitle,
  newsLetterSuccessDescriptionHtml,
  showSocialIcons,
  socialsMenu,
  showAppLogos,
  appLogosTitle,
}) => {
  const { isMobile } = useWindowDimensions(shapermint.mediaQueries);

  /**
   * @param {MenuType} menu
   * @returns {number}
   */
  const getGridModifier = (menu) => {
    const numberExtraColumns = showNewsletter ? 1 : 0;

    return Math.floor(12 / (menu.menuLinks.length + numberExtraColumns));
  };

  /**
   *
   * @param {MenuLinkType[]} subMenuLinks
   */
  const renderFooterColLinks = (subMenuLinks) => {
    return subMenuLinks.map((subMenuLink, index) => {
      return (
        <li key={index} className={styles.listItem}>
          <Text
            variant="link"
            size="regular"
            href={subMenuLink.externalLink || subMenuLink.slug}
            style={{
              fontSize: isMobile ? "14px" : "16px",
              lineHeight: isMobile ? "22px" : "24px",
            }}>
            {subMenuLink.label}
          </Text>
        </li>
      );
    });
  };

  /**
   * @param {MenuType} menu
   * @param {number} gridModifier
   */
  const renderMenuColumns = (menu, gridModifier) => {
    return menu.menuLinks.map((menuLink, index) => {
      return (
        <div
          className={`${styles.footerColumn} ${
            styles[isMobile ? "footerColumn6" : `footerColumn${gridModifier}`]
          }`}
          style={isMobile ? { order: index + 2 } : undefined}
          key={index}>
          <div className={styles.menuContent}>
            <Text
              variant="heading6"
              weight="demi"
              size="regular"
              style={{
                marginBottom: isMobile ? "10px" : "15px",
                textTransform: "uppercase",
                fontSize: "16px",
                lineHeight: "20px",
              }}>
              {menuLink.label}
            </Text>
            {menuLink.subMenuLinks && (
              <ul className={`${styles.list} ${styles.listMainMenu}`}>
                {renderFooterColLinks(menuLink.subMenuLinks)}
              </ul>
            )}
          </div>
        </div>
      );
    });
  };

  const gridModifier = getGridModifier(mainMenu);

  return (
    <div className={styles.mainFooter}>
      {renderMenuColumns(mainMenu, gridModifier)}
      {showNewsletter && (
        <div
          className={`${styles.footerColumn} ${
            styles[isMobile ? "footerColumn12" : `footerColumn${gridModifier}`]
          }`}
          style={isMobile ? { order: 1, textAlign: "center" } : undefined}>
          <FooterNewsletter
            newsletterTitle={newsletterTitle}
            newsletterText={newsletterText}
            newsletterListId={newsletterListId}
            newsletterSubscribeEndpoint={newsletterSubscribeEndpoint}
            newsletterSignUpText={newsletterSignUpText}
            newsletterInputPlaceholder={newsletterInputPlaceholder}
            newsletterEmptyInputMessage={newsletterEmptyInputMessage}
            newsLetterSuccessTitle={newsLetterSuccessTitle}
            newsLetterSuccessSubtitle={newsLetterSuccessSubtitle}
            newsLetterSuccessDescriptionHtml={newsLetterSuccessDescriptionHtml}
          />
          {showSocialIcons && (
            <div className={styles.newsletterSocials}>
              <Text
                variant="link"
                href={
                  socialsMenu.menuLinks.find(
                    (menuLink) => menuLink.slug === "social-instagram"
                  )?.externalLink
                }>
                <Icon.SocialMedia.InstagramSolid
                  width={0.95}
                  height={1.13}
                  fill="#292929"
                />
              </Text>
              <Text
                variant="link"
                href={
                  socialsMenu.menuLinks.find(
                    (menuLink) => menuLink.slug === "social-facebook"
                  )?.externalLink
                }>
                <Icon.SocialMedia.Facebook
                  width={0.75}
                  height={1.13}
                  fill="#292929"
                />
              </Text>
              <Text
                variant="link"
                href={
                  socialsMenu.menuLinks.find(
                    (menuLink) => menuLink.slug === "social-youtube"
                  )?.externalLink
                }>
                <Icon.SocialMedia.Youtube
                  width={1.25}
                  height={1.13}
                  fill="#292929"
                />
              </Text>
              <Text
                variant="link"
                href={
                  socialsMenu.menuLinks.find(
                    (menuLink) => menuLink.slug === "social-twitter"
                  )?.externalLink
                }>
                <Icon.SocialMedia.Twitter
                  width={1.13}
                  height={1.13}
                  fill="#292929"
                />
              </Text>
              <Text
                variant="link"
                href={
                  socialsMenu.menuLinks.find(
                    (menuLink) => menuLink.slug === "social-pinterest"
                  )?.externalLink
                }>
                <Icon.SocialMedia.Pinterest
                  width={1.1}
                  height={1.13}
                  fill="#292929"
                />
              </Text>
            </div>
          )}
          {!isMobile && showAppLogos && (
            <FooterAppLogos appLogosTitle={appLogosTitle} />
          )}
        </div>
      )}
    </div>
  );
};

export default FooterMain;
