import React from 'react'
import {render} from 'react-dom'
import { Box, Row, Col } from '../src'
import { pokemon } from './data'
console.log(Box, Row, Col)
const colors = {
  red: '#d34f4f',
  yellow: '#f4d554',
  green: '#6deeb6'
}

const HealthBar = ({percentHealth}) =>
  <Box width='100%' height='6px'>
    <Box width={`${percentHealth}%`} height='100%'
      style={{backgroundColor: percentHealth < 25
        ? colors.red
        : percentHealth < 50
        ? colors.yellow
        : colors.green
      }} />
  </Box>

const PokemonList = ({pokemon}) =>
  <Row wrap spaceBetween p tag='ul' maxWidth='380px' id='train'>
    {pokemon.map(p =>
      <Col x p='--' my='--' tag='li' id='bird'>
        <h2>cp { p.cp }</h2>
        <img src={ p.img } height='90px' width='default'/>
        <Box tag='h4' mb='--'>{ p.name }</Box>
        <HealthBar percentHealth={(p.health / p.maxHealth) * 100} />
      </Col>
    )}
  </Row>

const Psyduck = () =>
  <img id='fox' src={require('../assets/snorlax-pokemon-go.png')} width='50px' />

const Psyducks = () =>
  <Col y='center' x='end' height='250px' >
    <Psyduck />
    <Psyduck />
    <Psyduck />
    <Psyduck />
  </Col>

render(
  <div>
    <PokemonList pokemon={pokemon} />
  </div>
  , document.querySelector('#example')
)
