import React from "react";
import ReviewsImageLandingPageSection from "../components/ReviewsImageLandingPageSection";

export default {
  title: "Landing-Pages/ReviewsImageLandingPageSection",
  component: ReviewsImageLandingPageSection,
};

export const Default = () => {
  return (
    <ReviewsImageLandingPageSection
      image="https://cdn.shopify.com/s/files/1/0021/4889/2732/t/363/assets/img6-1644600886590.jpg?v=1644600889"
      commentHeadings={[
        "Fits like magic",
        "One of the best shapewear to use",
        "Forgot I was wearing a bra",
      ]}
      commentors={["Natalie B.", "Omaira G.", "Paula C."]}
      comments={[
        "“This bra is perfect for everyday wear. Wire free and feels so good to wear without that constraining feeling you get when wearing wires bras. I love it!”",
        "“You will not regret purchasing Shapermint. The material used for their shapewear feels like butter, lasts a long time and the most comfortable underwear I have ever tried!”",
        "“I just got my Truekind Daily Comfort Wireless Shaper bra in 2X and I love it! I am uneven after a partial mastectomy from breast cancer and this bra is the best I have found to minimize the difference. The right cup is a little empty, but I will add a pad to fill out the cup. I like how the cups are lined so no one knows when I am cold ; ) This is a bra that I could wear 24 hours a day. Perfect for daytime or sleep. Very happy with this purchase.”",
      ]}
    />
  );
};
