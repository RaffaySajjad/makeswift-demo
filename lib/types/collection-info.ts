export interface CollectionInfoConfig {
  name: string
  nameMobile?: string
  slug: string
  description?: string
  descriptionMobile?: string
  backgroundImg?: string
  backgroundImgMobile?: string
  bannerStyle?: string
  bannerStyleMobile?: string
  titleStyle?: string
  subTitleStyle?: string
  titleStyleMobile?: string
  subTitleStyleMobile?: string
  hideTitle?: boolean
  priorityProducts?: number[]
  sections?: sectionsProps[]
  showAllProds?: boolean
  isSaleCollection?: boolean
}

type sectionsProps = {
  title: string
  imageBanner?: {
    mobileUrl: string
    desktopUrl: string
    redirectsTo: string
  }
  productsSlugs?: string[]
}
