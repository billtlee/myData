'use strict'

const Archetype = require('archetype-js')

module.exports = new Archetype({
  contractAddress: { 
    $type: 'string',
    $required: true 
  },
  interests: { $type: ['string'] },
  brands: { $type: ['string'] },
  medicalCondition: { $type: ['string'] }

}).compile('publicDataType')