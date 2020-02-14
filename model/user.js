var mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true },
  password: { type: String, default: null },
  role: { type: Number, default: 0 }
});

module.exports = mongoose.model('User', UserSchema);
