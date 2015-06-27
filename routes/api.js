var express = require('express');
var router = express.Router();

router.get('/profile', function(req, res) {
  data = {
    photo: 'placehold.it/240x240',
    name: 'Walther White',
    summary: 'I am the founder of an early stage startup in the chemical engineering sector',
    email: 'walt@whiteindustries.com',
    phone: '5555555555',
    linkedin: 'https://www.linkedin.com/profile/view?id=57254185',
    website: 'http://www.savewalterwhite.com/',
    resume: 'http://linode.baxterross.com/walter-white'
  };
  res.send(data);
});

router.post('/profile', function(req, res) {
  data = {
    success: true
  };
  res.send(data);
});

module.exports = router;
