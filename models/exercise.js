import mongoose from "mongoose";

const ExerciseSchema = new mongoose.Schema(
  {
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
      requried: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    versionKey: false,
  }
);

const Exercise = mongoose.model("Exercise", ExerciseSchema);

export default Exercise;
