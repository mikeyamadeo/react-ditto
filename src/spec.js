import test from 'ava'
import React from 'react'
import { render } from 'react-dom'
import asap from 'asap'
import {Box, Row, Col} from './index.js'
import {pxToEm} from './space/utils'

test.serial('Ditto: spacing api applies styles as expected for Box, Row, and Col', async t => {
  render(
    <div>
      <Box id='individual' {...{
        pt: 0,
        pr: '--',
        pb: '-',
        pl: true,
        mt: true,
        mr: '+',
        mb: '++',
        ml: 0
      }}>Hey</Box>

      <Row id='axis' {...{
        mx: true,
        my: '--',
        px: '+',
        py: 0
      }}>Ho</Row>

      <Col id='all' {...{
        p: '++',
        m: '-'
      }}>Ho</Col>
    </div>
    , document.getElementById('root')
  )

  asap(() => {
    applyAphroditeWorkaround(document)

    // individual
    let el = document.getElementById('individual')
    let appliedStyles = window.getComputedStyle(el)

    t.deepEqual(appliedStyles['padding-left'], pxToEm(18))
    t.deepEqual(appliedStyles['padding-bottom'], pxToEm(12))
    t.deepEqual(appliedStyles['padding-right'], pxToEm(6))
    t.deepEqual(appliedStyles['padding-top'], '0px')

    t.deepEqual(appliedStyles['margin-left'], '0px')
    t.deepEqual(appliedStyles['margin-bottom'], pxToEm(48))
    t.deepEqual(appliedStyles['margin-right'], pxToEm(30))
    t.deepEqual(appliedStyles['margin-top'], pxToEm(18))

    // Axis
    el = document.getElementById('axis')
    appliedStyles = window.getComputedStyle(el)

    t.deepEqual(appliedStyles['margin-right'], pxToEm(18))
    t.deepEqual(appliedStyles['margin-left'], pxToEm(18))
    t.deepEqual(appliedStyles['padding-left'], pxToEm(30))
    t.deepEqual(appliedStyles['padding-left'], pxToEm(30))

    t.deepEqual(appliedStyles['margin-top'], pxToEm(6))
    t.deepEqual(appliedStyles['margin-bottom'], pxToEm(6))
    t.deepEqual(appliedStyles['padding-top'], '0px')
    t.deepEqual(appliedStyles['padding-bottom'], '0px')

    // All
    el = document.getElementById('all')
    appliedStyles = window.getComputedStyle(el)

    t.deepEqual(appliedStyles['padding-left'], pxToEm(48))
    t.deepEqual(appliedStyles['padding-bottom'], pxToEm(48))
    t.deepEqual(appliedStyles['padding-right'], pxToEm(48))
    t.deepEqual(appliedStyles['padding-top'], pxToEm(48))

    t.deepEqual(appliedStyles['margin-left'], pxToEm(12))
    t.deepEqual(appliedStyles['margin-bottom'], pxToEm(12))
    t.deepEqual(appliedStyles['margin-right'], pxToEm(12))
    t.deepEqual(appliedStyles['margin-top'], pxToEm(12))

    t.pass()
  })
})

test.serial('Ditto: flex property is applied to Row & Col but not Box', async t => {
  render(
    <div>
      <Box id='box'>hey</Box>
      <Row id='row'>hey</Row>
      <Col id='col'>hey</Col>
    </div>
    , document.getElementById('root')
  )

  asap(() => {
    applyAphroditeWorkaround(document)
    let el = document.getElementById('box')
    let appliedStyles = window.getComputedStyle(el)
    t.not(appliedStyles.display, 'flex')

    el = document.getElementById('col')
    appliedStyles = window.getComputedStyle(el)
    t.is(appliedStyles.display, 'flex')

    el = document.getElementById('row')
    appliedStyles = window.getComputedStyle(el)
    t.is(appliedStyles.display, 'flex')
    t.pass()
  })
})

