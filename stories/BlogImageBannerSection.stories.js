import React from "react";
import BlogImageBannerSection from "../components/BlogImageBannerSection";

export default {
  title: "Landing-Pages/BlogImageBannerSection",
  component: BlogImageBannerSection,
};

export const Default = () => {
  return (
    <BlogImageBannerSection
      desktopMaxWidth="507px"
      containerStyle="advertorial"
      mobileBackground="https://cdn.shopify.com/s/files/1/0021/4889/2732/files/img_mob-4.jpg?v=1673952990"
      tabletBackground="https://cdn.shopify.com/s/files/1/0021/4889/2732/files/img_desk-4.jpg?v=1673952979"
      desktopBackground="https://cdn.shopify.com/s/files/1/0021/4889/2732/files/img_desk-4.jpg?v=1673952979"
    />
  );
};
