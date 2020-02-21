var mongoose = require('mongoose');

const HistorySchema = new mongoose.Schema({
  ip: {type: String, default: null},
  country: {type: String, default: null},
  state: { type: String, default: null },
  city: { type: String, default: null },
  name: { type: String, default: null },
  visited_on: {type: Date, default: Date.now()}
});

module.exports = mongoose.model('History', HistorySchema);
