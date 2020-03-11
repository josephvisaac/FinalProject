const express = require('express');
const router = express.Router();
const Theologians = require('../models/TheologianModel')

router.get('/theologians', (req, res, next) => {
    Theologians.find().then(theologians => {
        console.log(theologians)
        res.json(theologians);
    });
});

module.exports = router
// router.post('/theologians', (req, res, next) => {


//     /**
//      * req.body:
//      * {
//      *  name: "St. Peter"
//      * }
//      */
//     Theologians.create(req.body)
// });