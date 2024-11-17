import mongoose from "mongoose";
import { SubTodo } from "./sub_todo.models";

const todoSchema = new mongoose(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    SubTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ],
  },
  { timestams: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
