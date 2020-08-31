var mongoose = require('mongoose');


var userSchema = new mongoose.Schema({
  name: String,
  email: String,
  googleId: String,
  rsvp: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);