const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const replySchema = new Schema({
  postedBy: String,
  message: String,
})

const messageSchema = new Schema({
  postedBy: String,
  title: {
    type: String,
    required: true
  },
  replies: [replySchema],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Message', messageSchema)