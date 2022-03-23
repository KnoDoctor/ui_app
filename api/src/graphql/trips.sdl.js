export const schema = gql`
  type Trip {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
  }

  type Query {
    trips: [Trip!]! @requireAuth
    trip(id: Int!): Trip @requireAuth
  }

  input CreateTripInput {
    title: String!
    body: String!
  }

  input UpdateTripInput {
    title: String
    body: String
  }

  type Mutation {
    createTrip(input: CreateTripInput!): Trip! @requireAuth
    updateTrip(id: Int!, input: UpdateTripInput!): Trip! @requireAuth
    deleteTrip(id: Int!): Trip! @requireAuth
  }
`
