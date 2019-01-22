import gql from 'graphql-tag';

const GET_MOLECULE = gql`
     query getMolecule($id: String!) {
      molecule(id: $id) {
        id
        smiles
        molblock
        name
        last
      }
    }
`;

export default GET_MOLECULE;
