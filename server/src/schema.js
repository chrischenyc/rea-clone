const { gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Property {
    id: ID!
    price: Int!
    address: String!
  }

  type Query {
    propertiesBySuburb(suburb: String!): [Property]!
  }
`;

module.exports = typeDefs;
