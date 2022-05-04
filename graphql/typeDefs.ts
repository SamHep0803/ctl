import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Event {
    id: Int
    name: String
    description: String
    createdAt: String
    updatedAt: String
  }

  type User {
    id: String
    cid: String
    full_name: String
    ratingId: Int
    rating: String
    region: String
    email: String
  }

  type Query {
    events: [Event]!
    event(id: Int!): Event
    me: User
  }

  type Mutation {
    createEvent(name: String!, description: String!): Event!
    updateEvent(id: Int!, name: String, description: String): Event!
    deleteEvent(id: Int!): Event
  }
`;
