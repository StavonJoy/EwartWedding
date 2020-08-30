const router = require('express').Router()
const guestbookCtrl = require('../controllers/guestbook')

router.get('/', isLoggedIn, guestbookCtrl.index);
router.post('/', isLoggedIn, guestbookCtrl.create);
// router.get('/:id', isLoggedIn, guestbookCtrl.show);

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;