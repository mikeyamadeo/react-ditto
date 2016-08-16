#react-ditto <img src='https://camo.githubusercontent.com/4dcd7c4c933192970a8d86a9fac6634725891915/687474703a2f2f706f6b656d6f6e6c6565646c652e776565626c792e636f6d2f75706c6f6164732f322f372f392f352f32373935323032372f333436353333395f6f7269672e676966' width='80px' />
Transform layout to take whatever form you please without leaving the render method.

## Quick L👀ks
### Example set 1: Intro to layout or "axis" api by getting our Psyducks in a row
```jsx
import __ from 'react-ditto'

// align psyducks along X axis
const Psyducks = () =>
  <__ X>
    <Psyduck /> <Psyduck /> <Psyduck /> <Psyduck />
  </__>
```
<img src='https://raw.githubusercontent.com/mikeyamadeo/react-ditto/master/assets/psyducks-in-a-row.jpg' width='500px' />

```jsx
import __ from 'react-ditto'

// align along x axis positioned across y axis
const Psyducks = () =>
  <__ X y>
   <Psyduck /> <Psyduck /> <Psyduck /> <Psyduck />
  </__>
```
<img src='https://raw.githubusercontent.com/mikeyamadeo/react-ditto/master/assets/psyducks-in-a-row-Xy.jpg' width='500px' />


```jsx
import __ from 'react-ditto'

// align along x axis position across both x & y axis
const Psyducks = () =>
  <__ X x y>
   <Psyduck /> <Psyduck /> <Psyduck /> <Psyduck />
  </__>
```
<img src='https://raw.githubusercontent.com/mikeyamadeo/react-ditto/master/assets/psyducks-in-a-row-Xxy.jpg' width='500px' />


```jsx
import __ from 'react-ditto'

// align along x axis positioned across x axis placing space _between_ psyducks
const Psyducks = () =>
  <__ X x spaceBetween>
   <Psyduck /> <Psyduck /> <Psyduck /> <Psyduck />
  </__>
```
<img src='https://raw.githubusercontent.com/mikeyamadeo/react-ditto/master/assets/psyducks-in-a-row-Xxy.jpg' width='500px' />

```jsx
import __ from 'react-ditto'

// align along x axis positioned across x axis placing space _around_ psyducks
const Psyducks = () =>
  <__ X x spaceAround>
   <Psyduck /> <Psyduck /> <Psyduck /> <Psyduck />
  </__>
```
<img src='https://raw.githubusercontent.com/mikeyamadeo/react-ditto/master/assets/psyducks-in-a-row-XxySpaceAround.jpg' width='500px' />

```jsx
import __ from 'react-ditto'

// align along y axis positioned across y axis placing space _around_ psyducks
const Psyducks = () =>
  <__ Y y spaceAround>
   <Psyduck /> <Psyduck /> <Psyduck /> <Psyduck />
  </__>
```
<img src='https://raw.githubusercontent.com/mikeyamadeo/react-ditto/master/assets/psyducks-in-a-column.jpg' width='500px' />

```jsx
import __ from 'react-ditto'

// align along y axis positioned across y axis placing space _around_ and wrapping as space requires
const Psyducks = () =>
  <__ Y y spaceAround wrap>
   <Psyduck /> <Psyduck /> <Psyduck /> <Psyduck />
  </__>
```
<img src='https://github.com/mikeyamadeo/react-ditto/blob/master/assets/psyducks-in-a-column-YyWrap.jpg' width='500px' />

### Example set 2: Getting a flavor for the spacing api by helping Snorlax protect his candy
<img src='https://github.com/mikeyamadeo/react-ditto/blob/master/assets/snorlax-candy-protection-A.jpg' width='500px' />

1. Let's get as far away from Haunter as we can by applying large left margin margin
```jsx
import __ from 'react-ditto'

// apply size level 5 (largest on scale from 0-5) margin to the left
const Psyducks = () =>
  <__ ml5>
   <Snorlax />
   <Candy />
  </__>
```
<img src='https://github.com/mikeyamadeo/react-ditto/blob/master/assets/snorlax-candy-protection-B.jpg' width='500px' />

2. Now let's give Snorlax some breathing room from Zapdos and Sandslash by applying top and bottom padding
```jsx
import __ from 'react-ditto'

// apply size level 3 (scale from 0-5) amount of padding to top (pt) and bottom (pb)
const SnorlaxAndCandy = () =>
  <__ X pt3 pb3>
   <Snorlax />
   <Candy />
  </__>
```
<img src='https://github.com/mikeyamadeo/react-ditto/blob/master/assets/snorlax-candy-protection-C.jpg' width='500px' />

3. Ever use the padding shorthand to apply it only vertically or horizonally (e.g. `padding: 10px 0`)? You can do similarly here. Let's apply this snorlax's vertical padding via shorthand:
```jsx
import __ from 'react-ditto'

// apply padding along the 'y' axis
const SnorlaxAndCandy = () =>
  <__ X py3>
   <Snorlax />
   <Candy />
  </__>
```

This shorthand works for both margin and padding.

###Example set 3: Putting it all together

Let's say we want to render our pokemon go team:

![PokemonListUI](https://raw.githubusercontent.com/mikeyamadeo/react-ditto/master/assets/PokemonListUI.png)

```jsx
import React from 'react'
import { render } from 'react-dom'
import ___ from 'react-ditto'
import { pokemon } from './examples/data'

const HealthBar = ({percentHealth}) =>
  <__ width='100%' height='6px'>
    <__ width={`${percentHealth}%`} height='100%'
      style={{backgroundColor: percentHealth < 25
        ? '#d34f4f' // red
        : percentHealth < 50
        ? '#f4d554' // yellow
        : '#6deeb6' // green
      }} />
  </__>

const PokemonList = ({pokemon}) =>
  <__ X wrap spaceBetween px2 tag='ul' maxWidth='380px'>
    {pokemon.map(p =>
      <__ Y y px1 my2 tag='li' >
        <h2>cp { p.cp }</h2>
        <img src={ p.img } height='90px' />
        <__ tag='h4' mb1>{ p.name }</__>
        <HealthBar percentHealth={ (p.health / p.maxHealth) * 100 } />
      </__>
    )}
  </__>
  
render(<PokemonList pokemon={pokemon} />, document.getElementById('root'))
```
