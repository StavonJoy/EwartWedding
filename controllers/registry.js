const Item = require('../models/item')

module.exports = {
  index,
  create
}

function create(req, res){
  req.body.item = req.params.id
  Item.create(req.body)
  .then(ticket => {
    res.redirect(`/registry/${req.params.id}`, {user: req.user, title: 'Registry'} )
  })
}

function index(req, res){
  Item.find({})
  .then((items)=> {
    res.render('registry/index', {title: 'Registry', user: req.user, items} )
  })
}