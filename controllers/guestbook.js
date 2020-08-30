const Message = require('../models/message')

module.exports = {
  index,
  create,
  show,
}

function show(req, res){
  Message.findById(req.params.id)
  .then((message)=>{
    res.render('guestbook/')
  })
}

function create(req, res){
  req.body.postedBy = req.user.name
  req.body.avatar = req.user.avatar
  Message.create(req.body)
  .then(()=>{
    res.redirect('/guestbook')
  })
}

function index(req, res){
  Message.find({})
  .then((messages)=>{
    res.render('guestbook/index', {
      title: 'Guestbook',
      user: req.user,
      messages: messages.reverse()
    })
  })
}