import { Text } from "@trafilea/afrodita-components";
import TextDescription from "../TextDescription";
import React from "react";
import styles from "./styles.module.css";

/**
 * @typedef {{
 * title: string,
 * desktopDescription: string,
 * mobileDescription: string
 * }} props
 *
 * @param {props} props
 */
const ListicleParagraphSection = ({
  title,
  desktopDescription,
  mobileDescription,
}) => {
  return (
    <div className={styles.container}>
      <Text className={styles.heading} variant="heading1">
        {title}
      </Text>
      <TextDescription
        mobileFontSize="16px"
        desktopFontSize="24px"
        textDesktop={desktopDescription}
        textMobile={mobileDescription}
        styleContainer="listicle"
      />
    </div>
  );
};

export default ListicleParagraphSection;
