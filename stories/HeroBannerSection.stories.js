import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import React from "react";
import HeroBannerSection from "../components/HeroBannerSection";

export default {
  title: "Landing-Pages/HeroBannerSection",
  component: HeroBannerSection,
  argTypes: {
    align: {
      options: ["start", "center", "end"],
      control: {
        type: "select",
      },
    },
    justify: {
      options: ["left", "center", "right", "flexStart", "flexEnd"],
      control: {
        type: "select",
      },
    },
  },
};

const minibannerContent = [
  {
    type: "h2",
    children: [
      {
        text: "Bundle and Save up to $80",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "Why not have them all? 2 bras for $41.99 or 2 leggings for $52.99 Find more faves.",
      },
    ],
  },
];

const bestSellers = [
  {
    type: "h2",
    children: [
      {
        text: "Springtime",
      },
    ],
  },
  {
    type: "h2",
    children: [
      {
        text: "Best Sellers",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "Step into Spring with self-love SupportiveWear best sellers.",
      },
    ],
  },
];

const bestSellersMobile = [
  {
    type: "h3",
    children: [
      {
        text: "Springtime Best Sellers",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "Step into Spring with self-love SupportiveWear best sellers.",
      },
    ],
  },
];

const ourPurpose = [
  {
    type: "h3",
    children: [
      {
        text: "Our Purpose",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "You deserve to feel exceptional every single day, inside and out.",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "Shapermint empowers women to embrace their confident inner goddesses through body positivity and self-care.",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "Find the perfect shapewear for your body and flaunt those curves today!",
      },
    ],
  },
];

/**
 * @typedef {{
 *  content: any,
 *  justify: 'left' | 'right' | 'center',
 *  justifyContent: 'left' | 'right' | 'center',
 *  align: 'start' | 'end' | 'center',
 *  background: string,
 *  backgroundSize: 'cover',
 *  backgroundPosition: '50%',
 *  textColor?: string,
 *  buttonVariant?: 'primary' | 'secondary',
 *  buttonText?: string,
 *  buttonUrl?: string,
 *  height: number,
 *  contentWidth: number,
 *  showOnlyDevice?: 'mobile' | 'desktop',
 * }} Args
 * @param {Args} args
 */
const Template = (args) => <HeroBannerSection {...args} />;

const xAxis = ["left", "center", "right"];
const yAxis = ["start", "center", "end"];

export const BannerContentPlacement = () => (
  <div style={{ display: "flex", flexDirection: "column", rowGap: "50px" }}>
    {yAxis.map((y) =>
      xAxis.map((x) => (
        <HeroBannerSection
          key={`${x}-${y}`}
          content={bestSellers}
          background="var(--colors-pallete-primary-40-soft-color)"
          backgroundSize="cover"
          backgroundPosition="50%"
          contentWidth={550}
          buttonVariant="primary"
          buttonText="SHOP BEST SELLERS"
          buttonUrl="#"
          height={540}
          // @ts-ignore
          justify={x}
          // @ts-ignore
          align={y}
          justifyContent="center"
        />
      ))
    )}
  </div>
);

const justify = ["left", "center", "right"];

export const BannerContentJustifying = () => (
  <div style={{ display: "flex", flexDirection: "column", rowGap: "50px" }}>
    {justify.map((x) => (
      <HeroBannerSection
        key={`${x}-${y}`}
        content={bestSellers}
        background="var(--colors-pallete-primary-40-soft-color)"
        backgroundSize="cover"
        backgroundPosition="50%"
        buttonVariant="primary"
        buttonText="SHOP BEST SELLERS"
        buttonUrl="#"
        height={340}
        contentWidth={450}
        justify="center"
        align="center"
        // @ts-ignore
        justifyContent={x}
      />
    ))}
  </div>
);

export const BannerOurPurpose = () => (
  <div style={{ display: "flex", flexDirection: "column", rowGap: "50px" }}>
    <HeroBannerSection
      content={ourPurpose}
      background="#f6f0e7"
      height={310}
      contentWidth={450}
      justify="center"
      align="center"
      // @ts-ignore
      justifyContent="center"
    />
  </div>
);

export const ImageBanner = Template.bind({});
// @ts-ignore
ImageBanner.args = {
  content: minibannerContent,
  justify: "left",
  justifyContent: "center",
  align: "center",
  background:
    "url(https://cdn.shopify.com/s/files/1/0021/4889/2732/files/main_2x_dbc56937-126b-463c-bc61-b5b9d5f641b2.jpg?v=1645627491)",
  backgroundSize: "cover",
  backgroundPosition: "50%",
  contentWidth: 400,
  buttonVariant: "primary",
  buttonText: "TEXT GOES HERE",
  buttonUrl: "#",
  height: 540,
  bannerTag: "New Arrival",
  bannerTagColor: "#292929",
};

