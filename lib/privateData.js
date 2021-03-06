'use strict'

const Archetype = require('archetype-js')

module.exports = new Archetype({
  _id: {
    $type: 'string',
    $required: true
  },
  contractAddress: { 
    $type: 'string',
    $required: true
  },
  name: {
    first: { $type: 'string' },
    last: { $type: 'string' }
  },
  age: { $type: 'number' },
  email: { $type: 'string' },
  location: { $type: 'string' },
  mobile: { $type: 'string' }

}).compile('privateDataType')