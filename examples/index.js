import React from 'react'
import {render} from 'react-dom'
import ___ from '../src'

render(
  <div>
    <___ pt5 ml4 ml1 X y style={{backgroundColor: 'red'}}>
      Example
    </___>
  </div>
  , document.querySelector('#example')
)
