var express = require('express');
var router = express.Router();
let value={
  Name: "Sridhar",
  College:"SIES",
  Locale:{
    Place:"Mumbai",
    Street:"Juhu"
  }
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
  name: "Sridhar",
value:value });
});

module.exports = router;
