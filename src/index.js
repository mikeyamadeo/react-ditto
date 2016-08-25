import React, { PropTypes } from 'react'
import { defineStyleComponent } from './Style'
import { defineSpaceApi } from './space'
import { layoutApi } from './layout'

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

  const api = {...spaceApi, ...layoutApi}

  const Style = defineStyleComponent(api)

  const Ditto = ({
    row, col, cx, cy,

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

    if (!row && !col) {
      return <Style {...props}>{children}</Style>
    } else if (row && col) {
      console.warn('Both row & col axis props found in Ditto. Giving row presidence.')
    } else if (row) {
      axisPropName.push('row')
    } else if (col) {
      axisPropName.push('col')
    }

    if (cx) {
      axisPropName.push('cx')
    }

    if (cy) {
      axisPropName.push('cy')
    }

    const axisProp = axisPropName.join('')

    if (axisPropName) {
      props[axisProp] = true
    }

    return <Style {...props} >{children}</Style>
  }

  Ditto.propTypes = {
    tag: PropTypes.string
  }

  return Ditto
}

export default cloneNewDitto()
