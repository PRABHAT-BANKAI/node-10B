const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});
const todosModel = mongoose.model("Todo", TodoSchema);
module.exports = todosModel;