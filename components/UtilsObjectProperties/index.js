import {
  generateStorefrontId,
  getProductViewEcommercePayload,
} from "../UtilsProductsCollections";

/**
 * @param { string } storefrontId
 * @returns { number }
 */
export const getItemId = (storefrontId) => {
  if (typeof storefrontId === "number") {
    return storefrontId;
  }

  //storefrontId decoded example: gid://shopify/CheckoutLineItem/320570022626060?checkout=10e383b50e443ff8c5f7f54692723c87
  let decodedStorefrontId;

  try {
    decodedStorefrontId = atob(storefrontId);
    const id = decodedStorefrontId.split("/").pop()?.split("?")[0];

    return Number(id);
  } catch (error) {}

  return parseInt(storefrontId);
};

const CART_METAFIELDS = ["volume_discounts"];

/**
 * @param {{
 *   leadProduct?: import("lib/types").Product;
 *   product: import("lib/types").Product;
 *   variant: import("lib/types").Variation;
 *   quantity: number;
 * }} opts
 *
 * @returns { import('frontend-checkout').Item }
 */
export const getAddToCartPayload = ({
  leadProduct,
  product,
  variant,
  quantity,
}) => {
  const storefrontId = generateStorefrontId(variant.inventory_item_id);

  const metafields = product.metafields.filter((field) =>
    CART_METAFIELDS.includes(field.key)
  );

  const crossel_product = product.metafields.filter((field) => {
    return field.key === "crossel_products";
  });

  return {
    id: storefrontId,
    quantity,
    customAttributes: [
      { key: "tags", value: JSON.stringify(product.tags) },
      { key: "metafields", value: JSON.stringify(metafields) },
      { key: "vendor", value: product.vendor_product.vendor_id },
      { key: "shop", value: product.vendor_product.shop },
      { key: "type", value: product.type },
      {
        key: "crossell_product",
        value: !crossel_product[0]?.value
          ? JSON.stringify([])
          : JSON.stringify(JSON.parse(crossel_product[0]?.value)?.sideCart),
      },
      {
        key: "bundleProduct",
        value:
          leadProduct !== undefined
            ? JSON.stringify({
                lead_product_title: leadProduct?.title || "",
                lead_product_id: leadProduct?.id || "",
                timestamp: Date.now(),
                lead_product_handle: leadProduct?.slug || "",
                price:
                  leadProduct?.variations_definition.product_variations[0]
                    .price,
                compare_at_price:
                  leadProduct?.variations_definition.product_variations[0]
                    .compare_at_price,
                selectedVariantStorefrontId:
                  product["variantStorefrontIds"] || "",
              })
            : "{}",
      },
    ],
  };
};

/**
 * @typedef { import("lib/types").Product } Product
 * @typedef { import("lib/types").Variation } Variation
 * @param { Product } product
 */
export const getViewContentTrackingPayload = (product) => ({
  event: "enhanceEcom productView",
  ecommerce: {
    detail: {
      products: [
        {
          id: product.vendor_product.product_id,
          name: product.title,
          sku: product.vendor_product.variations[0].variation_id,
          price: product.variations_definition.product_variations[0].price,
          category: product.vendor_product.product_category,
          brand: product.vendor,
          quantity: "1",
          variant: product.vendor_product.variations[0].variation_sku,
          image: product.images[0]?.src,
        },
      ],
    },
  },
});

/**
 * @param { Product } product
 * @param { Variation } variant
 * @param { number } quantity
 */
export const getAddToCartTrackingPayload = (product, variant, quantity) => ({
  event: "enhanceEcom addToCart",
  ecommerce: {
    add: {
      products: [
        {
          name: product.title,
          id: product.vendor_product.product_id,
          price: variant.price,
          brand: product.vendor,
          category: product.vendor_product.product_category,
          variant: product.vendor_product.variations[0].variation_sku,
          sku: variant.inventory_item_id,
          image: product.images[0]?.src,
          quantity,
        },
      ],
    },
  },
});

