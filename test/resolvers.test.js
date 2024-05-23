const { gql } = require('apollo-server-express');
const { createTestClient } = require('apollo-server-testing');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('../schema');
const resolvers = require('../resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

const { query } = createTestClient(server);

describe('Resolvers', () => {
  it('fetches appetizers', async () => {
    const GET_APPETIZERS = gql`
      query {
        appetizers {
          name
          description
          price
        }
      }
    `;
    const res = await query({ query: GET_APPETIZERS });
    expect(res.data.appetizers).toHaveLength(5);
  });

  it('fetches entrees', async () => {
    const GET_ENTREES = gql`
      query {
        entrees {
          name
          description
          price
        }
      }
    `;
    const res = await query({ query: GET_ENTREES });
    expect(res.data.entrees).toHaveLength(4);
  });
});
