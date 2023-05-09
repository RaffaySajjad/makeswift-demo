interface Banner {
  title: string
  description?: string
  backgroundImg: string
  backgroundImgMobile: string
  ctaText: string
  ctaLink: string
}

interface SectionDescription {
  title: string
  description: string
  backgroundColor: string
}

interface ReadyToShapeOption {
  iconName: string
  iconSection: string
  iconWidth: string
  iconHeight: string
  IconFillColor: string
  description: string
}

interface ReadyToShape {
  title: string
  options: ReadyToShapeOption[]
}

interface GetThePerks {
  title: string
  backgroundImg: string
  backgroundImgMobile: string
  options: string[]
}

interface FrequentlyAskedQuestionOption {
  title: string
  description: string
}

interface FrequentlyAskedQuestion {
  title: string
  options: FrequentlyAskedQuestionOption[]
}

interface MembersOptions {
  link: string
  backgroundImg: string
}

interface Members {
  title: string
  options: MembersOptions[]
}

interface EmbedVideo {
  link: string
  title: string
}

interface Videos {
  title: string
  ctaText: string
  ctaLink: string
  backgroundColor: string
  embedVideos: EmbedVideo[]
}

export interface ShapeTheFuture {
  mainBanner?: Banner
  sectionDescription?: SectionDescription
  readyToShape?: ReadyToShape
  getThePerks?: GetThePerks
  frequentlyAskedQuestion?: FrequentlyAskedQuestion
  secondaryBanner?: Banner
  members?: Members
  videos?: Videos
}
