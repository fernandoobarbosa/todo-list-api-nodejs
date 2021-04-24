import mongoose from "../config/database";

const TaskSchema = mongoose.Schema({
  name: { type: String },
  toDo: { type: Boolean },
  inProgress: { type: Boolean },
  done: { type: Boolean },
});

export default TaskSchema;
