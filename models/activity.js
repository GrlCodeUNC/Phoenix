const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  title: { type: String, required: true },
  photo: { type: String, required: true },
  plans: String,
  user: { type: String, required: true },
  completeDate: { type: Date, default: Date.now },
  createDate: { type: Date, default: Date.now }
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;
