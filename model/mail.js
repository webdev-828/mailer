var mongoose = require('mongoose');

const MailSchema = new mongoose.Schema({
  owner_name: {type: String, default: null},
  sender_name: {type: String, default: null},
  email: { type: String, required: true },
  phone: { type: String, default: null },
  message: { type: String, default: null }
});

module.exports = mongoose.model('Mail', MailSchema);
