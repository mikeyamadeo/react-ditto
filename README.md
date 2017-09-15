# react-ditto

<img src='https://camo.githubusercontent.com/4dcd7c4c933192970a8d86a9fac6634725891915/687474703a2f2f706f6b656d6f6e6c6565646c652e776565626c792e636f6d2f75706c6f6164732f322f372f392f352f32373935323032372f333436353333395f6f7269672e676966' width='80px' />
Transform layout to take whatever form you please without leaving the render method.

## Quick L👀ks
### Example set 1: Intro to layout or "axis" api by getting our Psyducks in a row
```jsx
import { Row } from 'react-ditto'

// align psyducks in a row
const Psyducks = () =>
  <Row>
    <Psyduck /> <Psyduck /> <Psyduck /> <Psyduck />
  </Row>
```
<img src='https://raw.githubusercontent.com/mikeyamadeo/react-ditto/master/assets/psyducks-in-a-row.jpg' width='500px' />

```jsx
import { Row } from 'react-ditto'

// center the row of psyducks along the x axis
const Psyducks = () =>
  <Row x>
   <Psyduck /> <Psyduck /> <Psyduck /> <Psyduck />
  </Row>
```
<img src='https://raw.githubusercontent.com/mikeyamadeo/react-ditto/master/assets/psyducks-in-a-row-Xy.jpg' width='500px' />


```jsx
import { Row } from 'react-ditto'

// absolutely center the row of psyducks along both x & y axis
const Psyducks = () =>
  <Row x y>
   <Psyduck /> <Psyduck /> <Psyduck /> <Psyduck />
  </Row>
```
<img src='https://raw.githubusercontent.com/mikeyamadeo/react-ditto/master/assets/psyducks-in-a-row-Xxy.jpg' width='500px' />


```jsx
import { Row } from 'react-ditto'

// center along y axis while placing space _between_ row of psyducks
const Psyducks = () =>
  <Row y space='between'>
   <Psyduck /> <Psyduck /> <Psyduck /> <Psyduck />
  </Row>
```
<img src='https://raw.githubusercontent.com/mikeyamadeo/react-ditto/master/assets/psyducks-in-a-row-XxySpaceBetween.jpg' width='500px' />

```jsx
import { Row } from 'react-ditto'

// center along y axis while placing space _around_ row of psyducks
const Psyducks = () =>
  <Row y space='around'>
   <Psyduck /> <Psyduck /> <Psyduck /> <Psyduck />
  </Row>
```
<img src='https://raw.githubusercontent.com/mikeyamadeo/react-ditto/master/assets/psyducks-in-a-row-XxySpaceAround.jpg' width='500px' />

```jsx
import { Col } from 'react-ditto'

// render psyducks as a column (with space _around_) and center along the x axis
const Psyducks = () =>
  <Col x space='around'>
   <Psyduck /> <Psyduck /> <Psyduck /> <Psyduck />
  </Col>
```
<img src='https://raw.githubusercontent.com/mikeyamadeo/react-ditto/master/assets/psyducks-in-a-column.jpg' width='500px' />

```jsx
import { Col } from 'react-ditto'

// render psyducks in a column (with space _around_) and wrap as room requires
const Psyducks = () =>
  <Col space='around wrap>
   <Psyduck /> <Psyduck /> <Psyduck /> <Psyduck />
  </Col>
```
<img src='https://github.com/mikeyamadeo/react-ditto/blob/master/assets/psyducks-in-a-column-YyWrap.jpg' width='500px' />

### Example set 2: Getting a flavor for the spacing api by helping Snorlax protect his candy
<img src='https://github.com/mikeyamadeo/react-ditto/blob/master/assets/snorlax-candy-protection-A.jpg' width='500px' />

First, let's get as far away from Haunter as we can by applying large left margin margin
```jsx
import { Box } from 'react-ditto'

// apply size level giant (++) margin to the left
const SnorlaxAndCandy = () =>
  <Box ml='++'>
   <Snorlax />
   <Candy />
  </Box>
```
<img src='https://github.com/mikeyamadeo/react-ditto/blob/master/assets/snorlax-candy-protection-B.jpg' width='500px' />

