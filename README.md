# react-ditto
Transform layout to take whatever form you please without leaving the render method.
![ditto](http://pokemonleedle.weebly.com/uploads/2/7/9/5/27952027/3465339_orig.gif)

## Quick L👀ks
Let's start by getting our Psyducks in a row:
```jsx
import __ from 'react-ditto'

// align psyducks along X axis
const Psyducks = () =>
  <__ X>
   <img src='psyduck.png' />
   <img src='psyduck.png' />
   <img src='psyduck.png' />
   <img src='psyduck.png' />
  </__>
```
![PokemonListUI](https://raw.githubusercontent.com/mikeyamadeo/react-ditto/master/assets/psyducks-in-a-row.jpg)

```jsx
import __ from 'react-ditto'

// align along x axis positioned across y axis
const Psyducks = () =>
  <__ X y>
   <img src='psyduck.png' />
   <img src='psyduck.png' />
   <img src='psyduck.png' />
   <img src='psyduck.png' />
  </__>
```
![PokemonListUI](https://raw.githubusercontent.com/mikeyamadeo/react-ditto/master/assets/psyducks-in-a-row-Xy.jpg)

```jsx
import __ from 'react-ditto'

// align along x axis position across both x & y axis
const Psyducks = () =>
  <__ X x y>
   <img src='psyduck.png' />
   <img src='psyduck.png' />
   <img src='psyduck.png' />
   <img src='psyduck.png' />
  </__>
```
![PokemonListUI](https://raw.githubusercontent.com/mikeyamadeo/react-ditto/master/assets/psyducks-in-a-row-Xxy.jpg)

```jsx
import __ from 'react-ditto'

// align along x axis positioned across x axis placing space _between_ psyducks
const Psyducks = () =>
  <__ X x spaceBetween>
   <img src='psyduck.png' />
   <img src='psyduck.png' />
   <img src='psyduck.png' />
   <img src='psyduck.png' />
  </__>
```
![PokemonListUI](https://raw.githubusercontent.com/mikeyamadeo/react-ditto/master/assets/psyducks-in-a-row-XxySpaceBetween.jpg)

```jsx
import __ from 'react-ditto'

// align along x axis positioned across x axis placing space _around_ psyducks
const Psyducks = () =>
  <__ X x spaceAround>
   <img src='psyduck.png' />
   <img src='psyduck.png' />
   <img src='psyduck.png' />
   <img src='psyduck.png' />
  </__>
```
![PokemonListUI](https://raw.githubusercontent.com/mikeyamadeo/react-ditto/master/assets/psyducks-in-a-row-XxySpaceAround.jpg)

```jsx
import __ from 'react-ditto'

// align along y axis positioned across y axis placing space _around_ psyducks
const Psyducks = () =>
  <__ Y y spaceAround>
   <img src='psyduck.png' />
   <img src='psyduck.png' />
   <img src='psyduck.png' />
   <img src='psyduck.png' />
  </__>
```
![psyducks-in-a-column](https://raw.githubusercontent.com/mikeyamadeo/react-ditto/master/assets/psyducks-in-a-column.jpg)

```jsx
import __ from 'react-ditto'

// align along y axis positioned across y axis placing space _around_ psyducks
const Psyducks = () =>
  <__ Y y spaceAround wrap>
   <img src='psyduck.png' />
   <img src='psyduck.png' />
   <img src='psyduck.png' />
   <img src='psyduck.png' />
  </__>
```
![Pysducks-in-a-column-wrap](https://github.com/mikeyamadeo/react-ditto/blob/master/assets/psyducks-in-a-column-YyWrap.jpg)


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
