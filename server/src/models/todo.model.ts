import mongoose, { Document, Schema } from 'mongoose';

export interface ITodo extends Document {
  name: string;
  description?: string;
  done?: boolean;
  updatedAt?: number;
  createdAt?: number;
}

const TodoSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a todo name.'],
    },
    description: {
      type: String,
      maxlength: [100, 'Description must be less than 100 characters.'],
    },
    done: {
      type: Boolean,
      default: false,
    },
    createdAt: Number,
    updatedAt: Number,
  },
  { timestamps: { currentTime: () => Math.floor(new Date().getTime() / 1000) } }
);

const TodoModel = mongoose.model<ITodo>('Todo', TodoSchema);

export default TodoModel;
