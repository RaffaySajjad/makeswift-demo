import {
  Checkbox,
  List,
  Number,
  Style,
  TextInput,
} from "@makeswift/runtime/controls";
import { ReactRuntime } from "@makeswift/runtime/react";
import AdvertorialPageHeader from "../../components/AdvertorialPageHeader";
import HeaderLandingPageSection from "../../components/HeaderLandingPageSection";
import ImageBannerSection from "../../components/ImageBannerSection";
import ImageTextLandingPageSection from "../../components/ImageTextLandingPageSection";
import PromotionCountdown from "../../components/PromotionCountdown";
import ReviewsImageLandingPageSection from "../../components/ReviewsImageLandingPageSection";
import FooterSection from "../../components/FooterSection";
import Spacer from "../../components/SpacerSection";
import ListicleParagraphSection from "../../components/ListicleParagraphSection";
import AdvertorialSection from "../../components/AdvertorialSection";
import StickyCTAMobile from "../../components/StickyCTAMobile";
import LandingHeaderCTA from "../../components/LandingHeaderCTA";
import AuthorSection from "../../components/AuthorSection";

const isShapermint = process.env.NEXT_PUBLIC_STORE_NAME === "shapermint";
const isRevel = process.env.NEXT_PUBLIC_STORE_NAME === "revel";
const isTruekind = process.env.NEXT_PUBLIC_STORE_NAME === "truekind";

ReactRuntime.registerComponent(ImageBannerSection, {
  type: "image-banner",
  label: "Image Banner Section",
  props: {
    bannerLink: TextInput({
      label: "Banner Link",
    }),
    // test: List({
    //   label: "Test",
    //   type: Shape({
    //     type: {
    //       author: TextInput({ label: "Author", defaultValue: "" }),
    //       quote: TextArea({ label: "Quote", defaultValue: "" }),
    //     },
    //   }),
    // }),
    mobileBackground: TextInput({
      label: "Mobile Background",
      defaultValue:
        "https://cdn.shopify.com/s/files/1/0021/4889/2732/t/363/assets/main_banner_mbl-1654508210447.jpeg?v=1654508212",
    }),
    desktopBackground: TextInput({
      label: "Desktop Background",
      defaultValue:
        "https://cdn.shopify.com/s/files/1/0021/4889/2732/t/363/assets/main_banner_dsk-1654506724283.jpeg?v=1654506731",
    }),
  },
});

ReactRuntime.registerComponent(HeaderLandingPageSection, {
  type: "header-landing",
  label: "Header Landing Page Section",
  props: {
    titleText: TextInput({
      label: "Title Text",
      defaultValue: "Section Title",
    }),
    backgroundColor: TextInput({
      label: "Background Color",
      defaultValue: "#ffff",
    }),
    rowGap: TextInput({
      label: "Row Gap",
    }),
    buttonCta: TextInput({
      label: "Sticky Button CTA (Mobile)",
    }),
    buttonText: TextInput({
      label: "Sticky CTA Text",
      defaultValue: "Click here!!",
    }),
    scrollTop: Number({
      label: "Scroll Top",
      defaultValue: 300,
    }),
    scrollBottom: Number({
      label: "Scroll Bottom",
      defaultValue: 5000,
    }),
  },
});

ReactRuntime.registerComponent(AdvertorialPageHeader, {
  type: "advertorial-page",
  label: "Advertorial Page Header Section",
  props: {
    text: TextInput({
      label: "Text",
    }),
    titleText: TextInput({
      label: "Title Text",
      defaultValue: "Section Title Text",
    }),
    rowGap: TextInput({
      label: "Row Gap",
    }),
    backgroundColor: TextInput({
      label: "Background Color",
      defaultValue: "#ffff",
    }),
  },
});

