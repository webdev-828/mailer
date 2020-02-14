var express = require('express');
var router = express.Router();
var User = require('./../model/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, function(err, users) {
    if (err)
      return res.status(500).json({ message: 'Get User Error', error: err });

    // object of all the users
    res.status(200).json({ users });
  });
});

router.post('/add', function(req, res, next) {
  console.log(req.body.name, req.body.email);
  var newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  newUser.save(function(err) {
    if (err) {
      return res.status(500).json({ message: 'Add User Error', error: err });
    }

    res.status(200).json({ message: 'User saved successfully!' });
  });
});

module.exports = router;
