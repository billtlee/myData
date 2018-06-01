'use strict'

const Archetype = require('archetype-js')

module.exports = new Archetype({
  owner: {
    $type: 'string',
    $required: true
  },
  name: {
    $type: 'string',
    $required: true
  },
  size: {
    $type: 'string',
    $required: false,
  },
  year: {
    $type: 'string',
    $required: false,
  },
  producer: {
    $type: 'string',
    $required: false,
  },
  country: {
    $type: 'string',
    $required: false,
  },
  region: {
    $type: 'string',
    $required: false,
  },
  subregion: {
    $type: 'string',
    $required: false,
  },
  color: {
    $type: 'string',
    $required: false,
  },
  degreeOfAlcohol: {
    $type: 'string',
    $required: false,
  },
  caskId: {
    $type: 'string',
    $required: false,
  },
  CaskType: {
    $type: 'string',
    $required: false,
  },
  woodType: {
    $type: 'string',
    $required: false,
  },
  contractAddress: {
    $type: 'string',
    $required: false,
  },
  value: {
    $type: 'number',
    $required: true
  }
}).compile('WhiskyType')