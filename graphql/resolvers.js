import { ApolloError } from 'apollo-server-express';
import molecules from '../data/molecules';

const resolvers = {
  Query: {
    molecule: (root, args) => {
      let molecule = molecules[args.id];
      if (molecule === undefined)
        throw new ApolloError('Can\'t find molecule', 'BAD_REQUEST');
      return ({
        ...molecule,
        id: args.id,
        last: Object.keys(molecules).length == (parseInt(args.id) + 1)
      });
    }
  }
};

export default resolvers;
