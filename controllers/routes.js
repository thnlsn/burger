console.log(`routes`);

//reference to express and router
const express = require('express');
const router = express.Router();
//reference to model in burger.js
const burger = require('../models/burger.js');

//base route at / that sends a response of index in VIEWS folder
router.get('/', (req, res) => {
    burger.all((burgerData) => {
        console.log(burgerData);
        res.render('index', {burgerData});
    });
})

//this allows the routes to be seen and used by server.js
module.exports = router;