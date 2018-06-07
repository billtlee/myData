'use strict'

const Archetype = require('archetype-js');
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

  router.get('/getbyid/:id', wrapAsync(async function(req) {
    return db.collection('myData').find({_id: req.params.id}).toArray()
  }))

  router.get('/findAddressByInterest/:interest', wrapAsync(async function(req) {
    return db.collection('myData').find({interests: req.params.interest}).toArray()
  }))

  router.get('/findAddressByBrands/:brands', wrapAsync(async function(req) {
    return db.collection('myData').find({brands: req.params.brands}).toArray()
  }))

  router.get('/findAddressByMedicalCondition/:medicalCondition', wrapAsync(async function(req) {
    return db.collection('myData').find({medicalCondition: req.params.medicalCondition}).toArray()
  }))

  router.post('/', wrapAsync(async function(req) {
    try{
      const res = await db.collection('myData').insertOne(req.body);
    } catch (err) {
      console.error(err.stack);
    } 

    return { res }
  }))

  router.patch('/update/:id', wrapAsync(async function(req) {
    console.log('id: ', req.params.id);
    console.log('req.body: ', req.body);
    const result = await db.collection('myData').findOneAndUpdate({
      _id: req.params.id
    }, {$set: req.body}, {returnOriginal: false})
    console.log('result: ',result);
    return { result }
  }))

  router.delete('/:id', wrapAsync(async function(req) {
    const { result } = await db.collection('myData').deleteOne({
      _id: req.params.id
    })
    return { result }
  }))

  return router
}