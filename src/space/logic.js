import { pxToEm } from './utils'
import defaultConfig from './config'
const { keys } = Object

const sizeModifierFactory = ({
  base,
  scale,
  sizeSymbols
}) => {
  const scaleFunctions = {
    fibonacci () {
      let a = base
      let b = base
      let temp
      let obj = {}

      sizeSymbols.forEach(key => {
        temp = a
        a = a + b
        b = temp
        obj[key] = pxToEm(b)
      })

      return obj
    },

    linear () {
      // sizeSymbols.reduce((prev, next) => ({}))
    }
  }

  return scaleFunctions[scale]()
}

export const createPropValues = ({
  base = 6,
  scale = 'fibonacci',
  types = defaultConfig.types,
  sizeSymbols = defaultConfig.sizeSymbols,
  typeModifiers = defaultConfig.typeModifiers
} = {}) => {
  let propValues = {}

  const sizeModifiers = {
    0: 0,
    ...sizeModifierFactory({
      base,
      scale,
      sizeSymbols
    })
  }

  keys(types).forEach((t) => {
    keys(typeModifiers).forEach((tm) => {
      keys(sizeModifiers).forEach((sm) => {
        const key = t + tm + sm
        let value = {}
        const tmVals = typeModifiers[tm]

        tmVals.forEach((tmv) =>
          value[types[t] + tmv] = sizeModifiers[sm]
        )

        propValues[key] = value
      })
    })
  })

  return propValues
}
