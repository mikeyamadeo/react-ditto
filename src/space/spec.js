import test from 'ava'
import { flattenOperatorApi, createPropValues } from './logic'

test('correctly flattens operator api to boolean api', async t => {
  const expectedBooleanPropValues = {
    p0: true,
    pt1: true,
    pr2: true,
    pb3: true,
    pl4: true,
    px5: true
  }

  const booleanPropValues = flattenOperatorApi({
    p: 0,
    pt: '--',
    pr: '-',
    pb: true,
    pl: '+',
    px: '++'
  })

  t.deepEqual(booleanPropValues, expectedBooleanPropValues)
  t.pass()
})

test('createPropValues', async t => {
  const propValues = createPropValues()

  t.deepEqual(propValues.pt1, {paddingTop: '0.375em'})
  t.pass()
})

test('customized createPropValues', async t => {
  // const types = {
  //   p: 'padding',
  //   m: 'margin'
  // }
  // const typeModifiers = {
  //   x: ['x', 'X'],
  //   y: ['y', 'Y']
  // }
  // const sizeSymbols = [
  //   '_'
  // ]
  // const expected = {
  //   px_: {paddingx: '1em', paddingX: '1em'},
  //   py_: {paddingy: '1em', paddingY: '1em'},
  //   mx_: {marginx: '1em', marginX: '1em'},
  //   my_: {marginy: '1em', marginY: '1em'}
  // }
  const propValues = createPropValues({base: 4})

  t.deepEqual(propValues.mb1, {marginBottom: '0.25em'})
  t.pass()
})
