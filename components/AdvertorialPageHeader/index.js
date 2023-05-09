import { Text } from "@trafilea/afrodita-components";
import React from "react";
import styles from "./styles.module.css";

/**
 * @typedef {{
 * text?: any,
 * titleText: string
 * rowGap?: string
 * backgroundColor?: string
 * }} props
 *
 * @param {props} props
 */
const AdvertorialPageHeader = ({
  text,
  titleText,
  rowGap,
  backgroundColor,
}) => {
  return (
    <div
      className={styles.container}
      style={backgroundColor ? { backgroundColor: backgroundColor } : {}}>
      <div data-show="mobile" className={styles.mobileWrap}>
        <Text variant="body" weight="bold" className={styles.titleText}>
          {titleText}
        </Text>
        <div
          className={styles.paragraphText}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>

      <div
        style={{ rowGap }}
        data-show="desktop"
        className={styles.desktopWrap}>
        <Text variant="heading3" weight="bold" className={styles.titleText}>
          {titleText}
        </Text>
        <div
          className={styles.paragraphText}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </div>
  );
};

export default AdvertorialPageHeader;
