const flex = { display: 'flex' }
const row = flex
const col = { ...flex, flexDirection: 'column' }
const rowcx = { ...flex, justifyContent: 'center' }
const rowcy = { ...flex, alignItems: 'center' }
const colcx = { ...col, alignItems: 'center' }
const colcy = { ...col, justifyContent: 'center' }

export const layoutApi = {
  row,
  col,
  rowcx,
  rowcy,
  colcx,
  colcy,
  rowcxcy: { ...rowcx, ...rowcy },
  colcxcy: { ...colcx, ...colcy },
  reverse: {
    flexDirection: 'row-reverse'
  },
  wrap: {
    flexWrap: 'wrap'
  },
  wrapReverse: {
    flexWrap: 'wrap-reverse'
  },
  alignEnd: {
    alignItems: 'flex-end'
  },
  alignStretch: {
    alignItems: 'stretch'
  },
  justifyEnd: {
    justifyContent: 'flex-end'
  },
  spaceBetween: {
    justifyContent: 'space-between'
  },
  spaceAround: {
    justifyContent: 'space-around'
  }
}
