import { Menu } from "../types";

export const footerBottomMenu: Menu = {
  menuLinks: [
    {
      name: "Terms & Conditions",
      slug: "terms-and-conditions",
      externalLink:
        "https://shapermint.com/pages/shapermint-terms-and-conditions",
      label: "Terms & Conditions",
    },
    {
      name: "Reviews",
      slug: "reviews",
      externalLink: "https://shapermint.com/pages/reviews",
      label: "Reviews",
    },
    {
      name: "Coupons",
      slug: "coupons",
      externalLink: "https://shapermint.com/pages/shapermint-coupons",
      label: "Coupons",
    },
    {
      name: "Sale",
      slug: "sale",
      label: "Sale",
    },
    {
      name: "Do not sell",
      slug: "do-not-sell",
      externalLink: "https://shapermint.com/pages/do-not-sell-form",
      label: "Do not sell",
    },
  ],
  name: "Footer - Bottom Menu",
};

export const footerMainMenu: Menu = {
  menuLinks: [
    {
      name: "Shapermint Info",
      label: "Shapermint Info",
      subMenuLinks: [
        {
          name: "About Us",
          label: "About Us",
          slug: "about-us",
        },
        {
          name: "Ambassador",
          label: "Ambassador",
          slug: "ambasador",
          externalLink:
            "https://shapermint.com/pages/ambassador?utm_source=footer",
        },
        {
          name: "Blog",
          label: "Blog",
          slug: "blog",
        },
        {
          name: "Refer a Friend",
          label: "Refer a Friend",
          slug: "about-us",
          externalLink:
            "https://shapermint.com/pages/share?traffic_source=footer",
        },
      ],
    },
    {
      name: "Customer Care",
      label: "Customer Care",
      subMenuLinks: [
        {
          name: "Help Center",
          label: "Help Center",
          slug: "help-center",
        },
        {
          name: "Exchange And Returns",
          label: "Exchange & Returns",
          slug: "exchange-and-returns",
          externalLink: "https://shapermint.com/pages/exchanges-and-returns",
        },
        {
          name: "Shipping",
          label: "Shipping",
          slug: "shipping",
          externalLink:
            "https://help.shapermint.com/hc/en-us/categories/360000369613-Shipping?_ga=2.170643616.127566658.1644171868-25061223.1644171868",
        },
        {
          name: "Contact Us",
          label: "Contact Us",
          slug: "contact-us",
          externalLink:
            "https://help.shapermint.com/hc/en-us/requests/new?_ga=2.170643616.127566658.1644171868-25061223.1644171868",
        },
        {
          name: "Privacy Policy",
          label: "Privacy Policy",
          slug: "privacy-policy",
          externalLink:
            "https://shapermint.com/pages/shapermint-terms-and-conditions#privacy-policy",
        },
      ],
    },
  ],
  name: "Footer - Main Menu",
};

export const socialsMenu: Menu = {
  menuLinks: [
    {
      name: "Social - Instagram",
      label: "Instagram",
      slug: "social-instagram",
      externalLink: "https://www.instagram.com/shapermint",
    },
    {
      name: "Social - Facebook",
      label: "Facebook",
      slug: "social-facebook",
      externalLink: "https://www.facebook.com/Shapermint",
    },
    {
      name: "Social - YouTube",
      label: "Youtube",
      slug: "social-youtube",
      externalLink: "https://www.youtube.com/channel/UCsNp0hhTl-p_cnsxOZg7MZw",
    },
    {
      name: "Social - Twitter",
      label: "Twitter",
      slug: "social-twitter",
      externalLink: "https://twitter.com/shapermint",
    },
    {
      name: "Social - Pinterest",
      label: "Pinterest",
      slug: "social-pinterest",
      externalLink: "https://pinterest.com/shapermint/",
    },
  ],
  name: "Socials Menu",
};
