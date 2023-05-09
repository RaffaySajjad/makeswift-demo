export interface CupSizeOption {
  key: string
  label: string
  value: string
  disabled: boolean
}

export interface CalculateSizeOption {
  label: string
  value: string
  underbust?: {
    min: number
    max: number
  }
  fullbust?: {
    min: number
    max: number
  }
  bandSizes?: CupSizeOption[]
  cupSizes?: CupSizeOption[]
}
