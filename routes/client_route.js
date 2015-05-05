var client = require('../model/client');
var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
    client.findAll().then(function(clients){
        res.json(clients);
    });
});

module.exports = router;