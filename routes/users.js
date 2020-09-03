var router = require('express').Router();
var usersCtrl = require('../controllers/users');

// GET /users
router.get('/', usersCtrl.index);
router.get('/about', isLoggedIn, usersCtrl.aboutUs);
router.get('/info', isLoggedIn, usersCtrl.aboutWedding);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
