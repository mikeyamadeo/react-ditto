import test from 'ava'
import { createPropValues } from './logic'

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