test.serial('Row, Col: x & y props apply style properties as expected', async t => {
  render(
    <div>
      <Row id='cx' x >Hi</Row>
      <Col id='absolute-center' x y>Hi</Col>
      <Row id='row-end' x='end' y>Ho</Row>
      <Col id='col-end' x y='end'>Ho</Col>
    </div>
    , document.getElementById('root')
  )

  asap(() => {
    applyAphroditeWorkaround(document)
    let el = document.getElementById('cx')
    let appliedStyles = window.getComputedStyle(el)
    t.is(appliedStyles.justifyContent, 'center')
    t.not(appliedStyles.alignItems, 'center')

    el = document.getElementById('absolute-center')
    appliedStyles = window.getComputedStyle(el)
    t.is(appliedStyles.alignItems, 'center')
    t.is(appliedStyles.justifyContent, 'center')

    el = document.getElementById('row-end')
    appliedStyles = window.getComputedStyle(el)
    t.not(appliedStyles.alignItems, 'flex-end')
    t.is(appliedStyles.justifyContent, 'flex-end')

    el = document.getElementById('col-end')
    appliedStyles = window.getComputedStyle(el)
    t.not(appliedStyles.alignItems, 'flex-end')
    t.is(appliedStyles.justifyContent, 'flex-end')

    t.pass()
  })
})

test.serial('Row, Col: space & wrap props apply style properties as expected', async t => {
  render(
    <div>
      <Row id='no-wrap'/>
      <Row id='around-wrap' x space='around' wrap>Hi</Row>
      <Col id='between-reverse' space='between' wrap='reverse'>Hi</Col>
    </div>
    , document.getElementById('root')
  )

  asap(() => {
    applyAphroditeWorkaround(document)
    let el = document.getElementById('no-wrap')
    let appliedStyles = window.getComputedStyle(el)
    t.is(appliedStyles.flexWrap, undefined)

    el = document.getElementById('around-wrap')
    appliedStyles = window.getComputedStyle(el)
    t.is(appliedStyles.justifyContent, 'space-around')
    t.is(appliedStyles.flexWrap, 'wrap')

    el = document.getElementById('between-reverse')
    appliedStyles = window.getComputedStyle(el)
    t.is(appliedStyles.justifyContent, 'space-between')
    t.is(appliedStyles.flexWrap, 'wrap-reverse')

    t.pass()
  })
})

test.serial('Box, Row, Col: sizing api applies styles as expected', async t => {
  render(
    <div>
      <Box id='size' width='20px' height='20em'/>
      <Row id='max-size' maxWidth='20em' maxHeight='20px'>Hi</Row>
      <Col id='min-size' minWidth='20px' minHeight='20em'>Hi</Col>
    </div>
    , document.getElementById('root')
  )

  asap(() => {
    applyAphroditeWorkaround(document)
    let el = document.getElementById('size')
    let appliedStyles = window.getComputedStyle(el)
    t.is(appliedStyles.width, '20px')
    t.is(appliedStyles.height, '20em')

    el = document.getElementById('max-size')
    appliedStyles = window.getComputedStyle(el)
    t.is(appliedStyles.maxWidth, '20em')
    t.is(appliedStyles.maxHeight, '20px')

    el = document.getElementById('min-size')
    appliedStyles = window.getComputedStyle(el)
    t.is(appliedStyles.minWidth, '20px')
    t.is(appliedStyles.minHeight, '20em')

    t.pass()
  })
})

function logDom (document) {
  console.log(document.documentElement.outerHTML
    .split('<').join('\n<')
    .split('>').join('>\n'))
}

function insertStyleTag (document, content) {
  const style = document.createElement('style')

  style.type = 'text/css'
  if (style.styleSheet) {
    style.styleSheet.cssText = content
  } else {
    style.appendChild(document.createTextNode(content))
  }
  document.head.appendChild(style)
}

const cleanUpStyles = (document) => {
  const head = document.getElementsByTagName('head')[0]

  while (head.hasChildNodes() && document.getElementsByTagName('style').length > 1) {
    head.removeChild(head.lastChild)
  }
}

function applyAphroditeWorkaround (document) {
  cleanUpStyles(document)
  const styleTags = document.getElementsByTagName('style')
  const aphroStyles = styleTags[styleTags.length - 1].textContent
  insertStyleTag(document, aphroStyles)
}
