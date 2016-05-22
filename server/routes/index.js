var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('index', {title: "Let's Find A Job"});
})

module.exports = router;
