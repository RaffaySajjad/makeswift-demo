import { ShopifyStorefrontLineItem } from 'frontend-checkout/dist/checkout-sdk/platforms/shopify/storefront-api/types'

import { BigCommerceModifiers } from '.'

export type CheckoutProduct = ShopifyStorefrontLineItem

export interface NormalizedCheckoutProduct {
  id: string | number
  lineItemId: string
  title: string
  subtitle: string
  price: number
  priceCurrencyCode?: string
  quantity: number
  variantId: string | number
  imageUrl: string
  slug: string
  originalPrice: number
  originalPriceCurrencyCode?: string
  color?: string
  size?: string
  pack?: string
  stock: number
  discountAllocations: ShopifyStorefrontLineItem['discountAllocations']
  customAttributes: ShopifyStorefrontLineItem['customAttributes']
  bundle: boolean
}

export interface CheckoutShopifyProduct {
  customAttributes: { key: string; value: string }[]
  discountAllocations: {
    allocatedAmount: MoneyV2
    discountApplication: DiscountApplication
  }[]
  id: string | number
  variant_id: string | number
  price: number
  image: string
  handle: string
  quantity: number
  title: string
  variant?: {
    compareAtPrice: string
    compareAtPriceV2: {
      amount: string
      currencyCode: string
    }
    quantityAvailable: number
    id: string | number
    image: {
      src: string
    }
    price: string
    presentmentPrices: Array[]
    selectedOptions: selectedOptions[]
    product?: {
      handle: string
    }
    title: string
  } | null
}

interface DiscountApplication {
  targetSelection: 'ALL' | 'ENTITLED' | 'EXPLICIT'
  allocationMethod: 'ACROSS' | 'EACH'
  targetType: 'LINE_ITEM' | 'SHIPPING_LINE'
  value: MoneyV2 | { percentage: number }
  title: string | null | undefined
  description: string | null | undefined
  code: string | null | undefined
  applicable: string | null | undefined
}

export interface selectedOptions {
  name: string
  value: string
}

export interface CheckoutBigCommerceProduct {
  id: string
  lineItemId: string
  brand: string
  name: string
  imageUrl: string
  listPrice: number
  quantity: number
  variantId: number
  optionSelections?: BigCommerceModifiers[]
}
