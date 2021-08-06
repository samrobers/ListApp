const { gql } = require("graphql");

const TypeDefs = gql`
  type Note {
    title: String
    description: String
  }

  type Query {
    notes: [Note]
  }
`;
module.exports = TypeDefs;
