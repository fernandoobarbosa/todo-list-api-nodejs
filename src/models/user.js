import mongoose from "../config/database";
import uniqueValidator from "mongoose-unique-validator";
import TaskSchema from "./task";

const UserSchema = mongoose.Schema({
  login: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  tasks: [TaskSchema],
});

const User = mongoose.model("User", UserSchema);
UserSchema.plugin(uniqueValidator);
export default User;
