import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { pluck } from '../utils'
const { keys } = Object

const separateStylePropsFromRest = (stylePropMap, map) => {
  let props = {}
  let styleProps = {}

  keys(map).forEach((key) => {
    const value = map[key]
    if (stylePropMap.hasOwnProperty(key)) {
      styleProps[key] = value
    } else {
      props[key] = value
    }
  })

  return {
    styleProps,
    props
  }
}

const extractActiveStyleKeys = (props) =>
  keys(props)
    .filter(key => props[key])

/**
 * 1. Extract props specified in api from all other props
 * 2. Keep only the style props that are truthy
 */
export const defineStyleComponent = (api) => {
  const possiblePropNames = keys(api)
  const staticStyleSheet = StyleSheet.create(api)
  let dynamicStyles

  const Style = ({
    tag,
    style: stylesFromAuthor,
    children,
    className,
    baseRef,
    ...rest
  }) => {
    const Tag = tag || 'div'
    const {styleProps, props} = separateStylePropsFromRest(api, rest) /* [1] */
    const activeStyleKeys = extractActiveStyleKeys(styleProps) /* [2] */
    const activeStaticStyles = activeStyleKeys.map(key => staticStyleSheet[key])

    if (stylesFromAuthor) {
      dynamicStyles = StyleSheet.create({Style: stylesFromAuthor}).Style
    }

    const styleSheet = dynamicStyles
      ? [...activeStaticStyles, dynamicStyles]
      : activeStaticStyles

    let tagProps = {
      ...pluck(possiblePropNames, props),
      className: `${css.apply(null, styleSheet)} ${className || ''}`
    }

    if (baseRef) {
      tagProps.ref = baseRef
    }

    return (
      <Tag { ...tagProps}>
        {children}
      </Tag>
    )
  }

  Style.propTypes = possiblePropNames.reduce((prev, next) => ({
    ...prev,
    [next]: PropTypes.bool
  }), {})

  return Style
}
