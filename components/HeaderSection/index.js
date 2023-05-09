import React from "react";
import Header from "../Header";
import HeaderPromotionBar from "../HeaderPromotionBar";

const secondaryMenu = {
  menuLinks: [
    {
      hideOn: "mobile",
      name: "Navigation/Search",
      externalLink: "/search?q=&type=product",
      slug: "search",
      label: "Search",
    },
    {
      name: "Navigation/User",
      externalLink: "/account/login",
      slug: "user",
      label: "Login / Create Account",
    },
    {
      name: "Messaging/QuestionCircle",
      externalLink:
        "https://help.shapermint.com/hc/en-us?_ga=2.253490314.2091602041.1644256821-1247019823.1637957589",
      slug: "question",
      label: "Help Center",
    },
  ],
  name: "Header - Secondary Menu",
};

const mainMenu = {
  menuLinks: [
    {
      name: "Shapewear",
      externalLink: "/collections/shapewear",
      subMenuLinks: [
        {
          name: "Shop by Category",
          image:
            "https://cdn.shopify.com/s/files/1/0021/4889/2732/files/Shapermint_Menu1.jpg?v=1679486845",
          externalLink: "/collections/shapewear",
          subMenuLinks: [
            {
              name: "Panties",
              image:
                "https://cdn.shopify.com/s/files/1/0021/4889/2732/files/panties_shopbycategory.jpg?v=1649698648",
              externalLink: "/collections/panties",
              subMenuLinks: [],
              slug: "/collections/panties",
              label: "Panties",
            },
            {
              name: "Shorts",
              image:
                "https://cdn.shopify.com/s/files/1/0021/4889/2732/files/shorts_shopbycategory.jpg?v=1649698729",
              externalLink: "/collections/shorts",
              subMenuLinks: [],
              slug: "/collections/shorts",
              label: "Shorts",
            },
            {
              name: "Underwear",
              image:
                "https://cdn.shopify.com/s/files/1/0021/4889/2732/files/Shapermint_Menu2.jpg?v=1679486845",
              externalLink: "/collections/underwear",
              subMenuLinks: [],
              slug: "/collections/underwear",
              label: "Underwear",
            },
            {
              name: "Bodysuits",
              image:
                "https://cdn.shopify.com/s/files/1/0021/4889/2732/files/bodysuits_shopbycategory.jpg?v=1649698846",
              externalLink: "/collections/bodysuits",
              subMenuLinks: [],
              slug: "/collections/bodysuits",
              label: "Bodysuits",
            },
            {
              name: "Leggings",
              image:
                "https://cdn.shopify.com/s/files/1/0021/4889/2732/files/shogun-new-shop-by-category-leggings.png?v=1661758772",
              highlighted: false,
              externalLink: "/collections/leggings",
              subMenuLinks: [],
              slug: "/collections/leggings",
              label: "Leggings",
            },
            {
              name: "New Arrivals",
              image:
                "https://cdn.shopify.com/s/files/1/0021/4889/2732/files/New_Arrivals.jpg?v=1679085713",
              externalLink: "/collections/new-arrivals",
              subMenuLinks: [],
              slug: "/collections/new-arrivals",
              label: "New Arrivals",
            },
            {
              name: "Packs & Bundles",
              image:
                "https://cdn.shopify.com/s/files/1/0021/4889/2732/files/packsandbundles_shopbycategory.jpg?v=1649698941",
              externalLink: "/collections/packs-and-bundles",
              subMenuLinks: [],
              slug: "/collections/packs-and-bundles",
              label: "Packs & Bundles",
            },
            {
              name: "Clearance",
              image:
                "https://cdn.shopify.com/s/files/1/0021/4889/2732/files/Shapermint_Menu1.jpg?v=1679486845",
              highlighted: true,
              externalLink: "/collections/clearance",
              subMenuLinks: [],
              slug: "/collections/clearance",
              label: "Clearance",
            },
            {
              name: "Core Essentials",
              image:
                "https://cdn.shopify.com/s/files/1/0021/4889/2732/files/coreessentials_shopbycategory.jpg?v=1649698994",
              externalLink: "/collections/core-essentials",
              subMenuLinks: [],
              slug: "/collections/core-essentials",
              label: "Core Essentials",
            },
          ],
          slug: "/collections/clearance",
          label: "Shop by Category",
        },
        {
          name: "Shop by Control Area",
          externalLink: "",
          subMenuLinks: [
            {
              name: "Thighs",
              externalLink: "/collections/shapewear?control-area=ctr_thighs",
              subMenuLinks: [],
              slug: "/collections/shapewear?control-area=ctr_thighs",
              label: "Thighs",
            },
            {
              name: "Butt",
              externalLink: "/collections/shapewear?control-area=ctr_butt",
              subMenuLinks: [],
              slug: "/collections/shapewear?control-area=ctr_butt",
              label: "Butt",
            },
            {
              name: "Back",
              externalLink: "/collections/shapewear?control-area=ctr_back",
              subMenuLinks: [],
              slug: "/collections/shapewear?control-area=ctr_back",
              label: "Back",
            },
            {
              name: "Legs",
              externalLink: "/collections/shapewear?control-area=ctr_legs",
              subMenuLinks: [],
              slug: "/collections/shapewear?control-area=ctr_legs",
              label: "Legs",
            },
            {
              name: "Torso",
              externalLink: "/collections/shapewear?control-area=ctr_torso",
              subMenuLinks: [],
              slug: "/collections/shapewear?control-area=ctr_torso",
              label: "Torso",
            },
            {
              name: "Tummy",
              externalLink: "/collections/shapewear?control-area=ctr_tummy",
              subMenuLinks: [],
              slug: "/collections/shapewear?control-area=ctr_tummy",
              label: "Tummy",
            },
            {
              name: "Waist",
              externalLink: "/collections/shapewear?control-area=ctr_waist",
              subMenuLinks: [],
              slug: "/collections/shapewear?control-area=ctr_waist",
              label: "Waist",
            },
            {
              name: "Hips",
              externalLink: "/collections/shapewear?control-area=ctr_hips",
              subMenuLinks: [],
              slug: "/collections/shapewear?control-area=ctr_hips",
              label: "Hips",
            },
            {
              name: "All Over",
              externalLink: "/collections/shapewear?control-area=ctr_allover",
              subMenuLinks: [],
              slug: "/collections/shapewear?control-area=ctr_allover",
              label: "All Over",
            },
          ],
          slug: "",
          label: "Shop by Control Area",
        },
        {
          name: "Shop by Brands",
          externalLink: "",
          subMenuLinks: [
            {
              name: "Shapermint Essentials",
              externalLink: "/collections/shapermint-essentials",
              subMenuLinks: [],
              slug: "/collections/shapermint-essentials",
              label: "Shapermint Essentials",
            },
            {
              name: "Bali",
              externalLink: "/collections/bali",
              subMenuLinks: [],
              slug: "/collections/bali",
              label: "Bali",
            },
            {
              name: "Truekind",
              externalLink: "/collections/truekind",
              subMenuLinks: [],
              slug: "truekind",
              label: "Truekind",
            },
            {
              name: "Champion",
              externalLink: "/collections/champion-sports-bras",
              subMenuLinks: [],
              slug: "/collections/champion-sports-bras",
              label: "Champion",
            },
            {
              name: "Wacoal",
              externalLink: "/collections/wacoal",
              subMenuLinks: [],
              slug: "/collections/wacoal",
              label: "Wacoal",
            },
            {
              name: "Maidenform",
              externalLink: "/collections/maidenform",
              subMenuLinks: [],
              slug: "maidenform",
              label: "Maidenform",
            },
            {
              name: "Hanes",
              externalLink: "/collections/hanes-hosiery",
              subMenuLinks: [],
              slug: "/collections/hanes-hosiery",
              label: "Hanes",
            },
            {
              name: "See All",
              externalLink: "/collections/shapewear",
              subMenuLinks: [],
              slug: "/collections/shapewear",
              label: "See All",
            },
          ],
          slug: "",
          label: "Shop by Brands",
        },
      ],
      slug: "shapewear",
      label: "Shapewear",
    },
    {
      name: "Bras",
      externalLink: "/collections/bras",
      subMenuLinks: [],
      slug: "/collections/bras",
      label: "Bras",
    },
    {
      name: "Underwear",
      image:
        "https://cdn.shopify.com/s/files/1/0021/4889/2732/files/underwear_shopbycategory.jpg?v=1649698786",
      externalLink: "/collections/underwear",
      subMenuLinks: [],
      slug: "/collections/underwear",
      label: "Underwear",
    },
    {
      name: "Swimwear",
      externalLink: "/collections/swimwear",
      subMenuLinks: [],
      slug: "/collections/swimwear",
      label: "Swimwear",
    },
    {
      name: "Camis",
      externalLink: "/collections/tanks-camis",
      subMenuLinks: [],
      slug: "/collections/tanks-camis",
      label: "Camis",
    },
    {
      name: "Packs & Bundles",
      image:
        "https://cdn.shopify.com/s/files/1/0021/4889/2732/files/packsandbundles_shopbycategory.jpg?v=1649698941",
      highlighted: false,
      externalLink: "/collections/packs-and-bundles",
      subMenuLinks: [],
      slug: "/collections/packs-and-bundles",
      label: "Packs & Bundles",
    },
    {
      name: "Best Sellers",
      externalLink: "/collections/best-sellers",
      subMenuLinks: [],
      slug: "best-sellers",
      label: "Best Sellers",
    },
    {
      name: "Sale",
      image: "",
      highlighted: true,
      externalLink: "/collections/mothers-day-sale",
      subMenuLinks: [],
      slug: "sale",
      label: "Mother’s Day Sale",
    },
    {
      name: "Community",
      externalLink: "/pages/about-us",
      subMenuLinks: [
        {
          name: "Shapermint Community",
          image:
            "https://cdn.shopify.com/s/files/1/0077/3645/9328/files/influencer_pciture.jpg?v=1593301620",
          externalLink: "",
          subMenuLinks: [
            {
              name: "About Us",
              externalLink: "/pages/about-us",
              subMenuLinks: [],
              slug: "/pages/about-us",
              label: "About Us",
            },
            {
              name: "The Blog",
              externalLink: "/blogs/news",
              subMenuLinks: [],
              slug: "/blogs/news",
              label: "The Blog",
            },
            {
              name: "Brand Ambassadors",
              externalLink: "/pages/ambassador",
              subMenuLinks: [],
              slug: "ambassador",
              label: "Brand Ambassadors",
            },
            {
              name: "Shapermint TV",
              externalLink:
                "https://store.shapermint.com/blogs/shapermint-tv-videos",
              subMenuLinks: [],
              slug: "shapermint-tv-videos",
              label: "Shapermint TV",
            },
            {
              name: "Shapermint CLUB",
              externalLink: "/pages/club-membership-subscription",
              subMenuLinks: [],
              slug: "club-membership-subscription",
              label: "Shapermint CLUB",
            },
            {
              name: "Shape The Future",
              externalLink: "/pages/shape-the-future",
              subMenuLinks: [],
              slug: "shape-the-future",
              label: "Shape The Future",
            },
          ],
          slug: "",
          label: "Shapermint Community",
        },
        {
          name: "Quote Section",
          image:
            "https://cdn.shopify.com/s/files/1/0077/3645/9328/files/influencer_pciture.jpg?v=1593301620",
          highlighted: false,
          externalLink: "/pages/ambassador",
          subMenuLinks: [
            {
              name: "Join Brand Ambassador",
              image: "",
              highlighted: false,
              externalLink: "/pages/ambassador",
              subMenuLinks: [],
              slug: "/pages/ambassador",
              label: "Join in the Brand Ambassador Program",
            },
          ],
          slug: "/pages/ambassador",
          label:
            "Learning to love all of me is the best thing I ever did.@karinaduconge",
        },
      ],
      slug: "community",
      label: "Community",
    },
  ],
  name: "Header - Main Menu",
};

const promotionContent = [
  {
    name: "FREE SHIPPING OVER $70 & FREE EXCHANGES",
  },
  {
    name: "Mother’s Day Sale",
    endsAt: "23:59",
  },
];

const HeaderSection = () => {
  return (
    <div
      data-show="desktop"
      id="headerWrap"
      style={{ position: "sticky", top: "0", zIndex: 48 }}>
      <HeaderPromotionBar content={promotionContent} />
      <Header mainMenu={mainMenu} secondaryMenu={secondaryMenu} />
    </div>
  );
};

export default HeaderSection;
