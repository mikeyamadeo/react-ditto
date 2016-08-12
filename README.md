# react-ditto
Component layout and spacing utilities for rendering UI with react
![ditto](http://pokemonleedle.weebly.com/uploads/2/7/9/5/27952027/3465339_orig.gif)

Placeholder for publishing module that will do the following

```jsx
import { ___, X } from 'react-ditto'
import Txt from 'react-txt'
import Btn from 'App/shared/atm.Btn'
import Input from 'App/shared/atm.Input'

const SearchUI = ({inputVal, onInputUpdate, onSearch}) =>
  <X x p>
    <___ mr1>
      <Txt tag='label' color='secondary'>Search</Txt>
      <Input value={inputVal} onChange={onInputUpdate} />
    </___>
    <Btn onClick={onSearch}>Search</Btn>
  <X>
```

Equivalent using Aphrodite

```jsx
import { StyleSheet, css } from 'aphrodite'
import { colors, spacing } from 'App/style/settings'
import Btn from 'App/shared/atm.Btn'
import Input from 'App/shared/atm.Input'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    align: 'center',
    padding: spacing.default
  },
  label: {
    color: colors.secondary
  },
  space: {
    marginRight: spacing.tiny
  }
})

const SearchUI = ({inputVal, onInputUpdate, onSearch}) =>
  <div className={css(styles.container)}>
    <div className={css(style.space)}>
      <label className={css(style.label)}>Search</label>
      <Input value={inputVal} onChange={onInputUpdate} />
    </div>
    <Btn onClick={onSearch}>Search</Btn>
  <div>
```
