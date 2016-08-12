import React, { PropTypes } from 'react'
import { flatten, separate } from '../utils'
import autoprefix from './autoprefix'

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

const getStylesFromApi = (styleNames, api) => flatten(
  styleNames.map(
    key => console.log(api, key, api[key]) || api[key]
  )
)

/**
 * 1. Extract props specified in api from all other props
 * 2. Keep only the style props that are truthy
 * 3. flatten style values into single style object
 *   {prop: {color: 'red'}, prop2: {fontSize: '1em'}} =>
 *     {color: 'red', fontSize: '1em'}
 */
export const defineStyleApiComponent = (api) => {
  const possiblePropNames = keys(api)

  const StyleApi = ({
    tag,
    style: stylesFromAuthor,
    children,
    ...rest
  }) => {
    const Tag = tag || 'div'
    const {styleProps, props} = separateStylePropsFromRest(possiblePropNames, rest)
    const activeStyleKeys = extractActiveStyleKeys(styleProps)
    const stylesFromApi = getStylesFromApi(activeStyleKeys, api)
    const style = autoprefix({...stylesFromAuthor, ...stylesFromApi})

    return (
      <Tag { ...{ ...props, style } }>
        {children}
      </Tag>
    )
  }

  StyleApi.propTypes = possiblePropNames.reduce((prev, next) => ({
    ...prev,
    [next]: PropTypes.bool
  }), {})

  return StyleApi
}
