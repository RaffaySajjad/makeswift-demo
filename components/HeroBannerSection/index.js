import React from 'react'
// @ts-ignore
import {
  ButtonPrimary,
  ButtonSecondary,
  useWindowDimensions,
  Spacing,
} from '@trafilea/afrodita-components'
import HeroBannerTextContent from 'Components/HeroBannerTextContent'
import RichText from 'frontend-ui/RichText'
import styles from './styles.module.css'

const BUTTON_TAG = {
  primary: ButtonPrimary,
  secondary: ButtonSecondary,
}

const JUSTIFY_STYLES = {
  left: styles['layout--justifyLeft'],
  center: styles['layout--justifyCenter'],
  right: styles['layout--justifyRight'],
  flexStart: styles['layout--justifyFlexStart'],
  flexEnd: styles['layout--justifyFlexEnd'],
}

const ALIGN_STYLES = {
  start: styles['layout--alignStart'],
  center: styles['layout--alignCenter'],
  end: styles['layout--alignEnd'],
}

/**
 * @param {{
 *  content: any,
 *  justify: 'left' | 'right' | 'center' | 'flexStart' | 'flexEnd',
 *  justifyContent: 'left' | 'right' | 'center' | 'flexStart' | 'flexEnd',
 *  align: 'start' | 'end' | 'center',
 *  background?: string,
 *  fullBackground?: string,
 *  textColor?: string,
 *  buttonVariant?: 'primary' | 'secondary',
 *  buttonText?: string,
 *  buttonUrl?: string,
 *  buttonTestId?: string,
 *  secondButtonVariant?: 'primary' | 'secondary',
 *  secondButtonText?: string,
 *  secondButtonUrl?: string,
 *  secondButtonTestId?: string,
 *  height: number,
 *  styleForAmbassador?: boolean,
 *  contentWidth?: number,
 *  backgroundSize?: string,
 *  backgroundPosition?: string
 *  showOnlyDevice?: 'mobile' | 'desktop' | 'both',
 *  bannerRedirectUrl?: string,
 *  bannerTestId?: string,
 *  bannerTag?: string,
 *  bannerTagColor?:string,
 *  backgroundMobile?:string,
 * }} props
 */
const HeroBannerSection = ({
  content,
  justify,
  justifyContent,
  align,
  background,
  fullBackground,
  textColor,
  buttonVariant,
  buttonText,
  buttonUrl,
  buttonTestId,
  secondButtonVariant,
  secondButtonText,
  secondButtonUrl,
  secondButtonTestId,
  height,
  contentWidth,
  backgroundSize,
  backgroundPosition,
  showOnlyDevice,
  bannerRedirectUrl,
  bannerTestId,
  bannerTag,
  bannerTagColor,
  styleForAmbassador,
  backgroundMobile,
}) => {
  const CTA = buttonVariant && BUTTON_TAG[buttonVariant]
  const CTA2 = secondButtonVariant && BUTTON_TAG[secondButtonVariant]
  const { isMobile } = useWindowDimensions({ mobile: 0, desktop: 650 })

  const shouldShowBanner = () => {
    if (showOnlyDevice === undefined || showOnlyDevice === 'both') return true

    return showOnlyDevice === 'mobile' ? isMobile : !isMobile
  }

  if (!shouldShowBanner()) return null

  const BannerContent = ({ link }) => {
    const Container = link ? 'a' : 'div'

    return (
      <Container
        className={`${styles.layout} ${styles.banner__link} ${JUSTIFY_STYLES[justify]} ${ALIGN_STYLES[align]}`}
        href={link}
      >
        <HeroBannerTextContent
          style={{ width: `${contentWidth}px` }}
          justify={justifyContent}
          styleForAmbassador={!!styleForAmbassador}
        >
          {bannerTag && (
            <div
              className={styles.bannertag}
              style={{ borderColor: bannerTagColor, color: bannerTagColor }}
            >
              {bannerTag}
            </div>
          )}
          <RichText source={content} />
          <div style={{ display: CTA2 ? 'flex' : 'block' }}>
            {CTA && (
              <CTA
                onClick={() => (window.location.href = buttonUrl)}
                text={buttonText}
                testId={buttonTestId}
              />
            )}
            {CTA2 && (
              <>
                <Spacing type="block" size={32} />
                <CTA2
                  onClick={() => (window.location.href = secondButtonUrl)}
                  text={secondButtonText}
                  testId={secondButtonTestId}
                />
              </>
            )}
          </div>
        </HeroBannerTextContent>
      </Container>
    )
  }

  return (
    <section
      className={styles.banner}
      style={{
        [fullBackground ? 'background' : '']: fullBackground,
        backgroundImage:
          backgroundMobile && isMobile ? backgroundMobile : background,
        color: textColor,
        maxWidth: '100%',
        minHeight: 'fit-content',
        height: `${height}px`,
        backgroundSize: backgroundSize,
        backgroundPosition: backgroundPosition,
      }}
      data-testid={bannerTestId}
    >
      <BannerContent link={bannerRedirectUrl} />
    </section>
  )
}

export default HeroBannerSection
