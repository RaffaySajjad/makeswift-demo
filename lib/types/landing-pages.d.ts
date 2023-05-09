export interface QuizData {
  name?: string
  title: string
  imgLink: string
  btnText: string[]
  isLast: boolean
}

export interface CelebrateTestimonials {
  img: string
  name: string
  url: string
  text: string
}

export interface AuthorSocialMediaData {
  img: string
  url: string
  alt: string
}

export interface VideoWithThumbnail {
  thumbnail: string
  video: string
  title: string
  text: string
  ctaText: string
  ctaLink: string
}
