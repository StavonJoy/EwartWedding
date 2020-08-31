const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  googleId: String,
  host: {
    type: Boolean,
    default: false
  },
  rsvp: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);