/**
 * @typedef {{
*  product: Product,
*   variant: Variation,
*   quantity : number
* }} BundleVariants

 * @param {{
 *  leadProduct: Product,
 *  bundleproduct: BundleVariants[],
 * }} bundleProductProps
 */
export const getBundleProductAddToCartTrackingPayload = ({
  leadProduct,
  bundleproduct,
}) => {
  const bundleVariants = bundleproduct.map((bundleVariant) => ({
    name: bundleVariant.product.title,
    id: bundleVariant.product.vendor_product.product_id,
    price: bundleVariant.variant.price,
    brand: bundleVariant.product.vendor,
    category: bundleVariant.product.type,
    variant: bundleVariant.variant.sku,
    sku: bundleVariant.variant.inventory_item_id,
    image: bundleVariant.product.images[0]?.src,
    quantity: bundleVariant.quantity,
    lead_product_id: leadProduct.id,
    lead_product_title: leadProduct.title,
    lead_product_handle: leadProduct.slug,
  }));

  return {
    event: "enhanceEcom addToCart",
    ecommerce: {
      add: {
        products: bundleVariants,
      },
    },
  };
};

/**
 *  @typedef { import("lib/types").ShopifyProduct } ShopifyProduct
 */

/**
 * @param { ShopifyProduct[] } products
 * @param { string } searchQuery
 * @param { number } currentPage
 */
export const getSearchPageTrackingPayload = (
  products,
  searchQuery,
  currentPage
) => ({
  event: "enhanceEcom productSearch",
  type: "search",
  content: searchQuery,
  results: products.length,
  page: currentPage,
  ecommerce: getProductViewEcommercePayload(products, null),
});

/**
 * @param { ShopifyProduct[] } products
 * @param { string } type
 * @param { any } content
 */
export const getSearchModifiersTrackingPayload = (products, type, content) => ({
  event:
    type === "sort"
      ? "enhanceEcom productListSorted"
      : "enhanceEcom productListFiltered",
  type: type,
  content: content,
  results: products.length,
  ecommerce: getProductViewEcommercePayload(products, null),
});

/**
 * @param { ShopifyProduct } product
 */
export const getSearchItemTrackingPayload = (product) => ({
  event: "product_click",
  ecommerce: {
    click: {
      actionField: { list: "Search", action: "click" },
      products: [
        {
          name: product.name,
          id: product.externalId,
          price: product.minPrice,
          brand: product.vendor,
          category: product.type,
          sku: product.variants[0]?.sku,
          variant: product.variants[0]?.externalId,
          position: 1,
        },
      ],
    },
  },
});

/**
 * @param { number | string } price
 * @param { any[] } items
 */
export const getDiscountPrice = (price, items) => {
  const totalPrice = typeof price === "string" ? parseFloat(price) : price;

  const totalOriginalPrice = items.reduce((total, item) => {
    if (item.variant) {
      return (
        total + parseFloat(item.variant.compareAtPriceV2.amount) * item.quantity
      );
    }

    return total;
  }, 0);

  return totalOriginalPrice - totalPrice;
};

/**
 * @param { any[] } items
 */
export const getItemQuantity = (items) => {
  const MAX_ALLOWED_QUANTITY = 10;
  const itemQuantity = items.reduce((total, item) => {
    if (item.variant) {
      return total + Math.min(MAX_ALLOWED_QUANTITY, item.quantity);
    }

    return total;
  }, 0);

  return itemQuantity;
};

/**
 * Get Variant's Discount Percentage
 * @param {Variation} variant
 * @return {number}
 */
export const getDiscountPercent = ({ price, compare_at_price }) => {
  const currentPrice = price;
  const oldPrice = compare_at_price;
  let percent = 100 - Math.ceil((currentPrice * 100) / oldPrice);
  const mod = percent % 5;

  percent =
    Math.abs(mod) <= 2
      ? percent > 5
        ? percent - mod
        : 5
      : percent + (5 - mod);

  return percent;
};

