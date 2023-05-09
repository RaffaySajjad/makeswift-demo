import { generateExternalId } from "../UtilsProductsCollections";
import { useCartState } from "frontend-checkout";
import { useEffect } from "react";

const GLOBAL_TIMEOUTS = {};

/**
 * @param { keyof Window } property
 * @param { () => void } cb
 */

export function onGlobalReady(property, cb) {
  clearTimeout(GLOBAL_TIMEOUTS[property]);

  if (window[property] == null) {
    GLOBAL_TIMEOUTS[property] = setTimeout(() => {
      onGlobalReady(property, cb);
    }, 500);

    return;
  }

  cb();
}

/**
 * @param { any } event
 */
export function dataLayerPush(event) {
  onGlobalReady("dataLayer", () => {
    if (window.dataLayer == null) {
      // eslint-disable-next-line
      console.error("dataLayer not available");
      // eslint-disable-next-line
      return;
    }

    window.dataLayer.push(event);
  });
}

/**
 * @param { 'warn' | 'log' | 'error' | 'debug' } status
 * @param { any[] } logs
 */
export function logger(status, ...logs) {
  // eslint-disable-next-line
  console[status](...logs);

  onGlobalReady("DD_LOGS", () => {
    // @ts-ignore
    window.DD_LOGS.logger[status](...logs);
  });
}

export function useSaveCartLocalStorage() {
  const cart = useCartState();

  useEffect(() => {
    const items = JSON.stringify({
      items: cart.items.map((item) => {
        // @ts-ignore
        const variantId = generateExternalId(item.variant.id);
        // @ts-ignore
        const id = generateExternalId(item.variant.product.id);

        return {
          // @ts-ignore
          id: +id,
          variant_id: +variantId,
          quantity: item.quantity,
        };
      }),
    });

    document.cookie = `shopify_cart_sync=${items}; Path=/; Domain=.shapermint.com`;
  }, [cart]);
}

/**
 * @param { Function } fn
 * @param { number } timeout
 */
export function debounce(fn, timeout) {
  /** @type { number= } */
  let timeoutId;

  /** @param { any } args */
  function caller(...args) {
    if (timeoutId) {
      window.clearTimeout(timeoutId);
    }

    timeoutId = window.setTimeout(() => fn(...args), timeout);
  }

  return caller;
}

/**
 * Enables or disables overflow in body element
 * @param {boolean} prevent
 */
export const usePreventBodyScroll = (prevent) => {
  useEffect(() => {
    document.body.style.overflow = prevent ? "hidden" : "";
    document.body.style.touchAction = prevent ? "none" : "";
  }, [prevent]);
};

/**
 * @param {string} key
 * @param {any} value
 * @param {(value: any) => void =} cb
 */

export const debug = (key, value, cb) => {
  if (typeof window === "undefined") {
    return;
  }

  if (window.debug == null) {
    window.debug = {};
  }

  if (window.debug[key] == null) {
    window.debug[key] = value;
  }

  if (typeof cb === "function") {
    cb(window.debug[key]);

    return;
  }

  window.debug[key] = value;
};
