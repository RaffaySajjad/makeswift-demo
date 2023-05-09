import React from "react";
import { useWindowDimensions } from "@trafilea/afrodita-components";
import styles from "./styles.module.css";
import FooterBottom from "../FooterBottom";
import FooterMain from "../FooterMain";
import FooterAppLogos from "../FooterAppLogos";
import shapermint from "@trafilea/afrodita-components/build/theme/shapermint.theme";

/**
 * @typedef { import("lib/types").Menu } MenuType
 * @typedef { import("lib/types").MenuLink } MenuLinkType
 * @typedef { import("lib/types").Microcopy } MicrocopyType
 */

/**
 * @typedef {{
 *  mainMenu: MenuType,
 *  secondaryMenu: MenuType,
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
 *  showAppLogos: boolean,
 *  appLogosTitle: string,
 *  showCopyright: boolean,
 *  copyrightSymbol: MicrocopyType,
 *  copyrightText: MicrocopyType,
 *  socialsMenu: MenuType,
 * }} FooterProps
 *
 * @param { FooterProps } props
 */
const Footer = ({
  mainMenu,
  secondaryMenu,
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
  showAppLogos,
  appLogosTitle,
  showCopyright,
  copyrightSymbol,
  copyrightText,
  socialsMenu,
}) => {
  const { isMobile } = useWindowDimensions(shapermint.mediaQueries);

  return (
    <div className={`${styles.container} ${styles.wrapper}`}>
      <FooterMain
        mainMenu={mainMenu}
        showNewsletter={showNewsletter}
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
        showSocialIcons={showSocialIcons}
        socialsMenu={socialsMenu}
        showAppLogos={showAppLogos}
        appLogosTitle={appLogosTitle}
      />
      {isMobile && showAppLogos && (
        <FooterAppLogos appLogosTitle={appLogosTitle} />
      )}
      <FooterBottom
        menu={secondaryMenu}
        showCopyright={showCopyright}
        copyrightSymbol={copyrightSymbol}
        copyrightText={copyrightText}
      />
    </div>
  );
};

export default Footer;
