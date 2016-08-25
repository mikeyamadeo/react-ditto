import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { separate } from '../utils'

const { keys } = Object

const separateStylePropsFromRest = (propNames, props) => {
  const parts = separate(propNames, props)
  return {
    styleProps: parts.picked,
    props: parts.plucked
  }
}

const extractActiveStyleKeys = (props) =>
  keys(props)
    .filter(key => props[key])

/**
 * 1. Extract props specified in api from all other props
 * 2. Keep only the style props that are truthy
 * 3. flatten style values into single style object
 *   {prop: {color: 'red'}, prop2: {fontSize: '1em'}} =>
 *     {color: 'red', fontSize: '1em'}
 */
export const defineStyleComponent = (api) => {
  const possiblePropNames = keys(api)

  const staticStyleSheet = StyleSheet.create(api)

  const Style = ({
    tag,
    style: stylesFromAuthor,
    children,
    ...rest
  }) => {
    const Tag = tag || 'div'
    const {styleProps, props} = separateStylePropsFromRest(possiblePropNames, rest)
    const activeStyleKeys = extractActiveStyleKeys(styleProps)
    const activeStaticStyles = activeStyleKeys.map(key => staticStyleSheet[key])
    const dynamicStyles = StyleSheet.create({Style: stylesFromAuthor}).Style
    const styleSheet = [...activeStaticStyles, dynamicStyles]

    return (
      <Tag { ...{ ...props, className: css.apply(null, styleSheet) } }>
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
