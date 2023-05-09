import React from "react";
import LandingHeaderCTA from "../components/LandingHeaderCTA";

export default {
  title: "Landing-Pages/LandingHeaderCTA",
  component: LandingHeaderCTA,
};

export const Default = () => {
  return (
    <LandingHeaderCTA
      title="&nbsp; x @alittlebitoftrish"
      ctaLink="https://store.shapermint.com"
      ctaLink2="https://store.shapermint.com/products/empetua-all-day-every-day-scoop-neck-cami-12?variant=39651859431558"
      linkText="Go to Shapermint.com"
      icon="https://cdn.shopify.com/s/files/1/0021/4889/2732/files/lp-nav-arrow.svg"
    />
  );
};
