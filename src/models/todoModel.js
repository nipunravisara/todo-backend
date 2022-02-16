import mongoose from 'mongoose';

export const statusType = {
  todo: 'Todo',
  inPogress: 'In-pogress',
  done: 'Done',
};

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    status: {
      type: String,
      enum: Object.values(statusType),
      default: statusType.todo,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
