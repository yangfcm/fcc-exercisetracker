import mongoose from "mongoose";

const ExerciseSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
  },
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

export default Exercise;
