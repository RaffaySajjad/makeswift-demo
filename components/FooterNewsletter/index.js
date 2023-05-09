import React, { useState } from 'react'
import axios from 'axios'
import { Text, Input, useWindowDimensions } from '@trafilea/afrodita-components'
import styles from './styles.module.css'
import shapermint from '@trafilea/afrodita-components/build/theme/shapermint.theme'

/**
 * @typedef { import("lib/types").Menu } MenuType
 * @typedef { import("lib/types").MenuLink } MenuLinkType
 * @typedef { import("lib/types").Microcopy } MicrocopyType
 */

/**
 * @typedef {{
 *  newsletterTitle: string,
 *  newsletterText: string,
 *  newsletterListId: string,
 *  newsletterSubscribeEndpoint: string,
 *  newsletterSignUpText: MicrocopyType,
 *  newsletterInputPlaceholder: MicrocopyType,
 *  newsletterEmptyInputMessage: MicrocopyType,
 *  newsLetterSuccessTitle: MicrocopyType,
 *  newsLetterSuccessDescriptionHtml: MicrocopyType,
 *  newsLetterSuccessSubtitle: MicrocopyType,
 * }} FooterNewsletterProps
 *
 * @param { FooterNewsletterProps } props
 */
const FooterNewsletter = ({
  newsletterTitle,
  newsletterText,
  newsletterListId,
  newsletterSubscribeEndpoint,
  newsletterSignUpText,
  newsletterInputPlaceholder,
  newsletterEmptyInputMessage,
  newsLetterSuccessTitle,
  newsLetterSuccessDescriptionHtml,
  newsLetterSuccessSubtitle,
}) => {
  const { isMobile } = useWindowDimensions(shapermint.mediaQueries)
  const [email, setEmail] = useState('')
  const [inputDisabled, setInputDisabled] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  /**
   * @typedef {{
   *  email: string,
   *  newsletterListId: string,
   *  newsletterSubscribeEndpoint: string,
   * }} NewsletterData
   * @param { NewsletterData } props
   * @returns { void }
   */
  const onNewsletterSignUp = ({
    email,
    newsletterListId,
    newsletterSubscribeEndpoint,
  }) => {
    if (!email) return

    const klaviyoData = {
      g: newsletterListId,
      email,
    }
    const urlData = new URLSearchParams(klaviyoData)

    setInputDisabled(true)

    axios
      .post(newsletterSubscribeEndpoint, urlData)
      .then(() => {
        setInputDisabled(false)
        setEmail('')
        setSubscribed(true)
      })
      .catch(() => {
        setInputDisabled(false)
      })
  }

  return (
    <>
      <Text
        variant="heading6"
        weight="demi"
        size="regular"
        style={{
          marginBottom: subscribed ? '0' : '15px',
          fontSize: '16px',
          lineHeight: '24px',
        }}
      >
        {newsletterTitle}
      </Text>
      {subscribed ? (
        <>
          <Text variant="body" weight="regular" size="small">
            {newsLetterSuccessSubtitle.value}
          </Text>
          <div>
            <Text
              variant="heading6"
              weight="demi"
              style={{
                marginBottom: subscribed ? '0' : '15px',
                lineHeight: '1.8',
              }}
            >
              {newsLetterSuccessTitle.value}
            </Text>
            <div
              className={styles.newsletterSuccessDescription}
              dangerouslySetInnerHTML={{
                __html: newsLetterSuccessDescriptionHtml.value,
              }}
            />
          </div>
        </>
      ) : (
        <div>
          <Text
            variant="body"
            size="regular"
            style={{
              marginBottom: '15px',
              fontSize: isMobile ? '14px' : '18px',
              lineHeight: isMobile ? '22px' : '28px',
            }}
          >
            {newsletterText}
          </Text>
          <div className={styles.newsletterEmailInput}>
            <Input.Custom
              onClick={() =>
                onNewsletterSignUp({
                  email,
                  newsletterListId,
                  newsletterSubscribeEndpoint,
                })
              }
              onChange={value => setEmail(value)}
              text={newsletterSignUpText.value}
              variant="secondary"
              placeholder={newsletterInputPlaceholder.value}
              disabled={inputDisabled}
              required={newsletterEmptyInputMessage.value}
              size="regular"
              value={email}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default FooterNewsletter
