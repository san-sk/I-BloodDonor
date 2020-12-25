var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login');
  
});

router.post('/login', function(req, res, next) {
  console.log(req.body);
  res.render('index',{title:req.body.username});

});


module.exports = router;
