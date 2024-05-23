const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type MenuItem {
    name: String!
    description: String
    price: Float!
  }

  type Query {
    appetizers: [MenuItem]
    entrees: [MenuItem]
    sandwiches: [MenuItem]
    soupsAndSalads: [MenuItem]
    fajitas: [MenuItem]
    tacos: [MenuItem]
    enchiladas: [MenuItem]
    quiche: [MenuItem]
    greenSalads: [MenuItem]
  }
`;

module.exports = typeDefs;
