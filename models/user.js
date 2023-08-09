import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    versionKey: false,
    toJSON: { virtuals: true },
  }
);

UserSchema.virtual("log", {
  ref: "Exercise",
  localField: "_id",
  foreignField: "user",
});

const User = mongoose.model("User", UserSchema);

export default User;
