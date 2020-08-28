const User = require('../models/user');

module.exports = {
  index,
  aboutUs,
  aboutWedding,
};

function aboutWedding(req, res){
  User.find({})
  .then(users => {
    res.render('info', {user: req.user, users})
  })
}

function aboutUs(req, res){
  User.find({})
  .then(users => {
    res.render('about', {user: req.user, users})
  })
}

function index(req, res) {
  User.find({})
  .then(users => {
    res.render('home', { user: req.user, users })
  })
}