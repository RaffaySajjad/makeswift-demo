import React from "react";
import ImageTextLandingPageSection from "../components/ImageTextLandingPageSection";

export default {
  title: "Landing-Pages/ImageTextLandingPageSection",
  component: ImageTextLandingPageSection,
};

export const Default = () => (
  <ImageTextLandingPageSection
    overrideDescriptionFontSize="16px"
    reverseOrder={false}
    backgroundColor="#fafafa"
    paddingSection="30px 0"
    extraSpace="20px"
    heading="1. Forget about the see-through effect"
    description="Yes, you know how it feels. It’s almost like you are feeling exposed all day long. These leggings are designed with a seamless fabric that have been squat-tested by hundreds of women."
    desktopImage="https://cdn.shopify.com/s/files/1/0021/4889/2732/t/363/assets/1-forget-see-through_dsk-1643408264275.jpeg?v=1643408266"
    mobileImage="https://cdn.shopify.com/s/files/1/0021/4889/2732/t/363/assets/1-forget-see-through_dsk-1643408264275.jpeg?v=1643408266"
  />
);
