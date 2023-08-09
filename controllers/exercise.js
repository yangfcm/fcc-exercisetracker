import Exercise from "../models/exercise.js";
import User from "../models/user.js";

export const addExercise = async (req, res) => {
  const { description, duration, date } = req.body;
  const { id: userId } = req.params;
  try {
    const user = await User.findById(userId);
    if (!user)
      return res.status(400).json({
        error: "User is unavailable.",
      });
    const exercise = new Exercise({
      description,
      duration,
      date: date ? new Date(date) : new Date(),
      user: userId,
    });
    await exercise.save();
    res.json({
      _id: userId,
      username: user.username,
      description: exercise.description,
      duration: exercise.duration,
      date: exercise.date.toDateString(),
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

export const getUserExerciseLog = async (req, res) => {
  const { id: userId } = req.params;
  const { from, to, limit } = req.query;

  // const exercises = await Exercise.find({
  //   userId,
  // })
  //   .populate("userId", "_id username")
  //   .exec();
  res.json();
};
