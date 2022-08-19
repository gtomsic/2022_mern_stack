const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Please add an a name"],
    },
    email: {
      type: String,
      require: [true, "Please add an a email"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "Please add an a password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
