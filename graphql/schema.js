import { gql } from 'apollo-server-express';

const typeDefs = gql`

  type Molecule {
    id: String!
    smiles: String!
    name: String!
    molblock: String!
    last: Boolean!
  }

  type Query {
    molecule(id: String!) : Molecule!
  }
`;

export default typeDefs;