/**
 * @typedef { import('frontend-checkout/dist/checkout-sdk/platforms/shopify/storefront-api/types').ShopifyStorefrontProductVariant } ShopifyStorefrontProductVariant
 * Get Variant's Discount Percentage
 * @param {ShopifyStorefrontProductVariant} variant
 * @return {number}
 */
export const getDiscountPercentCountry = (variant) => {
  const currentPrice = Number(variant.priceV2.amount);
  const oldPrice = Number(variant.compareAtPriceV2.amount);
  let percent = 100 - Math.ceil((currentPrice * 100) / oldPrice);
  const mod = percent % 5;

  percent =
    Math.abs(mod) <= 2
      ? percent > 5
        ? percent - mod
        : 5
      : percent + (5 - mod);

  return percent;
};

/**
 * Get the product url prefix based on storeConfig and tag
 * @param { ShopifyProduct | Product } product
 * @param { string | undefined } defaultPrefix
 * @param { string | undefined } shogunPrefx
 * @returns string
 */
export function getProductUrlPrefix(
  product,
  defaultPrefix = "",
  shogunPrefx = ""
) {
  const prefix = product?.tags?.find((tag) => tag === "shopify-product")
    ? defaultPrefix
    : shogunPrefx;

  return (prefix || "").replace(/\/$/, "");
}

/**
 * Method that will find the correct Media object for the received product
 * @typedef {import("lib/types").ShopifyMediaItem} ShopifyMediaItem
 *
 * @param { ShopifyProduct } product
 * @param { Variation | undefined } variantWithStock
 * @return { ShopifyMediaItem }
 */
export const getMediaData = (product, variantWithStock = null) => {
  // Specific case when we want to get the media for a variant with stock already defined.
  if (variantWithStock) {
    if (product.media?.length > 0 && product.variants?.length > 0) {
      const shopifyVariant = product.variants.find(
        (variant) => variant.externalId.toString() === variantWithStock.id
      );

      if (shopifyVariant?.media?.length > 0) {
        const matchingImage = product.media.find(
          (media) => media.externalId === shopifyVariant.media[0].externalId
        );

        if (matchingImage) {
          return matchingImage;
        }
      }
    }
  }

  if (!product.media || !product.media.length) {
    if (
      !product.variants ||
      !product.variants.length ||
      !product.variants[0].media ||
      !product.variants[0].media.length
    ) {
      return null;
    } else {
      return product.variants[0].media[0];
    }
  } else {
    let image = product.media[0];

    if (product.variants && product.variants.length) {
      const variation = product.variants[0];

      if (variation.media && variation.media.length) {
        const findImage = product.media.find(
          (media) => media.externalId === variation.media[0].externalId
        );

        image = findImage || image;
      }
    }

    return image;
  }
};

/**
 * Method that will find the correct hover media object for the received product
 * @typedef {import("lib/types").ShopifyMediaItem} ShopifyMediaHoverItem
 *
 * @param { ShopifyProduct } product
 * @param { Variation | undefined } variantWithStock
 * @return { ShopifyMediaHoverItem }
 */
export const getHoverMediaData = (product, variantWithStock = null) => {
  if (variantWithStock) {
    const variantFiltered = product.variants?.find(
      ({ media }) => media?.[0]?.externalId !== variantWithStock.images_id[0]
    );
    const imageHover = variantFiltered?.media?.[0] || null;

    return imageHover;
  }

  return null;
};

/**
 * @param {{
 *   [x: string]: any
 *   tags?: string[]
 * }} customer
 * @param { string } country
 * @returns {boolean}
 */
export const checkClubMember = (customer, country) => {
  if (Array.isArray(customer.tags)) {
    const regex = new RegExp("shapermint-membership|shapermint-club-free");

    return regex.test(customer.tags.join(",")) && country === "US";
  }

  return false;
};

/**
 * @param { Product } product
 */
export const getValueFromProductMetafield = (product, key) => {
  const metafield = product?.metafields?.find((field) => field.key === key);

  try {
    return JSON.parse(metafield?.value);
  } catch (e) {
    console.error(e);
  }
};
