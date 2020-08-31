const router = require('express').Router()
const registryCtrl = require('../controllers/registry')

router.get('/', isLoggedIn, registryCtrl.index);
// router.post('/', isLoggedIn, registryCtrl.create);


function isLoggedIn(req, res, next){
  if(req.isAuthenticated()) return next();
  res.redirect('/auth/google');
}

module.exports = router;