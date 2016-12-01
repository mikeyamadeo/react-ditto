import React from 'react'
import {render} from 'react-dom'
import { Box, Row, Col } from '../src'
import { pokemon } from './data'

const colors = {
  red: '#d34f4f',
  yellow: '#f4d554',
  green: '#6deeb6'
}

const HealthBar = React.createClass({
  propTypes: {
    percentHealth: React.PropTypes.number
  },

  testRef (node) {
    console.log(node)
  },

  render () {
    const {percentHealth} = this.props

    return (
      <Box width='100%' height='6px'>
        <Box width={`${percentHealth}%`} height='100%' baseRef={this.testRef}
          style={{backgroundColor: percentHealth < 25
            ? colors.red
            : percentHealth < 50
            ? colors.yellow
            : colors.green
          }} />
      </Box>
    )
  }
})

const PokemonList = ({pokemon}) =>
  <Row wrap spaceBetween p tag='ul' maxWidth='380px' id='train'>
    {pokemon.map(p =>
      <Col x p='--' my='--' tag='li' id='bird'>
        <h2>cp { p.cp }</h2>
        <img src={ p.img } height='90px'/>
        <Box tag='h4' mb='--'>{ p.name }</Box>
        <HealthBar percentHealth={(p.health / p.maxHealth) * 100} />
      </Col>
    )}
  </Row>

const Snorlax = () =>
  <img id='fox' src={require('../assets/snorlax-pokemon-go.png')} width='50px' />

const Snorlaxs = () =>
  <Col x space='around' height='250px' >
    <Snorlax />
    <Snorlax />
    <Snorlax />
    <Snorlax />
  </Col>

render(
  <div>
    <Snorlaxs />
    <PokemonList pokemon={pokemon} />
  </div>
  , document.querySelector('#example')
)
