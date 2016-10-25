export const types = {
  m: 'margin',
  p: 'padding'
}

export const typeModifiers = {
  '': [''],
  t: ['Top'],
  r: ['Right'],
  b: ['Bottom'],
  l: ['Left'],
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
}

export const sizeSymbols = [
  '1',
  '2',
  '3',
  '4',
  '5'
]

/**
 * Combines type and type modifiers to produce list of available prop names
 * e.g [p, pt, mx, ..etc.]
 */
export const spaceApiPropNames =
  Object.keys(types)
    .reduce((props, type) => [
      ...props,
      ...Object.keys(typeModifiers)
        .map((tm) => type + tm)
    ], [])

export default {
  types,
  typeModifiers,
  sizeSymbols
}
