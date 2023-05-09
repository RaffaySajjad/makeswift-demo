import React from 'react'
import { ResponsiveImage } from 'frontend-ui'
import styles from './styles.module.css'

/**
 * @typedef { import("lib/types").AuthorSocialMediaData } AuthorSocialMediaData
 * @param {{
 *  authorName?: string,
 *  subDetail?: string,
 *  profileLink: string,
 *  authorSocialMedia?: AuthorSocialMediaData[];
 * }} props
 */
const AuthorSection = ({
  authorName = 'AUTHOR',
  subDetail = '[TODAY’S DATE] · 4 min read',
  profileLink,
  authorSocialMedia,
}) => (
  <div
    className={
      !authorSocialMedia?.length ? styles.section : styles.sectionSocial
    }
  >
    <div className={styles.authorInfoContainer}>
      <div>
        <ResponsiveImage
          className={styles.image}
          src={profileLink}
          alt="Author"
        />
      </div>
      <div className={styles.articleDetails}>
        <div className={styles.authorName}>{authorName}</div>
        <div className={styles.subDetails}>{subDetail}</div>
      </div>
    </div>
    {!!authorSocialMedia?.length && (
      <div className={styles.socialMediaContainer}>
        <span className={styles.shareCaption}>Share</span>
        {authorSocialMedia?.map(obj => (
          <a
            key={obj.url}
            href={obj.url}
            className={styles.socialLogoContainer}
          >
            <ResponsiveImage
              src={obj.img}
              alt={obj.alt}
              className={styles.socialLogo}
            />
          </a>
        ))}
      </div>
    )}
  </div>
)

export default AuthorSection
