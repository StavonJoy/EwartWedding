const Message = require('../models/message')

module.exports = {
  index
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