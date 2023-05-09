export interface ArticlesProps {
  iD: number
  handle: string
  title: string
  author: string
  bodyHtml: string
  summaryHtml: string
  tags: string
  createdAt: string
  updatedAt: string
  published: string
  publishedAt: string
  templateSuffix: string
  imageSrc: string
  imageWidth: number
  imageHeight: number
  imageAltText: string
  blogID: number
  blogHandle: string
  blogTitle: string
  blogCommentable: string
  blogTemplateSuffix: string
  blogCreatedAt: string
  blogUpdatedAt: string
  metafieldTitleTag: string
  metafieldDescriptionTag?: string
  metafieldSeoMetaMaganerSeoDone?: string
  metafieldSeoMetaMaganerSeoConfig?: string
  metafieldSeoHidden?: string
  metafieldCustomFieldsShmTV?: string
}

export interface ArticleFilteredProps {
  all?: ArticlesProps[]
  lifestyleWellness?: {
    all: ArticlesProps[]
    popular: ArticlesProps[]
    trending: ArticlesProps[]
    recent: ArticlesProps[]
  }
  fashionBeauty?: {
    all: ArticlesProps[]
    popular: ArticlesProps[]
    trending: ArticlesProps[]
    recent: ArticlesProps[]
  }
  crewLoveSeries?: {
    all: ArticlesProps[]
    popular: ArticlesProps[]
    trending: ArticlesProps[]
    recent: ArticlesProps[]
  }
  shapermintNews?: {
    all: ArticlesProps[]
    popular: ArticlesProps[]
    trending: ArticlesProps[]
    recent: ArticlesProps[]
  }
}
