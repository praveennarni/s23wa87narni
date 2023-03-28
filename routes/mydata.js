var express = require('express');
var router = express.Router();

/* Interesting fact about me */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Praveen Babu Narni' });
});

module.exports = router;