export const Minibanner = Template.bind({});
// @ts-ignore
Minibanner.args = {
  content: minibannerContent,
  justify: "center",
  justifyContent: "center",
  align: "center",
  background:
    "linear-gradient(90.97deg, #F7A08B 0%, #D4605B 11.98%, #563836 26.56%, #292929 49.48%, #5A3937 73.96%, #D4605B 91.67%, #F7A08B 100%)",
  textColor: "#fff",
  buttonVariant: "primary",
  buttonText: "SHOP NOW",
  buttonUrl: "#",
  height: 540,
};

export const ImageBannerDesktop = Template.bind({});
// @ts-ignore
ImageBannerDesktop.args = {
  content: bestSellers,
  justify: "right",
  justifyContent: "center",
  align: "center",
  background:
    "url(https://cdn.shopify.com/s/files/1/0021/4889/2732/files/mid2_desk_2x_9b40e713-6f19-4532-b850-5ffd84892209.jpg?v=1647980682)",
  backgroundSize: "cover",
  backgroundPosition: "50%",
  contentWidth: 550,
  buttonVariant: "primary",
  buttonText: "SHOP BEST SELLERS",
  buttonUrl: "#",
  textColor: "#fff",
  height: 540,
  showOnlyDevice: "desktop",
};

export const ImageBannerMobile = Template.bind({});
// @ts-ignore
ImageBannerMobile.args = {
  content: bestSellersMobile,
  justify: "center",
  justifyContent: "center",
  align: "start",
  background:
    "url(https://cdn.shopify.com/s/files/1/0021/4889/2732/files/mid_mob_2x_1.jpg?v=1649121442)",
  backgroundSize: "cover",
  backgroundPosition: "50%",
  contentWidth: 550,
  buttonVariant: "primary",
  buttonText: "SHOP BEST SELLERS",
  buttonUrl: "#",
  textColor: "#fff",
  height: 642,
  showOnlyDevice: "mobile",
};
ImageBannerMobile.parameters = {
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
    defaultViewport: "mobile2",
  },
};

const dynamicBannerContentDesktop = [
  {
    type: "h2",
    children: [
      {
        text: "Best-Selling",
      },
    ],
  },
  {
    type: "h2",
    children: [
      {
        text: "Spring Styles",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "Shop supportive, comfy, and breathable styles,",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: " just in time for Spring celebrations.",
      },
    ],
  },
];

const dynamicBannerContentMobile = [
  {
    type: "h3",
    children: [
      {
        text: "Best-Selling Spring Styles",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: "Shop supportive, comfy, and breathable styles,",
      },
    ],
  },
  {
    type: "paragraph",
    children: [
      {
        text: " just in time for Spring celebrations.",
      },
    ],
  },
];

export const ImageBannerDynamic = () => (
  <>
    <HeroBannerSection
      content={dynamicBannerContentDesktop}
      background="url(https://cdn.shopify.com/s/files/1/0021/4889/2732/files/mid2_desk_2x_1.jpg?v=1649119986)"
      backgroundSize="cover"
      backgroundPosition="50%"
      justify="right"
      align="center"
      justifyContent="center"
      contentWidth={550}
      buttonText="SHOP NOW"
      buttonVariant="primary"
      buttonUrl="#"
      buttonTestId="shop-now-button-hero-banner"
      textColor="#fff"
      height={540}
      showOnlyDevice="desktop"
      bannerRedirectUrl="#"
      bannerTestId="best-selling-spring-banner"
    />
    <HeroBannerSection
      content={dynamicBannerContentMobile}
      background="url(https://cdn.shopify.com/s/files/1/0021/4889/2732/files/mid_mob_2x_1.jpg?v=1649121442)"
      backgroundSize="cover"
      backgroundPosition="50%"
      justify="center"
      align="start"
      justifyContent="center"
      buttonText="SHOP NOW"
      buttonVariant="primary"
      buttonUrl="#"
      buttonTestId="shop-now-button-hero-banner"
      textColor="#fff"
      showOnlyDevice="mobile"
      height={642}
      bannerRedirectUrl="#"
      bannerTestId="best-selling-spring-banner"
    />
  </>
);
