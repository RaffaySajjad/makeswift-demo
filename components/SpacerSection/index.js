import React from 'react'

/**
 * @typedef {{
 *  desktopHeight: string
 *  mobileHeight: string
 *  backgroundColor?: string
 * }} SpacerProps
 *
 * @param { SpacerProps } props
 */

const Spacer = ({
  desktopHeight,
  mobileHeight,
  backgroundColor = 'inherit',
}) => {
  return (
    <div style={{ backgroundColor }}>
      <div
        data-show="desktop"
        style={{
          minHeight: desktopHeight,
          maxHeight: desktopHeight,
          height: desktopHeight,
          backgroundColor,
        }}
      />
      <div
        data-show="mobile"
        style={{
          minHeight: mobileHeight,
          maxHeight: mobileHeight,
          height: mobileHeight,
          backgroundColor,
        }}
      />
    </div>
  )
}

export default Spacer
