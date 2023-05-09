export interface SearchBarOption {
  id: number
  src: string
  price: string
  title: string
  name?: string
  optionUrl: string
  type?: string
  tags?: string[]
}

export interface FilterOption {
  label: string
  checked?: boolean
  isLinkItem?: boolean
  link?: string
  blockUncheck?: boolean
  value?: string
}
export interface FilterColumns {
  title: string
  columns: number
  isOpenByDefault?: boolean
  isMultiselect: boolean
  items: Array<{
    label: string
    checked?: boolean
    isLinkItem?: boolean
    link?: string
  }>
  showInMobile: boolean
}
