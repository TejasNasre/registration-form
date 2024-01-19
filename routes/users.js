const mongoose = require("mongoose");

const mongodbUri = "mongodb+srv://tejasnasre:rniyMtQsRTIv8iah@form.qm0t58e.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(process.env.MONGODB_URI || mongodbUri);

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    lowercase: true,
  },
  lastname: {
    type: String,
    lowercase: true,
  },
  email: {
    type: String,
    lowercase: true,
  },
  branch: {
    type: String,
    lowercase: true,
  },
  description: {
    type: String,
    lowercase: true,
  },
},{timestamps: true});

const User = mongoose.model("User", userSchema);

module.exports = User;