import React from "react";
import TextDescription from "../components/TextDescription";

export default {
  title: "Landing-Pages/TextDescription",
  component: TextDescription,
};

export const Default = () => {
  return (
    <TextDescription
      styleContainer="advertorial"
      desktopFontSize="16px"
      desktopLineHeight="22px"
      mobileFontSize="14px"
      mobileLineHeight="20px"
      textDesktop="<div style='max-width: 816px; display: flex; flex-direction: column; justify-content: center; align-items: center;'><h3>What Shapermint is doing to help</h3><div style='text-align: center;'>Bottomless Closet is always looking for clothing donations, so if you’ve been looking for motivation to finally tackle that closet clean-out, consider this it! You can also donate directly to the organization’s Operation Hope initiative, and check out the Bottomless Closet site for even more info on the tremendous impact they have, and more ways you can get involved. <br/><br/>Through Shapermint Cares, we’re dedicated to connecting with and empowering our community by giving back. If you know of a meaningful organization doing impactful work that deserves the spotlight, let us know in the comments below.<br/><br/><br/><br/><a style='font-size: 12px; font-family: Avenir Next LT Pro Demi,Arial,Helvetica,sans-serif;' href='pages/shapermint-cares-donation-program'>Terms and Conditions</a></div></div>"
      textMobile="<div style='max-width: 816px; display: flex; flex-direction: column; '><h3>What Shapermint is doing to help</h3><div>Bottomless Closet is always looking for clothing donations, so if you’ve been looking for motivation to finally tackle that closet clean-out, consider this it! You can also donate directly to the organization’s Operation Hope initiative, and check out the Bottomless Closet site for even more info on the tremendous impact they have, and more ways you can get involved. <br/><br/>Through Shapermint Cares, we’re dedicated to connecting with and empowering our community by giving back. If you know of a meaningful organization doing impactful work that deserves the spotlight, let us know in the comments below.<br/><br/><br/><div style='text-align: center;'><a style='text-align: center; font-size: 12px; font-family: Avenir Next LT Pro Demi,Arial,Helvetica,sans-serif;' href='pages/shapermint-cares-donation-program'>Terms and Conditions</a></div></div></div>"
    />
  );
};