ReactRuntime.registerComponent(ImageTextLandingPageSection, {
  type: "image-text-landing-page",
  label: "Image Text Landing Page Section",
  props: {
    heading: TextInput({
      label: "Heading",
      defaultValue: "Section Heading",
    }),
    description: TextInput({
      label: "Description",
    }),
    roundBorders: Checkbox({
      label: "Round Borders",
      defaultValue: false,
    }),
    backgroundColor: TextInput({
      label: "Background Color",
      defaultValue: "#fafafa",
    }),
    paddingSection: TextInput({
      label: "Padding Section",
      defaultValue: "30px 15px",
    }),
    extraSpace: TextInput({
      label: "Extra Space",
      defaultValue: "30px",
    }),
    overrideDescriptionFontSize: TextInput({
      label: "Override Description Font Size",
      defaultValue: "16px",
    }),
    desktopImage: TextInput({
      label: "Desktop Image",
      defaultValue: "cdn.shopify.com",
    }),
    mobileImage: TextInput({
      label: "Mobile Image",
      defaultValue: "cdn.shopify.com",
    }),
    reverseOrder: Checkbox({
      label: "Reverse Order",
      defaultValue: false,
    }),
  },
});

// @ts-ignore
ReactRuntime.registerComponent(ReviewsImageLandingPageSection, {
  type: "reviews-image-landing-page",
  label: "Reviews Image Landing Page Section",
  props: {
    image: TextInput({
      label: "Main Image",
      defaultValue: "cdn.shopify.com",
    }),
    commentHeadings: List({
      label: "Comment Headings",
      type: TextInput(),
    }),
    commentors: List({
      label: "Commentors",
      type: TextInput(),
    }),
    comments: List({
      label: "Comments",
      type: TextInput(),
    }),
  },
});

isShapermint &&
  ReactRuntime.registerComponent(PromotionCountdown, {
    type: "promotion-countdown",
    label: "PromotionCountdown",
    props: {
      timerTitleColor: TextInput({
        label: "Timer Title Color",
        defaultValue: "#000000",
      }),
      backgroundColor: TextInput({
        label: "Background Color",
        defaultValue: "#fafafa",
      }),
      hours: Number({
        label: "Hours",
        defaultValue: 6,
      }),
      minutes: Number({
        label: "Minutes",
        defaultValue: 30,
      }),
      seconds: Number({
        label: "Seconds",
        defaultValue: 45,
      }),
      promotionText: TextInput({
        label: "Promotion Text",
        defaultValue: "THIS DEAL ENDS IN:&nbsp",
      }),
      ctaBackgroundColor: TextInput({
        label: "CTA Background Color",
        defaultValue: "#CC4125",
      }),
      ctaText: TextInput({
        label: "CTA Text",
        defaultValue: "But Now!",
      }),
      text: TextInput({
        label: "Text",
        defaultValue: "Text goes here",
      }),
      titleText: TextInput({
        label: "Title Text",
        defaultValue: "Section Title Text",
      }),
      titleTextColor: TextInput({
        label: "Reverse Order",
        defaultValue: "#000000",
      }),
      endDate: TextInput({
        label: "End Date",
        defaultValue: "02/02/2022",
      }),
      titleTextOverrideFontSize: TextInput({
        label: "Title Text Override Font Size",
      }),
      textOverrideFontSize: TextInput({
        label: "Text Override Font Size",
      }),
      ctaLink: TextInput({
        label: "CTA Link",
        defaultValue: "https://shapermint.com",
      }),
      headerBackgroundColor: TextInput({
        label: "Header Background Color",
        defaultValue: "#fafafa",
      }),
    },
  });

isShapermint &&
  ReactRuntime.registerComponent(FooterSection, {
    type: "standard-footer",
    label: "Shapermint Footer",
  });

ReactRuntime.registerComponent(Spacer, {
  type: "spacer-section",
  label: "White Space",
  props: {
    desktopHeight: TextInput({
      label: "Desktop Space",
      defaultValue: "0",
    }),
    mobileHeight: TextInput({
      label: "Mobile Space",
      defaultValue: "0",
    }),
    backgroundColor: TextInput({
      label: "Background Color",
      defaultValue: "inherit",
    }),
  },
});

