/**
 * This type is defined for all the current environments that we have in Shogun
 * And the undefined case is for US, so if this config is not defined, by default we will be using US
 */
export type EnvironmentConfig = string

export type ConfigName =
  | 'collection_info'
  | 'product_seal'
  | 'headless_checkout_url'
  | 'cartabble_url'
  | 'track_order_url'
  | 'fetch_product_url'
  | 'store_domain'
  | 'legacy_domain'
  | 'default_product_url_prefix'
  | 'logo_link'
  | 'cancel_coupon_check_url'
  | 'menu_header_secondary'
  | 'menu_header_secondary_mobile'
  | 'menu_main_header'
  | 'menu_main_header_mobile'
  | 'risk_free_exchange_policy_info'
  | 'header_promotion_banner'
