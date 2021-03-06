import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'
import { css } from 'glamor'
const { keys } = Object

const separateStylePropsFromRest = (stylePropMap, map) => {
  let props = {}
  let styleProps = {}

  keys(map).forEach(key => {
    const value = map[key]
    if (stylePropMap.hasOwnProperty(key)) {
      styleProps[key] = value
    } else {
      props[key] = value
    }
  })

  return { styleProps, props }
}

const extractActiveStyleKeys = props => keys(props).filter(key => props[key])
const capitalize = string =>
  string.charAt(0).toUpperCase() + string.slice(1).toLowerCase()
/**
 * 1. Extract props specified in api from all other props
 * 2. Keep only the style props that are truthy
 */
export const defineStyleComponent = api => {
  const possiblePropNames = keys(api)
  const staticStyleSheet = keys(api).reduce(
    (styleSheet, ruleName) => ({
      ...styleSheet,
      [ruleName]: css(api[ruleName])
    }),
    {}
  )
  let dynamicStyles

  const Style = (
    { tag, style: stylesFromAuthor, children, className, baseRef, ...rest }
  ) => {
    const Tag = glamorous[capitalize(tag || 'div')]
    const { styleProps, props } = separateStylePropsFromRest(api, rest)
      /* [1] */
    const activeStyleKeys = extractActiveStyleKeys(styleProps)
      /* [2] */
    const activeStaticStyles = activeStyleKeys.map(
        key => staticStyleSheet[key]
      )

    if (stylesFromAuthor) {
      dynamicStyles = css(stylesFromAuthor)
    }

    const styleSheet = dynamicStyles
        ? css(activeStaticStyles, dynamicStyles)
        : activeStaticStyles

    let tagProps = {
      ...props,
      className: `${styleSheet} ${className || ''}`
    }

    if (baseRef) {
      tagProps.ref = baseRef
    }

    return (
      <Tag {...tagProps}>
        {children}
      </Tag>
    )
  }

  Style.propTypes = possiblePropNames.reduce(
    (prev, next) => ({ ...prev, [next]: PropTypes.bool }),
    {}
  )

  return Style
}
