import User from "../models/user.js";

export const addUser = async (req, res) => {
  const { username } = req.body;
  try {
    const user = new User({ username });
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};
