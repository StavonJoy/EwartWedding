const router = require('express').Router()
const guestbookCtrl = require('../controllers/guestbook')

router.get('/', isLoggedIn, guestbookCtrl.index)

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;