export const pick = (keys, map) => {
  let newObj = {}

  keys.forEach((key) => {
    if (typeof map[key] !== 'undefined') newObj[key] = map[key]
  })

  return newObj
}

export const pluck = (keys, map) => {
  let newObj = { ...map }

  keys.forEach((key) => delete newObj[key])

  return newObj
}

export const capitalize = string => string.split(' ').map(str =>
  str.charAt(0).toUpperCase() + str.slice(1)
).join(' ')

export const flatten = (collection) =>
  collection.reduce((prev, next) => ({
    ...prev,
    ...next
  }),
{})
