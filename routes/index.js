var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expressomachino arguh added some extra\n\thargh' });
});

module.exports = router;
