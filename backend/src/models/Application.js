const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  personalInfo: { type: Object, required: true },
  academicInfo: { type: Object, required: true },
  courseSelected: { type: String, required: true },
  intake: { type: String, required: true },
  documents: { type: Array, default: [] },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Application", applicationSchema);
