const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  exercise: String,
  duration: Number, // in minutes
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Workout", workoutSchema);
