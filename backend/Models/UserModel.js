const { Schema, default: mongoose } = require("mongoose");

const UserSchema = new Schema({
  data: {
    type: Object,
    required: true,
  },
  photo: {
    type: String,
  },
  date: {
    type: Date,
    default: new Date
  }
});


module.exports = mongoose.model("user", UserSchema);