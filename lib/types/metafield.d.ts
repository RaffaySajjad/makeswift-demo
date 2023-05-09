interface VolumeDiscountData {
  quantity: number
  discount: float
  discount_message: string
}

export interface VolumeDiscount {
  status: string
  discount_type: string
  group_by: string
  heading: string
  icon: string
  product_type: string
  tiers: VolumeDiscountData[]
}
