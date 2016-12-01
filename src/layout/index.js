import React from 'react'
import { pluck, capitalize } from '../utils'

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
 * preference to the spaceProp by placing it last.
 */
function propAdaptors (type) {
  return [
    ({x}) => axisConfig[type].x[x],
    ({y}) => axisConfig[type].y[y],
    ({wrap}) => {
      if (wrap === true) {
        return 'wrap'
      } else if (wrap === 'reverse') {
        return 'wrapReverse'
      } else {
        return false
      }
    },
    ({reverse}) => {
      if (!reverse) {
        return false
      } else if (type === 'row') {
        return 'reverse'
      } else {
        return 'columnReverse'
      }
    },
    ({space}) => space ? `space${capitalize(space)}` : false /* [1] */
  ]
}

function useLayoutApi (type) {
  const adaptors = propAdaptors(type)
  return (Style) => {
    const LayoutApi = (props) => {
      let adaptedProps = { [type]: true }
      adaptors.forEach((adaptor) => {
        const value = adaptor(props)
        if (value) {
          adaptedProps[value] = true
        }
      })

      return <Style {...{
        ...pluck(['x', 'y', 'reverse', 'wrap', 'space'], props),
        ...adaptedProps
      }}/>
    }

    return LayoutApi
  }
}
