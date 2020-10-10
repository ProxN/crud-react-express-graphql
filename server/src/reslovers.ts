import TodoModel, { ITodo } from './models/todo.model';

interface ITodoBody {
  id?: string;
  name: string;
  description: string;
}

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    todos: async (): Promise<ITodo[]> => await TodoModel.find(),
    todo: async (_: any, { id }: { id: string }): Promise<ITodo | null> =>
      await TodoModel.findById(id),
  },
  Mutation: {
    addTodo: async (
      _: any,
      { name, description }: ITodoBody
    ): Promise<ITodo> => {
      const todo = await TodoModel.create({
        name,
        description,
      });
      return todo;
    },
    deleteTodo: async (_: any, { id }: { id: string }): Promise<boolean> => {
      await TodoModel.findByIdAndRemove(id);
      return true;
    },
    editTodo: async (
      _: any,
      { id, name, description }: ITodoBody
    ): Promise<ITodo | null> => {
      const updatedTodo = await TodoModel.findByIdAndUpdate(
        id,
        {
          name,
        },
        { new: true }
      );
      return updatedTodo;
    },
  },
};

export default resolvers;
