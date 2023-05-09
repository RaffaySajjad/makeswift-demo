import React from "react";
import { ResponsiveImage } from "frontend-ui";
import Spacer from "../SpacerSection";
import styles from "./styles.module.css";

/**
 * @typedef {{
 *  description?: string
 *  heading?: string
 *  roundBorders?: boolean
 *  backgroundColor?: string
 *  paddingSection?: string
 *  textAlignMobile?: string
 *  extraSpace?: string
 *  overrideDescriptionFontSize?: string
 *  desktopImage: string
 *  mobileImage: string
 *  reverseOrder?: boolean
 * }} SearchBarProps
 * @param {SearchBarProps} props
 */
const ImageTextLandingPageSection = ({
  heading,
  description,
  desktopImage,
  mobileImage,
  extraSpace,
  roundBorders,
  reverseOrder,
  textAlignMobile,
  overrideDescriptionFontSize,
  backgroundColor,
  paddingSection,
}) => (
  <div style={{ backgroundColor, padding: paddingSection, minWidth: "100%" }}>
    <div data-show="min-901" className={styles.secondaryBanner}>
      <div className={styles.desktopPad} />
      <ResponsiveImage
        style={{
          borderRadius: roundBorders ? "30px" : "0px",
          gridColumn: reverseOrder ? "2" : "1",
          gridRow: "1",
        }}
        className={styles.secondaryImage}
        src={desktopImage}
        alt="secondaryImage"
      />
      <div
        className={styles.secondaryDetail}
        style={{ gridColumn: reverseOrder ? "1" : "2", gridRow: "1" }}>
        <div
          className={styles.secondaryTitle}
          dangerouslySetInnerHTML={{
            __html: heading,
          }}
        />
        <Spacer desktopHeight={extraSpace} mobileHeight={extraSpace} />
        <div
          style={{ fontSize: overrideDescriptionFontSize }}
          className={styles.secondaryTextDescription}
          dangerouslySetInnerHTML={{
            __html: description,
          }}
        />
      </div>
      <div className={styles.desktopPad} />
    </div>
    <div
      data-show="max-900"
      className={styles.mobileSecondaryBanner}
      style={{ backgroundColor: backgroundColor }}>
      <div
        className={styles.secondaryTitle}
        dangerouslySetInnerHTML={{
          __html: heading,
        }}
      />
      <ResponsiveImage
        style={{ borderRadius: roundBorders ? "30px" : "0px" }}
        className={styles.secondaryImage}
        src={mobileImage}
        alt="secondaryImage"
      />
      <div
        // @ts-ignore
        style={{
          fontSize: overrideDescriptionFontSize,
        }}
        className={styles.secondaryTextDescription}
        dangerouslySetInnerHTML={{
          __html: description,
        }}
      />
    </div>
  </div>
);

export default ImageTextLandingPageSection;
