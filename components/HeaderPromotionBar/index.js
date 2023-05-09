import { Text, Timer } from "@trafilea/afrodita-components";
import { useTimerDifference } from "../Hooks";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import nookies from "nookies";

const TIME_PER_SLIDE = 8000;

/**
 * @typedef {{
 *   content: import("lib/types").HeaderPromotionBanner[]
 * }} HeaderPromotionProps
 *
 * @param {HeaderPromotionProps} props
 */
const HeaderPromotionBar = ({ content }) => {
  const [count, setCount] = useState(0);
  const timeoutRef = React.useRef(null);

  useEffect(() => {
    if (!content?.length) {
      return;
    }

    const resetInterval = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    resetInterval();

    timeoutRef.current = setInterval(() => {
      setCount((count) => (count + 1) % content.length);
    }, TIME_PER_SLIDE);

    return resetInterval;
  }, [content?.length]);

  if (!content?.length) {
    return null;
  }

  return (
    <div className={styles.topBarWrapper}>
      {content.map((data, index) => {
        return (
          <HeaderPromotionSlide
            key={index}
            active={count === index}
            {...data}
          />
        );
      })}
    </div>
  );
};

/**
 * @param {import("lib/types").HeaderPromotionBanner & { active: boolean }} props
 */
function HeaderPromotionSlide({ name, endsAt, active }) {
  const [hours, minutes, seconds] = useTimerDifference(
    "00:00",
    endsAt || "00:00"
  );

  const cookies = nookies.get();
  const vwoCookie =
    cookies &&
    (cookies["_vis_opt_exp_1277_combi"] ||
      cookies["debug_vis_opt_exp_1277_combi"]);

  const _isTargettedPDP = () => {
    // Targetting Swimwear PDPs and it's collection only
    if (typeof window !== "undefined") {
      return (
        window.location.pathname.includes("collections/swimwear") ||
        window?.location?.pathname?.includes("bikini") ||
        window?.location?.pathname?.includes("swim")
      );
    }

    return false;
  };

  const isVWOVariationV1 = () => {
    return vwoCookie === "2" && _isTargettedPDP();
  };

  const isVWOVariationV2 = () => {
    return vwoCookie === "3" && _isTargettedPDP();
  };

  const _getTimer = () => {
    return (
      <Timer
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        onTimeUp={() => {}}
      />
    );
  };

  const _getStandardTemplate = () => {
    return (
      <>
        {name}
        {endsAt && <span> | Ends in {_getTimer()}</span>}
      </>
    );
  };

  const _getVariation1Template = () => {
    return <>{name}</>;
  };

  const _getVariation2Template = () => {
    return name.includes("Sale") ? (
      <>
        Today&apos;s {name}
        {endsAt && <span> deals ends in {_getTimer()}</span>}
      </>
    ) : (
      <>{name}</>
    );
  };

  return (
    <div
      className={`${active ? styles.activeSlide : styles.slide} ${
        styles.slideWrap
      }`}>
      <Text
        variant="body"
        style={{
          color: "inherit",
          fontSize: "inherit",
          fontWeight: "inherit",
        }}>
        {!isVWOVariationV1() && !isVWOVariationV2() && _getStandardTemplate()}
        {isVWOVariationV1() && _getVariation1Template()}
        {isVWOVariationV2() && _getVariation2Template()}
      </Text>
    </div>
  );
}

export default HeaderPromotionBar;
