import React from "react";
import AuthorSection from "../components/AuthorSection";

export default {
  title: "Landing-Pages/AuthorSection",
  component: AuthorSection,
};

export const Default = () => {
  return (
    <AuthorSection
      authorName="Kari Locklear"
      subDetail="[TODAY’S DATE] · 4 min read"
      profileLink="https://cdn.shopify.com/s/files/1/0021/4889/2732/files/Place_image_here.png?v=1664192406"
    />
  );
};
