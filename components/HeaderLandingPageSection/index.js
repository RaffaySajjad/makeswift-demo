import { Text } from "@trafilea/afrodita-components";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

/**
 * @typedef {{
 * titleText: string
 * backgroundColor?: string
 * rowGap?: string
 * buttonCta?: string
 * buttonText?: string
 * scrollTop?: number
 * scrollBottom?: number
 * }} props
 *
 * @param {props} props
 */
const HeaderLandingPageSection = ({
  titleText,
  rowGap,
  backgroundColor,
  buttonCta,
  buttonText,
  scrollTop = 300,
  scrollBottom = 5000,
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;

    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={styles.container}
      style={{ backgroundColor: backgroundColor }}>
      <div data-show="mobile" className={styles.mobileWrap}>
        <Text variant="body" weight="bold" className={styles.titleText}>
          {titleText}
        </Text>
      </div>

      <div
        style={{
          display:
            scrollPosition >= scrollTop && scrollPosition < scrollBottom
              ? "block"
              : "none",
        }}
        data-show="mobile"
        className={styles.stickyBanner}>
        <a href={buttonCta}>{buttonText}</a>
      </div>

      <div
        style={{ rowGap }}
        data-show="desktop"
        className={styles.desktopWrap}>
        <Text variant="heading3" weight="bold" className={styles.titleText}>
          {titleText}
        </Text>
      </div>
    </div>
  );
};

export default HeaderLandingPageSection;
