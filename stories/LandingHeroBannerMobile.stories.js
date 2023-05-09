import React from "react";
import LandingHeroBannerMobile from "../components/LandingHeroBannerMobile";

export default {
  title: "Landing-Pages/LandingHeroBannerMobile",
  component: LandingHeroBannerMobile,
};

export const Default = () => {
  return (
    <LandingHeroBannerMobile
      isImageBottom
      buttonVariant="secondary"
      title="This Is The Most Comfortable, Most Shaping Cami Ever!"
      backgroundColor="#faf7f2"
      image="https://cdn.shopify.com/s/files/1/0021/4889/2732/t/363/assets/hero-banner-mob-1652868577858.jpg?v=1652868579"
      text="<p> I just love how it has the perfect amount of compression. Tight enough to hold everything in, but not so tight it cuts off circulation.</p>
      <p>If you’re like me and you want to keep your rolls and bulges in check while looking gorgeous, then you have to check this out!</p>"
      cta="https://store.shapermint.com/products/empetua-all-day-every-day-scoop-neck-cami-12?variant=39651859431558"
    />
  );
};
