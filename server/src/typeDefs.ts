import { gql } from 'apollo-server-express';

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    todo(id: ID): Todo
    todos: [Todo]
  }
  type Todo {
    _id: ID!
    name: String!
    description: String
    updatedAt: Int
    createdAt: Int
  }
  type Mutation {
    addTodo(name: String!, description: String): Todo
    deleteTodo(id: ID!): Boolean
    editTodo(id: ID!, name: String): Todo
  }
`;

export default typeDefs;
