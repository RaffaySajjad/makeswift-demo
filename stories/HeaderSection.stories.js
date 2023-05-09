import { useSetupStoreConfig } from "../components/StoreConfig";
import React, { useEffect } from "react";
import HeaderSection from "../components/HeaderSection";

export default {
  title: "Sections/HeaderSection",
  component: HeaderSection,
};

export const Default = () => {
  const setup = useSetupStoreConfig();

  useEffect(() => {
    setup([{ name: "coupon_banner", value: "This is a <b>test</b>" }]);
  }, [setup]);

  return <HeaderSection />;
};
