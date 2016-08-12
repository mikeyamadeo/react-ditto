const flex = { display: 'flex' }
const X = flex
const Y = { ...flex, flexDirection: 'column' }
const Xx = { ...flex, alignItems: 'center' }
const Xy = { ...flex, justifyContent: 'center' }
const Yx = { ...Y, justifyContent: 'center' }
const Yy = { ...Y, alignItems: 'center' }

export const axisApi = {
  X,
  Y,
  Xx,
  Xy,
  Yx,
  Yy,
  Xxy: { ...Xx, ...Xy },
  Yxy: { ...Yx, ...Yy },
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
