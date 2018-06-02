'use strict'

const Archetype = require('archetype-js');
// const myDataType = require('./myData');
const { ObjectId } = require('mongodb');
const express = require('express');

module.exports = db => {
  const router = express.Router()

  const wrapAsync = handler => (req, res) => handler(req)
    .then(result => res.json(result))
    .catch(error => res.status(500).json({ error: error.message }))

  router.get('/', wrapAsync(async function(req) {
    return db.collection('myData').find().sort({ createdAt: -1 }).toArray()
  }))

  router.get('/viewdetail/:id', wrapAsync(async function(req) {
    return db.collection('myData').find({_id: Archetype.to(req.params.id, ObjectId)}).toArray()
  }))

  router.post('/', wrapAsync(async function(req) {
    const res = await db.collection('myData').insertOne(req.body);

    return { res }
  }))

  router.patch('/update/:id', wrapAsync(async function(req) {
    console.log('id: ', req.params.id);
    console.log('req.body: ', req.body);
    const result = await db.collection('myData').findOneAndUpdate({
      _id: Archetype.to(req.params.id, ObjectId)
    }, {$set: req.body}, {returnOriginal: false})
    console.log('result: ',result);
    return { result }
  }))

  router.delete('/:id', wrapAsync(async function(req) {
    const { result } = await db.collection('myData').deleteOne({
      _id: Archetype.to(req.params.id, ObjectId)
    })
    return { result }
  }))

  return router
}