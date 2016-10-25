import React from 'react'
import { capitalize } from '../utils'

const flex = { display: 'flex' }
const row = flex
const col = { ...flex, flexDirection: 'column' }

export const layoutApi = {
  row,
  col,
  rowx: { justifyContent: 'center' },
  rowy: { alignItems: 'center' },
  colx: { alignItems: 'center' },
  coly: { justifyContent: 'center' },
  rowxEnd: {
    justifyContent: 'flex-end'
  },
  colxEnd: {
    alignItems: 'flex-end'
  },
  rowyEnd: {
    alignItems: 'flex-end'
  },
  colyEnd: {
    justifyContent: 'flex-end'
  },
  reverse: {
    flexDirection: 'row-reverse'
  },
  columnReverse: {
    flexDirection: 'column-reverse'
  },
  wrap: {
    flexWrap: 'wrap'
  },
  wrapReverse: {
    flexWrap: 'wrap-reverse'
  },
  spaceBetween: {
    justifyContent: 'space-between'
  },
  spaceAround: {
    justifyContent: 'space-around'
  }
}

const axisConfig = {
  row: {
    x: {
      true: 'rowx',
      end: 'rowxEnd'
    },
    y: {
      true: 'rowy',
      end: 'rowyEnd'
    }
  },
  col: {
    x: {
      true: 'colx',
      end: 'colxEnd'
    },
    y: {
      true: 'coly',
      end: 'colyEnd'
    }
  }
}

export const useColApi = useLayoutApi('col')
export const useRowApi = useLayoutApi('row')

/**
 * 1. When applying alignItems or JustifyContent properties we will give
 * preference to the spaceProp.
 */
function useLayoutApi (type) {
  let axisPropConfig = axisConfig[type]
  return (Style) => {
    const LayoutApi = ({x, y, space, wrap, reverse, ...props}) => {
      let xAxisProp = axisPropConfig.x[x]
      let yAxisProp = axisPropConfig.y[y]
      let spaceProp = false
      let wrapProp = false
      let reverseProp = false

      if (space) {
        spaceProp = `space${capitalize(space)}`
      }

      if (wrap === true) {
        wrapProp = 'wrap'
      } else if (wrap === 'reverse') {
        wrapProp = 'wrapReverse'
      }

      if (reverse) {
        reverseProp = type === 'row'
          ? 'row-reverse'
          : 'columne-reverse'
      }

      return <Style {...{
        ...props,
        [type]: true,
        [xAxisProp]: true,
        [yAxisProp]: true,
        [spaceProp]: true, /* [1] */
        [wrapProp]: true,
        [reverseProp]: true
      }} />
    }

    return LayoutApi
  }
}
