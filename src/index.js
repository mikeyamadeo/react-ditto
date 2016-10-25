import React from 'react'
import { pick, pluck } from './utils'
import { defineStyleComponent } from './Style'
import { defineSpaceApi, useSpaceOperatorApi } from './space'
import { layoutApi, useColApi, useRowApi } from './layout'

const sizing = [
  'width', 'maxWidth', 'minWidth',
  'height', 'maxHeight', 'minHeight'
]

const useSizeApi = Component => ({style, ...props}) =>
  <Component {...pluck(sizing, props)} style={{...style, ...pick(sizing, props)}} />

export const cloneNewDitto = ({
  baseSpace
} = {}) => {
  const spaceApi = defineSpaceApi({
    base: baseSpace
  })

  const Style = defineStyleComponent({...spaceApi, ...layoutApi})

  return {
    Col: useSizeApi(useSpaceOperatorApi(useColApi(Style))),
    Row: useSizeApi(useSpaceOperatorApi(useRowApi(Style))),
    Box: useSizeApi(useSpaceOperatorApi(defineStyleComponent(spaceApi)))
  }
}

const Ditto = cloneNewDitto()

export const Box = Ditto.Box
export const Row = Ditto.Row
export const Col = Ditto.Col

// export default cloneNewDitto()
