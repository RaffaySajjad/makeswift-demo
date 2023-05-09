export interface MenuLink {
  name: string
  slug?: string
  image?: string
  externalLink?: string
  label: string
  subMenuLinks?: MenuLink[]
  megaMenu?: Menu
  highlighted?: boolean
  backgroundFilled?: boolean
  hideOn?: 'desktop' | 'mobile'
}

export interface Menu {
  name: string
  menuLinks: MenuLink[]
  mobileBanners?: MenuLink[]
}

export interface CategoryMenuLink {
  name: string
  imageUrl: string
  link: string
}
