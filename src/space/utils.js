const baseFontSize = 16

export const pxToEm = (px) =>
  `${px / baseFontSize}em`

export const emToPx = (em) =>
  `${em * baseFontSize}px`