Now we'll give Snorlax some breathing room from Zapdos and Sandslash by applying top and bottom padding
```jsx
import { Box } from 'react-ditto'

// apply size level 3 (scale from 0-5) amount of padding to top (pt) and bottom (pb)
const SnorlaxAndCandy = () =>
  <Box x pt='+' pb='+'>
   <Snorlax />
   <Candy />
  </Box>
```
<img src='https://github.com/mikeyamadeo/react-ditto/blob/master/assets/snorlax-candy-protection-C.jpg' width='500px' />

Finally, ever use the padding shorthand to apply it only vertically or horizonally (e.g. `padding: 10px 0`)? You can do similarly here. Let's apply this snorlax's vertical padding via shorthand:
```jsx
import { Row } from 'react-ditto'

// apply padding along the 'y' axis
const SnorlaxAndCandy = () =>
  <Row py='+'>
   <Snorlax />
   <Candy />
  </Row>
```

This shorthand works for both margin and padding.

###Example set 3: Putting it all together

Let's say we want to render our pokemon go team:

![PokemonListUI](https://raw.githubusercontent.com/mikeyamadeo/react-ditto/master/assets/PokemonListUI.png)

```jsx
import React from 'react'
import { render } from 'react-dom'
import { Box, Row, Col } from 'react-ditto'
import { pokemon } from './examples/data'

const HealthBar = ({percentHealth}) =>
  <Box width='100%' height='6px'>
    <Box width={`${percentHealth}%`} height='100%'
      css={{backgroundColor: percentHealth < 25
        ? '#d34f4f' // red
        : percentHealth < 50
        ? '#f4d554' // yellow
        : '#6deeb6' // green
      }} />
  </Box>

const PokemonList = ({pokemon}) =>
  <Row wrap space='between' px tag='ul' maxWidth='380px'>
    {pokemon.map(p =>
      <Col x px='-' my tag='li' >
        <h2>cp { p.cp }</h2>
        <img src={ p.img } height='90px' />
        <Box tag='h4' mb1>{ p.name }</Box>
        <HealthBar percentHealth={ (p.health / p.maxHealth) * 100 } />
      </Col>
    )}
  </Row>

render(<PokemonList pokemon={pokemon} />, document.getElementById('root'))
```

## API

`react-ditto` is now built on top of [glamorous](https://github.com/paypal/glamorous) to use its [jsxstyle](https://github.com/smyte/jsxstyle) inspired api.

So in addition to react-ditto's layout shorthand... you can use glamorous goodness
```js
import { Row } from 'react-ditto'

const DittoAndGlamorous = <Box x y pt color='blue' css={{':hover': { color: 'green' }} />
```

```js
const spacingPropTypes = PropTypes.oneOf([
  0, '0',       // none
  '--',         // tiny
  '-',          // small
  true,         // standard
  '+',          // big
  '++'          // giant
])

const axisPropTypes = PropTypes.oneOf([
  false,        // (Default) place at "start" of given axis (far left [x] or top [y])
  true,         // center across given axis
  'end'        // place at "end" of given axis (far right [x] or bottom [y])
])

const sizingPropTypes = PropTypes.string

const api = {

  // layout api
  x: axisPropTypes,
  y: axisPropTypes,
  space: PropTypes.oneOf([
    'between',  // |x  x  x|
    'around'    // | x x x |
  ]),
  start: PropTypes.oneOf([
    'end'       // |      X|
  ]),
  wrap: ProptTypes.oneOf([
    false,      // squish all chilrdren to fit space
    true,       // overflow children underneath
    'reverse'   // overflow children above
  ]),
  reverse: PropTypes.onOf({
    true,
    false
  })

  // spacing api
  p: spacingPropTypes,       // padding
  pt: spacingPropTypes,      // padding top
  pr: spacingPropTypes,      // padding right
  pb: spacingPropTypes,      // padding bottom
  pl: spacingPropTypes,      // padding left
  px: spacingPropTypes,      // horizontal padding
  py: spacingPropTypes,      // vertical padding

  m: spacingPropTypes,       // margin
  mt: spacingPropTypes,      // margin top
  mr: spacingPropTypes,      // margin right
  mb: spacingPropTypes,      // margin bottom
  ml: spacingPropTypes,      // margin left
  mx: spacingPropTypes,      // horizontal margin
  my: spacingPropTypes,      // vertical margin

  // sizing api
  size: sizingPropTypes,

  height: sizingPropTypes,
  maxHeight: sizingPropTypes,
  minHeight: sizingPropTypes,

  width: sizingPropTypes,
  maxWidth: sizingPropTypes,
  minWidth sizingPropTypes,

}

```
