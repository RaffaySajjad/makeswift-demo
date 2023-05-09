import React from "react";
import TextDescription from "../TextDescription";
import BlogImageBannerSection from "../BlogImageBannerSection";
import SpacerSection from "../SpacerSection";
import CustomCTA from "../CustomCTA";
import styles from "./styles.module.css";

/**
 * @typedef {{
 * desktopHeading?: string,
 * mobileHeading?: string,
 * desktopDescription?: string
 * mobileDescription?: string
 * backgroundColor?: string,
 * mobileBackground?: string,
 * tabletBackground?: string,
 * desktopBackground?: string,
 * ctaText?: string
 * ctaLink?: string
 * }} props
 *
 * @param {props} props
 */
const AdvertorialSection = ({
  desktopHeading,
  mobileHeading,
  desktopDescription,
  mobileDescription,
  backgroundColor,
  desktopBackground,
  tabletBackground,
  mobileBackground,
  ctaText,
  ctaLink,
}) => {
  return (
    <div className={styles.container}>
      <TextDescription
        styleContainer="centeredTitle"
        backgroundColor={backgroundColor}
        textDesktop={desktopHeading}
        textMobile={mobileHeading}
      />
      <BlogImageBannerSection
        backgroundColor={backgroundColor}
        mobileBackground={mobileBackground}
        tabletBackground={tabletBackground}
        desktopBackground={desktopBackground}
      />
      <SpacerSection
        desktopHeight="30px"
        mobileHeight="30px"
        backgroundColor={backgroundColor}
      />
      <TextDescription
        styleContainer="centeredText"
        backgroundColor={backgroundColor}
        textDesktop={desktopDescription}
        textMobile={mobileDescription}
      />
      <SpacerSection
        desktopHeight="0"
        mobileHeight="30px"
        backgroundColor={backgroundColor}
      />
      <CustomCTA
        buttonText={ctaText}
        containerColor={backgroundColor}
        backgroundColor="#292929"
        display="flex"
        justifyContent="center"
        ctaLink={ctaLink}
        showOnlyDevice="desktop"
      />
    </div>
  );
};

export default AdvertorialSection;
