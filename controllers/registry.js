const Item = require('../models/item')

module.exports = {
  index,
}

function index(req, res){
  Item.findById(req.params.id)
  .then((items)=> {
    res.render('registry/index', {title: 'Registry', user: req.user} )
  })
}