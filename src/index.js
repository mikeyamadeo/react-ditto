import React, { PropTypes } from 'react'
import { defineStyleApiComponent } from './StyleApi'
import { defineSpaceApi } from './space'
import { axisApi } from './axis'

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
    children,
    ...rest
  }) => {
    let axisProp = []

    if (!X && !Y) {
      return <StyleApi {...rest} />
    } else if (X && Y) {
      console.warn('Both X & Y axis props found in Ditto. Giving X presidence.')
    } else if (X) {
      axisProp.push('X')
    } else if (Y) {
      axisProp.push('Y')
    }

    if (x) {
      axisProp.push('x')
    }

    if (y) {
      axisProp.push('y')
    }

    return <StyleApi {...{
      ...rest,
      [axisProp.join('')]: true
    }}>{children}</StyleApi>
  }

  Ditto.propTypes = {
    tag: PropTypes.string
  }

  return Ditto
}

export default cloneNewDitto()
