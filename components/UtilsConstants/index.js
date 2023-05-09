import { getLegacyDomain, parsePriceToNumber } from "../Utils";
import { getItemId } from "../UtilsObjectProperties";

export const REVIEWS_MODAL_KEYS = {
  QUESTION_FORM: "QUESTION_FORM",
  REVIEW_FORM: "REVIEW_FORM",
  QUESTION_TAB: "QUESTION_TAB",
};

export const ICONS_CLUB_MEMBERSHIP_BANNER = [
  {
    iconName: "FreeShipping",
    iconTitle: "Free Shipping & <br/> 90 Days Guarantee",
  },
  {
    iconName: "PersonalStylist",
    iconTitle: "24/7 Access to a <br/> Personal Stylist",
  },
  {
    iconName: "StyleFashionContent",
    iconTitle: "Exclusive style & <br/> fashion content",
  },
  {
    iconName: "MembersOnlyDiscountOpposite",
    iconTitle: "Member-only discount <br/> (up-to 75% off!)",
  },
];

export const CANCELLATION_FLOW_STAGES = {
  _1: "1",
  _2: "2",
  _3: "3",
  _4: "4",
  _ACCEPT_COUPON: "3.1",
  _ACCEPTED_COUPON: "3.2",
};

export const CLUB_BENEFITS = [
  {
    icon: "VIP",
    label: "VIP CONTENT",
    link: `https://store.shapermint.com/blogs/exclusive-content`,
  },
  {
    icon: "DealsOffers",
    label: "EXCLUSIVE DEALS & OFFERS",
    link: "",
  },
  {
    icon: "PersonalStylist",
    label: "DEDICATED SHAPEWEAR ADVISOR",
    link: "",
  },
  {
    icon: "Community",
    label: "COMMUNITY",
    link: "https://www.facebook.com/shapermintIN/community",
  },
  {
    icon: "Profile",
    label: "PROFILE",
    link: "/account?view=information",
  },
  {
    icon: "FreeShipping",
    label: "FREE SHIPPING & EXCLUSIVE DEALS",
    link: `${getLegacyDomain()}/collections/club-exclusive-deals`,
  },
  {
    icon: "PersonalStylist",
    label: "DEDICATED SHAPEWEAR ADVISOR",
    link: "",
  },
];

export const CLUB_BENEFITS_YOU_WILL_LOSE = [
  {
    icon: "Community",
    label: "SHAPERMINT CLUB COMMUNITY",
    link: "https://www.facebook.com/shapermintIN/community",
  },
  {
    icon: "DealsOffers",
    label: "UP TO 75% OFF REGULAR PRICES",
    link: "/collections/club-exclusive-deals",
  },
  {
    icon: "PersonalStylist",
    label: "24/7 PERSONAL STYLIST",
    link: "",
  },
  {
    icon: "VIP",
    label: "EXCLUSIVE CLUB CONTENT",
    link: "https://store.shapermint.com/blogs/exclusive-content",
  },
  {
    icon: "FreeShipping",
    label: "FREE SHIPPING",
    link: "/pages/club-membership-subscription",
  },
  {
    icon: "PriorityShipping",
    label: "PRIORITY SHIPPING",
    link: "/pages/club-membership-subscription",
  },
];

export const MEMBERSHIP_CANCELLATION_REASONS = [
  {
    key: "1",
    label: "Unhappy with the prices or values offered",
    value: "",
    disabled: false,
  },
  {
    key: "2",
    label: "Not aware of the membership",
    value: "",
    disabled: false,
  },
  {
    key: "3",
    label: "Don’t see the value in the membership program",
    value: "",
    disabled: false,
  },
  {
    key: "4",
    label: "Unhappy with the product quality or fit",
    value: "",
    disabled: false,
  },
  {
    key: "5",
    label: "Unhappy with the service (Shipping / Customer Support)",
    value: "",
    disabled: false,
  },
  {
    key: "6",
    label: "Pricing Issues / Can’t afford",
    value: "",
    disabled: false,
  },
  { key: "7", label: "Others", value: "", disabled: false },
];

