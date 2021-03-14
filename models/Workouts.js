const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: String,
    unique: true
  },
  exercise: [
    {
      type: Schema.Types.ObjectId,
      ref: "exercise"
    }
  ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
