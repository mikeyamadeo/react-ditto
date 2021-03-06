import React from 'react'
import PropTypes from 'prop-types'
import { pluck } from '../utils'
import { spaceApiPropNames } from './config'
import { createPropValues, flattenOperatorApi } from './logic'

// options:
// scale ['fibonacci', 'linear']
// base {Number}
// scaleModifiers
export const defineSpaceApi = createPropValues

export default createPropValues({ base: 6 })

const ptVal = PropTypes.oneOf([ 0, '0', '--', '-', true, false, '+', '++' ])

export const useSpaceOperatorApi = Component => {
  const OperatorApi = props => (
    <Component
      {...pluck(spaceApiPropNames, props)}
      {...flattenOperatorApi(props)}
    />
  )

  OperatorApi.propTypes = {
    p: ptVal,
    pt: ptVal,
    pr: ptVal,
    pb: ptVal,
    pl: ptVal,
    px: ptVal,
    py: ptVal,
    m: ptVal,
    mt: ptVal,
    mr: ptVal,
    mb: ptVal,
    ml: ptVal,
    mx: ptVal,
    my: ptVal
  }
  return OperatorApi
}
