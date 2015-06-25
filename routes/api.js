var express = require('express');
var router = express.Router();

/* GET rides listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
