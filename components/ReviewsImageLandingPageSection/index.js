import { Text } from "@trafilea/afrodita-components";
import { ResponsiveImage } from "frontend-ui";
import React from "react";
import styles from "./styles.module.css";

/**
 * @typedef {{
 * image: string,
 * commentHeadings?: string[],
 * commentors?: string[],
 * comments?: string[]
 * }} props
 *
 * @param {props} props
 */
const ReviewsImageLandingPageSection = ({
  image,
  commentHeadings,
  commentors,
  comments,
}) => {
  return (
    <div className={styles.container}>
      <ResponsiveImage className={styles.image} src={image} />
      <div className={styles.commentSection}>
        {commentHeadings?.map((heading, index) => {
          return (
            <div key={heading}>
              <br />
              <Text className={styles.heading} variant="heading2">
                {heading}
              </Text>
              <br />
              <div>{comments[index]}</div>
              <br />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "10px",
                }}>
                <ResponsiveImage
                  className={styles.stars}
                  src={
                    "https://cdn.shopify.com/s/files/1/0021/4889/2732/files/stars-reviews.svg"
                  }
                />
                <div>{commentors[index]}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewsImageLandingPageSection;
