import { Product, Variation } from './product'

declare global {
  interface Events {
    'stamped/gtm/load': {
      apiKey: string
      storeUrl: string
      productId: number
    }
    'fitpredictor/ready': {}
    'fitpredictor/init': {}
    'fitpredictor/loaded': {}
    'fitpredictor/setup': {
      product: Product
      variant: Variation
      cookies: Record<string, any>
      site: {
        currency: string
        language: string
        market: string
      }
      user?: {
        userId: string
        email: string
      }
    }
    'fitpredictor/product': {
      product: Product
      variant: Variation
    }
    'talkable/ready': {}
    'talkable/init': {
      customer?: {
        email: string
        phone_number?: string
        first_name?: string
        last_name?: string
      }
    }
    'talkable/loaded': {}
    'cart/add': {
      productId: number
      variantId: number
      quantity: number
      tags?: string[]
    }
    'cart/add:done': {
      type: 'success' | 'error'
      cart?: any
    }
    'cart/add-all': {
      products: {
        productId: number
        variantId: number
        quantity: number
      }[]
    }
    'cart/add-all:done': {
      type: 'success' | 'error'
      cart?: any
    }
  }
}
