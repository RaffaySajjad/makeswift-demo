import { getMediaData } from "../UtilsObjectProperties";

/**
 * @param {number} externalId
 * @param {'ProductVariant' | 'Product'} scope
 * @returns {string}
 */
export const generateStorefrontId = (externalId, scope = "ProductVariant") =>
  btoa(`gid://shopify/${scope}/${externalId}`);

/**
 * @typedef {{
 *   currencyCode: string;
 *   impressions: {
 *     name: string;
 *     id: number;
 *     price: number;
 *     brand: string;
 *     category: string;
 *     sku: string;
 *     variant: number;
 *     position: number;
 *     list: string;
 *   }[]
 * }} ProductViewEcommerceTrackingPayload
 *
 * @param { ShopifyProduct[] } products
 * @param { ShopifyCollection= } collection
 * @param { (payload: ProductViewEcommerceTrackingPayload) => ProductViewEcommerceTrackingPayload= } transformer
 * @returns { ProductViewEcommerceTrackingPayload }
 */

export const getProductViewEcommercePayload = (
  products,
  collection,
  transformer
) => {
  const payload = {
    currencyCode: "USD",
    impressions: products.map((product, index) => {
      const productImage = getMediaData(product);

      return {
        name: product.name,
        id: product.externalId,
        price: product.minPrice,
        brand: product.vendor,
        category: product.type,
        sku: product.variants[0]?.sku,
        variant: product.variants[0]?.externalId,
        position: index + 1,
        list: collection?.name ?? "search",
        image: productImage?.details?.src,
      };
    }),
  };

  if (typeof transformer === "function") {
    return transformer(payload);
  }

  return payload;
};