export const MEMBERSHIP_LOSE_BENEFITS = [
  "FREE <b>priority shipping</b> - Save $9.95 on EVERY purchase!",
  "Items as low as <b>$5.99</b>",
  "<b>Freebies</b> each month.",
  "<b>Extra benefits</b> on your birthday.",
  "<b>FREE returns</b> up to 90 days",
];

export const BODCOM_FREE_ACCESS = [
  "<b>FREE and PREMIUM</b> access to The BodCon Community App.",
  "The #1 Body Confidence Community. You'll have <b>FREE access to:</b>",
  "<ul><li>Our confidence series: great courses made by the top influencers in the field, just for you to start your body-confidence journey!</li><li>Our more than 1.000 women's community and get-togethers to talk about women's empowerment.</li></ul>",
  "<b>FREE</b> access to The BodCon 2023 replays! Empower yourself and change how you see and feel about your body forever.",
];

export const SORT_OPTIONS = [
  { key: "Featured", label: "Featured", value: "", disabled: false },
  {
    key: "Price: Low-High",
    label: "Price: Low-High",
    value: "price-ascending",
    disabled: false,
  },
  {
    key: "Price: High-Low",
    label: "Price: High-Low",
    value: "price-descending",
    disabled: false,
  },
  {
    key: "Best Selling",
    label: "Best Selling",
    value: "best-selling",
    disabled: false,
  },
  {
    key: "New Arrivals",
    label: "New Arrivals",
    value: "new-arrivals",
    disabled: false,
  },
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const BLOG_CATEGORIES = [
  {
    label: "Blog Home",
    alias: "blogHome",
  },
  {
    label: "Lifestyle + Wellness",
    value: ["Cat_lifestyle-wellness", "Cat_lifestyle"],
    alias: "lifestyleWellness",
  },
  {
    label: "Fashion & Beauty",
    value: ["Cat_fashion-beauty", "Cat_fashion"],
    alias: "fashionBeauty",
  },
  {
    label: "Crew Love Series",
    value: ["Cat_crewloveseries", "Cat_crew-love-series", "Cat_stories"],
    alias: "crewLoveSeries",
  },
  {
    label: "Shapermint News",
    value: ["Cat_shapermint-news"],
    alias: "shapermintNews",
  },
];

export const CANCELLATION_FLOW_CARD_DATA = [
  {
    id: 1,
    imgURL:
      "//cdn.shopify.com/s/files/1/0021/4889/2732/files/Truekind_Everyday_Bralette.jpg?v=1681811247",
    brand: "SHAPERMINT",
    description: "Truekind Everyday Bralette",
    offer: "<b>ONLY $8.99</b> <small>+ mistery gift</small>",
    cta: "Redeem offer",
    url: "https://shapermint.com/products/truekind-everyday-bralette-club?variant=40127451758726&utm_content=clubcancel",
  },
  {
    id: 2,
    imgURL:
      "//cdn.shopify.com/s/files/1/0021/4889/2732/files/Shapermint_Essentials_Shaper_Boyshort.jpg?v=1681811247",
    brand: "SHAPERMINT",
    description: "Essentials  Shaper Boyshorts",
    offer: "<b>ONLY $7.99</b> <small>+ mistery gift</small>",
    cta: "Redeem offer",
    url: "https://shapermint.com/products/shapermint-essentials-shaping-boyshort-club?variant=40127455330438&utm_content=clubcancel",
  },
  {
    id: 3,
    imgURL:
      "//cdn.shopify.com/s/files/1/0021/4889/2732/files/Revel_Beauty_Serum.jpg?v=1681811257",
    brand: "REVEL BEAUTY",
    description: "Beauty Lift and Tighten Serum",
    offer: "<b>$10 OFF</b>",
    cta: "Redeem offer",
    url: "https://revelbeauty.com/products/lift-tighten-serum",
    code: "CLUBFRIENDS",
  },
  {
    id: 4,
    imgURL:
      "//cdn.shopify.com/s/files/1/0021/4889/2732/files/Revel_Beauty_Store.jpg?v=1681811246",
    brand: "REVEL BEAUTY",
    description: "Orders above $50",
    offer: "<b>FREE SHIPPING</b>",
    cta: "Redeem offer",
    url: "https://revelbeauty.com/",
    code: "SHIPPINGONUS",
  },
  {
    id: 5,
    imgURL:
      "//cdn.shopify.com/s/files/1/0021/4889/2732/files/4-Step_Skincare_System.jpg?v=1681811253",
    brand: "THE SPA DR",
    description: "Daily Essentials 4-Step Skin Care System",
    offer: "<b>25% OFF</b>",
    cta: "Redeem offer",
    url: "https://thespadr.com/products/daily-essentals-4-step-system?variant=42658350727366",
    code: "SHMCLUBFRIENDS",
  },
  {
    id: 6,
    imgURL:
      "//cdn.shopify.com/s/files/1/0021/4889/2732/files/Nourish_Antioxidant_Serum.jpg?v=1681811253",
    brand: "THE SPA DR",
    description: "Nourish Antioxidant Serum",
    offer: "<b>$10 OFF</b>",
    cta: "Redeem offer",
    url: "https://thespadr.com/products/antioxidant-serum?variant=15992476860510",
    code: "SHMCLUB10OFF",
  },
];

export const BLOG_CATEGORY_FILTERS = ["All", "Popular", "Trending", "Recent"];

export const CHECKOUT_PAYLOAD = {
  CARTABBLE: {
    price(value) {
      if (typeof value === "string") {
        return parsePriceToNumber(value);
      }

      return this.price(value.toFixed(2));
    },
    cart(cart, items, common) {
      return {
        token: common.token,
        note: cart.note || null,
        attributes: cart.attributes || {},
        original_total_price: this.price(common.totalPrice),
        total_price: this.price(common.totalPrice),
        total_discount: this.price(common.totalDiscount),
        total_weight: 0,
        item_count: common.itemsCount,
        items,
        requires_shipping: true,
        currency: cart.currencyCode,
        items_subtotal_price: this.price(common.subtotalPrice),
        cart_level_discount_applications: [],
        currency_ratio: common.currencyRatio,
      };
    },
    product(item, variant, common) {
      return {
        id: getItemId(/** @type { string } */ (variant.id)),
        tags: common.tags,
        properties: common.properties,
        quantity: item.quantity,
        variant_id: getItemId(/** @type { string } */ (variant.id)),
        key: "",
        title: common.name,
        discounted_price: this.price(common.discountedUnitPrice),
        final_line_price: this.price(common.discountedTotalPrice),
        final_price: this.price(common.discountedUnitPrice),
        line_price: this.price(common.discountedTotalPrice),
        original_line_price: this.price(common.price * item.quantity),
        original_price: this.price(common.price),
        price: this.price(common.price),
        total_discount: this.price(common.totalDiscounts),
        discounts: common.discounts.map((discount) => ({
          title: discount.title,
          amount: this.price(discount.amount),
        })),
        sku: variant.sku,
        grams: variant.weight,
        vendor: common.vendor,
        taxable: true,
        product_id: getItemId(variant.product.id),
        product_has_only_default_variant: false,
        gift_card: false,
        url: "",
        featured_image: {
          aspect_ratio: 0,
          alt: variant.image.altText,
          height: 0,
          url: variant.image.src,
          width: 0,
        },
        image: variant.image.src,
        handle: variant.product.handle,
        requires_shipping: true,
        product_type: common.type,
        product_title: item.title,
        product_description: "",
        variant_title: variant.title,
        variant_options: variant.selectedOptions.map((option) => option.value),
        options_with_values: variant.selectedOptions,
        line_level_discount_allocations: [],
        line_level_total_discount: common.totalDiscounts,
      };
    },
  },
  HEADLESS: {
    price(value, decimals = 2) {
      if (typeof value === "string") {
        return parseFloat(value);
      }

      // This garantees we're always sending 2 decimal by default
      // 19.99 instead of 19.98737432472346237
      return this.price(value.toFixed(decimals));
    },
    cart(cart, items, common) {
      return {
        vendor: "shopify", // TODO: undo this hardcoding, but don't get from the product info! product.vendor is not the content that needs to be sent here, unfortunate name collision
        shop: items[0].shop || "shapermint",
        token: common.token,
        data: {
          currency: cart.currencyCode,
          currency_ratio: this.price(common.currencyRatio),
          country_code: cart.countryCode,
          // @todo: we don't have it
          email: "shogun@trafilea.com",
          items,
        },
      };
    },
    product(item, variant, common) {
      const metafieldsAttribute = item.customAttributes.find(
        (attr) => attr.key === "metafields"
      ) || { value: "[]" };

      const metafields = JSON.parse(metafieldsAttribute.value);

      const volumeDiscountMetafield =
        metafields.find((field) => field.key === "volume_discounts") != null;

      const hasVolumeDiscount =
        item.discountAllocations.length > 0 && volumeDiscountMetafield;

      const pack = variant.selectedOptions.find((o) => o.name === "Pack");

      const bundleProductAttribute =
        !!item?.customAttributes?.length &&
        item?.customAttributes?.find((attr) => attr.key === "bundleProduct")
          ?.value !== "{}";

      const discount_type = () => {
        if (hasVolumeDiscount) {
          return "VD";
        } else if (pack) {
          return "PACK";
        } else if (bundleProductAttribute) {
          return "BUNDLE";
        } else {
          return null;
        }
      };

      const discount_label = () => {
        if (hasVolumeDiscount || bundleProductAttribute) {
          return "BUNDLE APPLIED";
        } else if (pack) {
          return `${pack.value} Bundle`;
        } else {
          return null;
        }
      };

      return {
        type: common.type,
        product_id: getItemId(/** @type { string } */ (variant.product.id)),
        variant_id: getItemId(/** @type { string } */ (variant.id)),
        product_uuid: variant.product.id,
        variant_uuid: variant.id,
        sku: variant.sku,
        name: common.name,
        description: variant.title,
        quantity: item.quantity,
        image_url: variant.image.src,
        vendor: common.vendor,
        shop: common.shop,
        discounts_total: this.price(common.totalDiscounts),
        discount_type: discount_type(),
        discount_label: discount_label(),
      };
    },
  },
};

export const CHECKOUT_COOKIES = [
  "fbclid",
  "anonymous_id",
  "ga_client_id",
  "gclid",
  "ajs_anonymous_id",
  "_fbp",
  "_fbc",
];

export const SHOP_BY_STYLES_FILTER = {
  title: "Shop by Style",
  columns: 1,
  filter: "LINK_ITEM",
  isMultiselect: false,
  options: [
    {
      label: "Panties",
      link: "/collections/panties?shop-by-style=panties",
      blockUncheck: true,
    },
    {
      label: "Shorts",
      link: "/collections/shorts?shop-by-style=shorts",
      blockUncheck: true,
    },
    {
      label: "Leggings",
      link: "/collections/leggings?shop-by-style=leggings",
      blockUncheck: true,
    },
    {
      label: "Bras",
      link: "/collections/bras?shop-by-style=bras",
      blockUncheck: true,
    },
    {
      label: "Underwear",
      link: "/collections/underwear?shop-by-style=underwear",
      blockUncheck: true,
    },
    {
      label: "Tanks and Camis",
      link: "/collections/tanks-camis?shop-by-style=tanks+and+camis",
      blockUncheck: true,
    },
    {
      label: "Bodysuits",
      link: "/collections/bodysuits?shop-by-style=bodysuits",
      blockUncheck: true,
    },
    {
      label: "Slips",
      link: "/collections/slips?shop-by-style=slips",
      blockUncheck: true,
    },
    {
      label: "Hosiery",
      link: "/collections/hosiery?shop-by-style=hosiery",
      blockUncheck: true,
    },
    {
      label: "Swimwear",
      link: "/collections/swimwear?shop-by-style=swimwear",
      blockUncheck: true,
    },
    {
      label: "Packs & Bundles",
      link: "/collections/packs-and-bundles",
      blockUncheck: true,
    },
  ],
  showInMobile: false,
};

export const STANDARD_REVIEWS_AVERAGE = 4.5;
export const STANDARD_REVIEWS_QUANTITY = 100;

export const ENVIRONMENT_NAME = {
  SHAPERMINT: "Shapermint",
  SHAPERMINT_DEVELOP: "Shapermint - Development",
  SHAPERMINT_STAGING: "Shapermint - Staging",
  SHAPERMINT_STAGING_CANADA: "Shapermint - Staging Canada",
  SHAPERMINT_CANADA: "Shapermint - Canada",
  SHAPERMINT_AUSTRALIA: "Shapermint - Australia",
  SHAPERMINT_UK: "Shapermint - UK",
};

export const DEFAULT_COUNTRY_CODE = "US";

export const COUNTRY_CODE_BY_ENVIRONMENT = {
  [ENVIRONMENT_NAME.SHAPERMINT]: DEFAULT_COUNTRY_CODE,
  [ENVIRONMENT_NAME.SHAPERMINT_DEVELOP]: DEFAULT_COUNTRY_CODE,
  [ENVIRONMENT_NAME.SHAPERMINT_STAGING]: DEFAULT_COUNTRY_CODE,
  [ENVIRONMENT_NAME.SHAPERMINT_STAGING_CANADA]: "CA",
  [ENVIRONMENT_NAME.SHAPERMINT_CANADA]: "CA",
  [ENVIRONMENT_NAME.SHAPERMINT_AUSTRALIA]: "AU",
  [ENVIRONMENT_NAME.SHAPERMINT_UK]: "GB",
};

export const CROSSELL_QUANTITY = 1;
export const ADD_TO_CART_BTN_TEXT = "ADD TO CART";
export const DEFAULT_CROSSELL_SIZE_ON_COLOR_CHANGE = {
  key: "M",
  value: "M",
  label: "M",
  disabled: "M",
};

export const DEFAULT_VWO_CODE = "350623";

export const VWO_CODE_BY_ENVIRONMENT = {
  [ENVIRONMENT_NAME.SHAPERMINT]: DEFAULT_VWO_CODE,
  [ENVIRONMENT_NAME.SHAPERMINT_DEVELOP]: "408412",
  [ENVIRONMENT_NAME.SHAPERMINT_STAGING]: "408412",
  [ENVIRONMENT_NAME.SHAPERMINT_STAGING_CANADA]: "408412",
  [ENVIRONMENT_NAME.SHAPERMINT_CANADA]: DEFAULT_VWO_CODE,
  [ENVIRONMENT_NAME.SHAPERMINT_AUSTRALIA]: DEFAULT_VWO_CODE,
  [ENVIRONMENT_NAME.SHAPERMINT_UK]: DEFAULT_VWO_CODE,
};

export const TOP_FREE_GIFT_PRICE = 70;

export const ORDER_NUMBER_HELP_LINK =
  "https://help.shapermint.com/hc/en-us/articles/900002285803-How-do-I-find-my-Shapermint-order-number-?_ga=2.14738548.396359174.1656918084-281193631.1644845574";

export const SHM_CLUB_MEMBERSHIP_PAYLOAD_FOR_SHAPEES = {
  id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDk0MjcxNDg0NzQwNA==",
  quantity: 1,
  customAttributes: [
    {
      key: "tags",
      value:
        '["cartabble_checkout","carthook_checkout","hidden","hidden-recomendation","membership-trial","shapermint club membership","subscription_club_membership","type_shapermint club membership","UNDER $25","vendor_Shapermint"]',
    },
    {
      key: "metafields",
      value: JSON.stringify([]),
    },
    {
      key: "vendor",
      value: "shopify",
    },
    { key: "shop", value: "shapees" },
    { key: "type", value: "Shapermint Club Membership" },
    { key: "crossell_product", value: JSON.stringify([]) },
    { key: "bundleProduct", value: "{}" },
    { key: "clubMemberShipAtPdp", value: "active" },
  ],
};

export const SHM_CLUB_MEMBERSHIP_PAYLOAD_FOR_PRODUCTION = {
  id: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MDA4NTE2NjgxNzQxNA==",
  quantity: 1,
  customAttributes: [
    {
      key: "tags",
      value:
        '["cartabble_checkout","carthook_checkout","headless_checkout","hidden","hidden-recomendation","membership-trial","subscription_club_membership","under $25"]',
    },
    {
      key: "metafields",
      value: JSON.stringify([]),
    },
    {
      key: "vendor",
      value: "shopify",
    },
    { key: "shop", value: "shapermint" },
    { key: "type", value: "Shapermint Club Membership" },
    { key: "crossell_product", value: JSON.stringify([]) },
    { key: "bundleProduct", value: "{}" },
    { key: "clubMemberShipAtPdp", value: "active" },
  ],
};
