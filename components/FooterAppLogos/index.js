import React from "react";
import { Text, Icon, useWindowDimensions } from "@trafilea/afrodita-components";
import styles from "./styles.module.css";
import shapermint from "@trafilea/afrodita-components/build/theme/shapermint.theme";

/**
 * @typedef {{
 *  appLogosTitle: string
 * }} FooterAppLogosProps
 *
 * @param { FooterAppLogosProps } props
 */
const FooterAppLogos = ({ appLogosTitle }) => {
  const { isMobile } = useWindowDimensions(shapermint.mediaQueries);
  const titleSize = { fontSize: "16px", lineHeight: "20px" };

  return (
    <div className={styles.appLogos}>
      <Text
        variant="heading6"
        weight="demi"
        size="regular"
        style={
          isMobile
            ? { ...titleSize, marginBottom: "15px", textTransform: "uppercase" }
            : {
                ...titleSize,
                marginBottom: "15px",
                marginTop: "4px",
                textTransform: "uppercase",
              }
        }>
        {appLogosTitle}
      </Text>
      <div className={styles.downloadLogos}>
        <Text
          variant="link"
          href="https://play.google.com/store/apps/details?id=co.tapcart.app.id_KxF0gya3Hn&hl=es_419"
          style={{ marginRight: "6px" }}>
          <Icon.Download.GooglePlay width={8.25} height={2.5} />
        </Text>
        <Text
          variant="link"
          href="https://apps.apple.com/us/app/shapermint/id1444808183">
          <Icon.Download.AppleStore width={8.5625} height={3.125} />
        </Text>
      </div>
    </div>
  );
};

export default FooterAppLogos;
