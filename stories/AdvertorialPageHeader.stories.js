import React from "react";
import AdvertorialPageHeader from "../components/AdvertorialPageHeader";

export default {
  title: "Landing-Pages/Advertorial/PageHeader",
  component: AdvertorialPageHeader,
};

export const Default = () => {
  return (
    <AdvertorialPageHeader
      rowGap="30px"
      titleText="Is It Truly Possible To Get Rid Of Your Mommy Tummy That Fast?"
      text="This is how REAL women are easily getting rid of their belly pouch and gaining back their body confidence."
    />
  );
};
