"use strict";
const express = require('express');
const controller = require('./controllers');
const db = require('./db/index');

const Mathematic = new controller.math();
const postgre = new controller.postgre();

const router = express.Router();

router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/',(req,res) => res.send("Hello"));

router.get('/post',(req,res) => res.send(db(postgre.select())));
router.delete('/post',(req,res) =>res.send(db(postgre.delete())));
router.post('/post',(req,res) =>res.send(db(postgre.insert(req.body))));
router.put('/post',(req,res)=>res.send(db(postgre.update(req.body))));


router.post('/sum', (req,res)=>res.send(Mathematic.sum(req.body)));
router.post('/min', (req,res)=>res.send(Mathematic.min(req.body)));
router.post('/mul', (req,res)=>res.send(Mathematic.mul(req.body)));
router.post('/div', (req,res)=>res.send(Mathematic.div(req.body)));

module.exports = router;