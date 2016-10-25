import React from 'react'
import { pick, pluck } from '../utils'

const sizing = [
  'width', 'maxWidth', 'minWidth',
  'height', 'maxHeight', 'minHeight'
]

export const useSizeApi = Component => ({style, ...props}) =>
  <Component {...pluck(sizing, props)} style={{...style, ...pick(sizing, props)}} />
