import React from "react";
import styles from "./styles.module.css";
import { Text, Timer } from "@trafilea/afrodita-components";
import CustomCTA from "../CustomCTA";
import { formatDateOrdinal } from "../Utils";

/**
 * @typedef {{
 * timerTitleColor: string,
 * backgroundColor: string,
 * hours: number,
 * minutes: number,
 * seconds: number,
 * ctaBackgroundColor: string,
 * ctaText: string,
 * text?: string,
 * titleText: string
 * titleTextColor?: string
 * endDate?: string
 * titleTextOverrideFontSize?: string
 * promotionText?: string
 * textOverrideFontSize?: string
 * ctaLink: string
 * headerBackgroundColor?: string
 * }} props
 *
 * @param {props} props
 */

const PromotionCountdown = ({
  titleText,
  titleTextColor,
  text,
  ctaText,
  ctaBackgroundColor,
  backgroundColor,
  hours,
  minutes,
  seconds,
  endDate,
  timerTitleColor,
  titleTextOverrideFontSize,
  textOverrideFontSize,
  promotionText = "THIS DEAL ENDS IN:&nbsp",
  ctaLink,
  headerBackgroundColor,
}) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.banner}
        style={{
          background: backgroundColor,
        }}>
        <div
          className={!!headerBackgroundColor && styles.header}
          style={{
            background: headerBackgroundColor,
          }}>
          <Text
            variant="body"
            weight="bold"
            className={styles.titleText}
            style={{
              fontSize: titleTextOverrideFontSize,
              color: titleTextColor,
            }}
            dangerouslySetInnerHTML={{ __html: titleText }}>
            {}
          </Text>
        </div>
        <Text
          className={styles.textSecond}
          variant="body"
          style={{
            fontSize: textOverrideFontSize,
          }}>
          {text}
        </Text>
        <CustomCTA
          buttonText={ctaText}
          backgroundColor={ctaBackgroundColor}
          display="flex"
          justifyContent="center"
          ctaLink={ctaLink}
        />
        <div className={styles.timerContainer}>
          <Text className={styles.title} variant="heading3" weight="bold">
            <div
              style={{
                color: timerTitleColor,
              }}
              dangerouslySetInnerHTML={{ __html: promotionText }}
            />
          </Text>
          <Timer
            hours={hours}
            minutes={minutes}
            onTimeUp={() => {}}
            seconds={seconds}
          />
        </div>
        <Text variant="heading4" weight="regular" className={styles.date}>
          {formatDateOrdinal(endDate, "long")}
        </Text>
      </div>
    </div>
  );
};

export default PromotionCountdown;
