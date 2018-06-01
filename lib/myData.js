'use strict'

const Archetype = require('archetype-js')

module.exports = new Archetype({
  owner: {
    $type: 'string',
    $required: true
  },
  contractAddress: { $type: 'string' },
  name: {
    first: { $type: 'string' },
    last: { $type: 'string' }
  },
  age: { $type: 'number' },
  email: { $type: 'string' },
  location: { $type: 'string' },
  mobile: { $type: 'string' },
  interests: { $type: ['string'] },
  brands: { $type: ['string'] },
  medicalCondition: { $type: ['string'] }

}).compile('myDataType')