import React, { PropTypes } from 'react'
import { defineStyleApiComponent } from './StyleApi'
import { defineSpaceApi } from './space'
import { axisApi } from './axis'

const nonBooleanApiProps = [
  'width', 'maxWidth', 'minWidth',
  'height', 'maxHeight', 'minHeight'
]

export const cloneNewDitto = ({
  baseSpace
} = {}) => {
  const spaceApi = defineSpaceApi({
    base: baseSpace
  })

  const api = {...spaceApi, ...axisApi}

  const StyleApi = defineStyleApiComponent(api)

  const Ditto = ({
    X, Y, x, y,

    style: authorStyles,
    children,
    ...rest
  }) => {
    const style = nonBooleanApiProps.reduce((styles, prop) => {
      if (rest.hasOwnProperty(prop)) {
        styles[prop] = rest[prop]
      }
      return styles
    }, { ...authorStyles })
    let props = {...rest, style}
    let axisPropName = []

    if (!X && !Y) {
      return <StyleApi {...props}>{children}</StyleApi>
    } else if (X && Y) {
      console.warn('Both X & Y axis props found in Ditto. Giving X presidence.')
    } else if (X) {
      axisPropName.push('X')
    } else if (Y) {
      axisPropName.push('Y')
    }

    if (x) {
      axisPropName.push('x')
    }

    if (y) {
      axisPropName.push('y')
    }

    const axisProp = axisPropName.join('')

    if (axisPropName) {
      props[axisProp] = true
    }

    return <StyleApi {...props} >{children}</StyleApi>
  }

  Ditto.propTypes = {
    tag: PropTypes.string
  }

  return Ditto
}

export default cloneNewDitto()
