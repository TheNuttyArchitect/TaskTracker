/*module.exports = function(app){
  app.get('*', function(req,res){
    res.sendfile('./public/views/index.html')
  });
}*/

//var client = require('../model/client');
var express = require('express');
var router = express.Router();

router.get('*', function(req,res){
    res.sendFile('./public/index.html');
    /*client.findAll().then(function(clients){
        res.json(clients);
    });*/
});

module.exports = router;
