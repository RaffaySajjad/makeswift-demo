import React from "react";
import ListicleParagraphSection from "../components/ListicleParagraphSection";

export default {
  title: "Landing-Pages/Listicle/ParagraphSection",
  component: ListicleParagraphSection,
};

export const Default = () => {
  return (
    <ListicleParagraphSection
      title="There is more… a Smart Sizing with a Risk-Free Fit Guarantee!"
      desktopDescription="<strong>Finding the perfect bra size can sometimes be painful. But Truekind has
    found a solution for that too!</strong><br/><br/>First, due to it’s stretchy technology and smart sizing approach, this bra works for sizes S to 4XL, so you can forget about all the painful measurements and doubts.<br/><br/>Secondly, it comes with a no-brainer 60 days Fit Guarantee where you can exchange or refund this bra so you can Try-it Risk Free!<br/><br/><strong>If you are still wondering why this bra is one of the best sellers in America with more than 4 Million Customers…check this out:</strong>"
      mobileDescription="<strong>Finding the perfect bra size can sometimes be painful. But Truekind has
    found a solution for that too!</strong><br/><br/>First, due to it’s stretchy technology and smart sizing approach, this bra works for sizes S to 4XL, so you can forget about all the painful measurements and doubts.<br/><br/>Secondly, it comes with a no-brainer 60 days Fit Guarantee where you can exchange or refund this bra so you can Try-it Risk Free!<br/><br/><strong>If you are still wondering why this bra is one of the best sellers in America with more than 4 Million Customers…check this out:</strong>"
    />
  );
};
