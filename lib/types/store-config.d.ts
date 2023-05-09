import { CalculateSizeOption } from './calculate-size'
import { ShapeTheFuture } from './shape-the-future'

export interface Config {
  name: string
  value: string
}

export type StoreConfig = {
  hide_hurry_up?: string[]
  default_product_url_prefix?: string
  default_shogun_product_url_prefix?: string
  store_domain?: string
  coupon_banner?: string
  redirect_empty_cart?: string
  contenful_url?: string
  cartabble_url?: {
    cart?: string
    checkout?: string
  }
  headless_checkout_url?: {
    cart?: string
    checkout?: string
  }
  checkout_timeout: number
  search_type?: 'LEGACY'
  stamped_url?: string
  stamped_api_key?: string
  legacy_domain?: string
  stamped_type?: 'SHOGUN' | 'GTM'
  calculate_size_options?: CalculateSizeOption[]
  facebook_app_id?: string
  google_client_id?: string
  shipping_methods_order?: Config[]
  track_order_url?: {
    url?: string
    store?: string
    vendor?: string
  }
  fetch_product_url?: {
    url?: string
  }
  fetch_reviews_url?: {
    url?: string
    vote_url?: string
    keyword_url?: string
    store?: string
  }
  justuno_account?: string
  currency_symbol?: string
  shape_the_future?: ShapeTheFuture
  size_table_v2_slug?: string[]
  collection_tags_filter?: Config[]
  related_product?: any
  acqPDPs_reviews_fallback?: [
    {
      slug?: string
      imgMobile?: string
      imgDesktop?: string
    },
  ]
  cancel_coupon_check_url?: {
    url?: string
    store?: string
    vendor?: string
    discount_code?: string
    min_order_value?: string
  }
  logo_link: string
  product_category_mapping?: [
    {
      ID?: string
      Name?: string
    },
  ]
  enable_crossell?: [
    {
      slug: string
      countries: string[]
    },
  ]
}
