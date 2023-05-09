import React from "react";
import PromotionCountdown from "../components/PromotionCountdown";

export default {
  title: "Landing-Pages/PromotionCountdown",
  component: PromotionCountdown,
};

export const Default = () => {
  return (
    <PromotionCountdown
      titleText="Are you ready to test the new <br>generation of Bra?"
      backgroundColor="#FAF7F2"
      ctaText="<span style='color:#ffffff;font-weight:700;'>CHECK AVAILABILITY</span> <span style='color:#f7a08b;font-weight:700'>NOW!</span>"
      ctaBackgroundColor="#292929"
      hours={3}
      minutes={45}
      seconds={7}
      promotionText="MOTHER’S DAY SALE ENDS IN:&nbsp"
      endDate="02/02/2022"
      timerTitleColor="#292929"
      ctaLink="https://shapermint.com/products/empetua-high-waisted-leggings-6?variant=39533322174598"
      titleTextOverrideFontSize="33px"
      text="Leggings that give you a flattering look with the comfort of sweatpants!"
      headerBackgroundColor="#292929"
      titleTextColor="#ffffff"
    />
  );
};
