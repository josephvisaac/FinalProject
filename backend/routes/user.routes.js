const express = require('express');
const router = express.Router();
const Theologians = require('../models/TheologianModel');
const User = require('../models/User');

router.post('/disptheo', (req, res, next) => {
    // console.log('-=-=-=-', req.body);
    let a = req.user.theologiansPicked.filter(theo => theo._id === req.body.object._id)[0];
    console.log(a, 'The user favorite list: ', req.user.theologiansPicked)
    let newList = a ?
        req.user.theologiansPicked.filter(theo => theo._id !== req.body.object._id)
        :
        [...req.user.theologiansPicked, req.body.object]

    console.log('The object clickeddsadsadsa: ', newList)

    User.findByIdAndUpdate(req.user._id, { theologiansPicked: newList }, { new: true })
        .then(user => {
            res.status(200).json(user);
        })
});
module.exports = router;