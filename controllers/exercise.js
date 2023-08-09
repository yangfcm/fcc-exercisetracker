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

  try {
    const limit =
      parseInt(req.query.limit) > 0 ? parseInt(req.query.limit) : undefined;
    const match = {};
    if (req.query.from) {
      match.date = {
        ...(match.date || {}),
        $gte: new Date(req.query.from),
      };
    }
    if (req.query.to) {
      match.date = {
        ...(match.date || {}),
        $lte: new Date(req.query.to),
      };
    }
    const user = await User.findById(userId).populate({
      path: "log",
      match,
      options: {
        limit,
        sort: {
          date: -1,
        },
        transform: (doc) => ({
          _id: doc._id,
          description: doc.description,
          duration: doc.duration,
          date: doc.date.toDateString(),
        }),
      },
    });
    if (!user) {
      return res.status(400).json({
        error: "User is unavailable.",
      });
    }
    res.json({
      _id: user._id,
      username: user.username,
      count: user.log.length,
      log: user.log,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
