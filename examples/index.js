import React from 'react'
import {render} from 'react-dom'
import __ from '../src'
import { pokemon } from './data'

const colors = {
  red: '#d34f4f',
  yellow: '#f4d554',
  green: '#6deeb6'
}

const HealthBar = ({percentHealth}) =>
  <__ width='100%' height='6px'>
    <__ width={`${percentHealth}%`} height='100%'
      style={{backgroundColor: percentHealth < 25
        ? colors.red
        : percentHealth < 50
        ? colors.yellow
        : colors.green
      }} />
  </__>

const PokemonList = ({pokemon}) =>
  <__ row wrap spaceBetween px2 tag='ul' maxWidth='380px'>
    {pokemon.map(p =>
      <__ col cx px1 my2 tag='li' >
        <h2>cp { p.cp }</h2>
        <img src={ p.img } height='90px' />
        <__ tag='h4' mb1>{ p.name }</__>
        <HealthBar percentHealth={(p.health / p.maxHealth) * 100} />
      </__>
    )}
  </__>

render(
  <PokemonList pokemon={pokemon} />
  , document.querySelector('#example')
)
