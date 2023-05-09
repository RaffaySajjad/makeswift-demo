import { Media, Platform } from '.'
import { Image } from './shared'

export type CmsProduct = ShopifyProduct

/** Products API product (normalized data) */
export interface Product {
  id: string
  slug: string
  title?: string
  type: string
  vendor?: string
  category_id: string
  created_at: string
  updated_at: string
  published_at: string
  status: string
  tags: string[]
  variations_definition: VariationDefinition
  images: Image[]
  descriptionHtml: string
  metafields: ShopifyMetafield[]
  vendor_product: {
    vendor_id: string
    shop: string
    store_id: string
    product_id: number
    variations: {
      variation_id: number
      variation_sku: string
    }[]
    product_category: string
  }
}

export interface VariationDefinition {
  product_variations: Variation[]
  variatons_summary: VariationSummary
}

export interface Variation {
  id: string
  product_id: string
  title: string
  price: number
  compare_at_price: number
  sku: string
  created_at: string
  updated_at: string
  inventory_quantity: number
  inventory_item_id: number
  variation_attributes: VariationAttribute[]
  images_id: number[]
  tracksInventory: boolean
  position?: number
}

export interface VariationAttribute {
  name: string
  value: string
}

export interface VariationSummary {
  product_dimensions: ProductDimension[]
}

export interface ProductDimension {
  name: string
  display_name: string
  values: string[]
}

export interface VendorProduct {
  vendor_id: Platform
  store_id: string
  product_id: string
  variations_id: Record<string, string>
}

/** Shopify product */
export interface ShopifyProduct {
  _id?: string
  type: string
  minPrice: number
  maxPrice: number
  externalId: number
  variants: ShopifyVariant[]
  slug: string
  updatedAt: string
  metaTitle: string
  storefrontId: string
  vendor: string
  options: ShopifyOption[]
  name: string
  tags: string[]
  thumbnail: ShopifyMedia
  description: string
  media: ShopifyMediaItem[]
  descriptionHtml: string
  createdAt: string
  metafields?: ShopifyMetafield[]
  metaDescription?: string
}

export interface ShopifyOption {
  position: number
  storefrontId: string
  values: ShopifyOptionValue[]
  name: string
  externalId: number
  _id?: string
}

export interface ShopifyOptionValue {
  storefrontId: string
  name: string
  value: string
  _id?: string
}

export interface ShopifyMediaItem {
  _id?: string
  storefrontId: string
  details: ShopifyMedia
  externalId: number
  fileName: string
  type: string
}

export interface ShopifyThumbnail extends Media {
  _type: string
  mimeType: string
  storageID?: string
  size: number
}

type ShopifyVariant = {
  tracksInventory: boolean
  price: number | string
  externalId: number
  selectedOptions: ShopifyOptionValue[]
  storefrontId: string
  originalPrice: number
  media?: ShopifyMediaItem[]
  name: string
  createdAt: string
  updatedAt: string
  sku: string
  thumbnail?: ShopifyMedia
  position: number
  _id?: string
  barcode?: string
}

export interface ShopifyMedia {
  alt?: string
  name: string
  size: number
  _type: string
  width: number
  height: number
  mimeType: string
  storageID?: string
  src: string
  externalId?: number
}

export interface ShopifyMetafield {
  storefrontId: string
  key: string
  value: string
  namespace: string
  _id?: string
}

/** BigCommerce product */
export interface BigCommerceProduct {
  id: number
  _id?: string
  name: string
  price?: number
  url: string
  description: string
  images: BigCommerceImage[]
  variants: BigCommerceVariant[]
  modifiers?: BigCommerceOption[]
  options?: BigCommerceOption[]
  page_title: string
  meta_description: string
  _highlightResult?: HighlightResult<BigCommerceProduct>
  inventoryTracking?: 'product' | 'variant' | 'none'
}

export interface BigCommerceImage {
  _id: string
  id: number
  media: Media
}

export interface BigCommerceVariant {
  _id: string
  id: number
  price?: number
  sku: string
  optionValues?: BigCommerceOptionValue[]
}

export interface BigCommerceOption {
  displayName: string
  id: number
  required?: boolean
  optionValues: BigCommerceOptionValue[]
}

export interface BigCommerceOptionValue {
  id: number
  isDefault?: boolean
  label: string
  optionId?: number
}

/** Search */
export type HighlightResult<T extends Record<string, any>> = {
  [key in keyof Omit<T, '_highlightResult'>]?: {
    fullyHighlighted: boolean
    matchLevel: 'none' | 'partial' | 'full'
    matchedWords: string[]
    value: string
  }
}
export interface ShopifySearchResult extends ShopifyProduct {
  maxPrice: number
  minPrice: number
  objectId: string
  path: string
  type: string
  tags: string[]
}

export interface BigCommerceSearchResult {
  id: number
  images: BigCommerceImage[]
  name: string
  objectID: string
  path: string
  price: number
  sku: string
  _highlightResult: HighlightResult<BigCommerceProduct>
}

export type SearchResult = ShopifySearchResult | BigCommerceSearchResult

export interface FetchedProduct extends Product {
  review_score: {
    reviews_average: string
    reviews_count: string
  }
}
