import React from "react";
import { Text, useThemeAssets } from "@trafilea/afrodita-components";
import { useRouter } from "../../lib/built-in/router/index";
import { ResponsiveImage } from "frontend-ui";
import styles from "./styles.module.css";

const HeaderLogo = () => {
  const { images } = useThemeAssets();

  const { pathname } = useRouter();

  const Element = pathname === "/" ? "h1" : "div";

  return (
    <Element className={styles.headerLogo}>
      <Text
        variant="link"
        style={{ display: "block", lineHeight: 0 }}
        href="https://cdn.jsdelivr.net/gh/trafilea/storefront-static@main/images/shapermint/shapermint_logo_black.svg">
        <ResponsiveImage
          src={images.logo}
          alt="shapermint-logo"
          className={styles.headerLogoImage}
        />
      </Text>
    </Element>
  );
};

export default HeaderLogo;
