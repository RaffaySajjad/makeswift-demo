import { shopifyProducts } from "../../mocks/cmsProducts";

import {
  // @ts-ignore
  Cart,
  // @ts-ignore
  Item,
  CartProvider,
  useCartState,
  useInventory,
  useCart,
  useCartActions as useOriginalCartActions,
} from "../../../node_modules/frontend-checkout";

// @ts-ignore
export { Cart, Item, CartProvider, useCartState, useInventory, useCart };

export function useCartActions() {
  const actions = useOriginalCartActions();

  // @ts-ignore
  actions.fetchProduct = function fetchProduct(id) {
    // @ts-ignore
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve(
            // @ts-ignore
            shopifyProducts.find((product) => product.externalId === Number(id))
          ),
        1000
      )
    );
  };

  return actions;
}
