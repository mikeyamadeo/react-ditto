// import { css } from 'aphrodite'

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

export const separate = (keys, map) => {
  let picked = {}
  let plucked = {}

  keys.forEach((key) => {
    const value = map[key]

    if (typeof value !== 'undefined') {
      picked[key] = value
    } else {
      plucked[key] = value
    }
  })

  return {
    picked,
    plucked
  }
}

export const flatten = (collection) =>
  collection.reduce((prev, next) => ({
    ...prev,
    ...next
  }),
{})
