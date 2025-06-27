const mongoose = require("mongoose");

const chatMessageSchema = new mongoose.Schema({
  sessionId: { type: String, required: true },
  message: { type: String, required: true },
  response: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ChatMessage", chatMessageSchema);
