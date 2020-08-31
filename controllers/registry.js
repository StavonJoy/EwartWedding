const Item = require('../models/item')

module.exports = {
  index,
  // create
}

// function create(req, res){
//   Item.create{req.body}
// }

function index(req, res){
  Item.find({})
  .then((items)=> {
    res.render('registry/index', {title: 'Registry', user: req.user, items} )
  })
}