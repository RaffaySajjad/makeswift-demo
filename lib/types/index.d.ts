export * from './menu'
export * from './shared'
export * from './product'
export * from './collection'
export * from './customer'
export * from './checkout'
export * from './store-config'
export * from './metafield'
export * from './size'
export * from './search'
export * from './trustpilot'
export * from './product-seals-config'
export * from './collection-info'
export * from './size-preference'
export * from './calculate-size'
export * from './track-orders'
export * from './landing-pages'
export * from './fetch-product'
export * from './fetch-reviews'
export * from './fetch-reviews-header'
export * from './environment-config'

export type HeaderPromotionBanner = {
  name: string
  endsAt?: string
}

export type HeaderPromotionBannerCustom = {
  preName: string
  name: string
  endsAt?: string
}

export type YourBenefitsClubMember = {
  name: string
  value: string
}
