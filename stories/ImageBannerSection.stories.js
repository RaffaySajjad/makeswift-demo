import React from "react";
import ImageBannerSection from "../components/ImageBannerSection";

export default {
  title: "Landing-Pages/ImageBannerSection",
  component: ImageBannerSection,
};

export const Default = () => {
  return (
    <ImageBannerSection
      mobileBackground="https://cdn.shopify.com/s/files/1/0021/4889/2732/t/363/assets/main_banner_mbl-1654508210447.jpeg?v=1654508212"
      desktopBackground="https://cdn.shopify.com/s/files/1/0021/4889/2732/t/363/assets/main_banner_dsk-1654506724283.jpeg?v=1654506731"
    />
  );
};
