# react-ditto
Transform layout to take whatever form you please without leaving the render method.
![ditto](http://pokemonleedle.weebly.com/uploads/2/7/9/5/27952027/3465339_orig.gif)

```jsx
import React from 'react'
import { render } from 'react-dom'
import ___ from 'react-ditto'

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
