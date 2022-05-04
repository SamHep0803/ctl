import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Event {
    id: Int
    name: String
    description: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    events: [Event]!
    event(id: Int!): Event
  }

  type Mutation {
    createEvent(name: String!, description: String!): Event!
    updateEvent(id: Int!, name: String, description: String): Event!
    deleteEvent(id: Int!): Event
  }
`;
