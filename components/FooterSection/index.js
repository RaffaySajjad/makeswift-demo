import React from "react";
import Footer from "../Footer";
import {
  copyrightSymbol,
  copyrightText,
  footerBottomMenu,
  footerMainMenu,
  newsLetterSuccessDescriptionHtml,
  newsLetterSuccessSubtitle,
  newsLetterSuccessTitle,
  newsletterEmptyInputMessage,
  newsletterInputPlaceholder,
  newsletterSignUpText,
  socialsMenu,
} from "../../lib/mocks";

const FooterSection = () => {
  return (
    <div
      style={{ background: "var(--colors-shades-10-color)", minWidth: "100%" }}>
      <Footer
        mainMenu={footerMainMenu}
        showNewsletter={true}
        newsletterTitle="Join Us & Get 10% OFF"
        newsletterText="Join the #ShapermintMovement"
        newsletterListId="T36wHi"
        newsletterSubscribeEndpoint="https://manage.kmail-lists.com/ajax/subscriptions/subscribe"
        newsletterSignUpText={newsletterSignUpText}
        newsletterInputPlaceholder={newsletterInputPlaceholder}
        newsletterEmptyInputMessage={newsletterEmptyInputMessage}
        newsLetterSuccessTitle={newsLetterSuccessTitle}
        newsLetterSuccessSubtitle={newsLetterSuccessSubtitle}
        newsLetterSuccessDescriptionHtml={newsLetterSuccessDescriptionHtml}
        showSocialIcons={true}
        socialsMenu={socialsMenu}
        showAppLogos={true}
        appLogosTitle="Get the app"
        secondaryMenu={footerBottomMenu}
        showCopyright={true}
        copyrightSymbol={copyrightSymbol}
        copyrightText={copyrightText}
      />
    </div>
  );
};

export default FooterSection;