ReactRuntime.registerComponent(ListicleParagraphSection, {
  type: "listicle-paragraph-section",
  label: "Listicle Paragraph Section",
  props: {
    title: TextInput({
      label: "Title",
      defaultValue: "Listicle Title",
    }),
    desktopDescription: TextInput({
      label: "Desktop Description",
      defaultValue: "This text is only visible on desktop/ tablet",
    }),
    mobileDescription: TextInput({
      label: "Mobile Description",
      defaultValue: "This text is only visible on mobile",
    }),
  },
});

ReactRuntime.registerComponent(AdvertorialSection, {
  type: "advertorial-section",
  label: "Advertorial Section",
  props: {
    desktopHeading: TextInput({
      label: "Desktop Heading",
      defaultValue: "Desktop Heading",
    }),
    mobileHeading: TextInput({
      label: "Mobile Heading",
      defaultValue: "Mobile Heading",
    }),
    desktopDescription: TextInput({
      label: "Desktop Description",
      defaultValue: "Desktop description",
    }),
    mobileDescription: TextInput({
      label: "Mobile Description",
      defaultValue: "Mobile description",
    }),

    backgroundColor: TextInput({
      label: "Background Color",
      defaultValue: "#ffffff",
    }),
    desktopBackground: TextInput({
      label: "Desktop Background",
    }),
    tabletBackground: TextInput({
      label: "Tablet Background",
    }),
    mobileBackground: TextInput({
      label: "Mobile Background",
    }),
    ctaText: TextInput({
      label: "CTA Text",
      defaultValue:
        "<span style='color:#ffffff;font-weight:600;font-size:20px;'>SHOP NOW</span>",
    }),
    ctaLink: TextInput({
      label: "CTA Link",
    }),
  },
});

ReactRuntime.registerComponent(StickyCTAMobile, {
  type: "sticky-cta-mobile",
  label: "Sticky CTA (Mobile)",
  props: {
    buttonText: TextInput({
      label: "Button Text",
      defaultValue: "SHOP NOW",
    }),
    buttonCta: TextInput({
      label: "CTA",
      defaultValue: "/",
    }),
    position: TextInput({
      label: "Position",
      defaultValue: "0",
    }),
    startingPosition: Number({
      label: "Mobile Description",
      defaultValue: 300,
    }),
    endingPosition: Number({
      label: "Mobile Description",
      defaultValue: 3400,
    }),
  },
});

ReactRuntime.registerComponent(LandingHeaderCTA, {
  type: "landing-header-cta",
  label: "Landing Header CTA",
  props: {
    title: TextInput({
      label: "Title",
      defaultValue: "x @alittlebitoftrish",
    }),
    ctaLink2: TextInput({
      label: "CTA Link",
      defaultValue: "/",
    }),
    ctaLink: TextInput({
      label: "Menu Link",
      defaultValue: "https://shapermint.com",
    }),
    linkText: TextInput({
      label: "Link Text",
      defaultValue: "Go to Shapermint.com",
    }),
    icon: TextInput({
      label: "Icon",
      defaultValue:
        "https://cdn.shopify.com/s/files/1/0021/4889/2732/files/lp-nav-arrow.svg",
    }),
  },
});

ReactRuntime.registerComponent(AuthorSection, {
  type: "author-section",
  label: "Author Section",
  props: {
    authorName: TextInput({
      label: "Author name",
      defaultValue: "Daniela Diaries",
    }),
    subDetail: TextInput({
      label: "Designation",
      defaultValue: "Fashion Influencer",
    }),
    profileLink: TextInput({
      label: "Profile Link",
      defaultValue:
        "https://cdn.shopify.com/s/files/1/0021/4889/2732/files/Place_image_here_56031b05-1002-490b-b97a-f54b182957ad.png?v=1683016856",
    }),
  },
});
