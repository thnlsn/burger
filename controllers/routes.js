console.log(`routes`);

//reference to express and router
const express = require('express');
const router = express.Router();
//reference to model in burger.js
const burger = require('../models/burger.js');

//base route at / that sends a response of index in VIEWS folder
router.get('/', (req, res) => {
    burger.all((burger_data) => {
        console.log(burger_data);
        res.render('index', {burger_data});
    });
})

router.put('/burgers/update', (req, res) => {
    burger.update(req.body.burger_id, (result) => {
        console.log(result);
        res.redirect('/');
    })
})

//this allows the routes to be seen and used by server.js
module.exports = router;