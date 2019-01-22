import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GET_MOLECULE from '../../graphql/getMolecule';

import { Query } from 'react-apollo';

import NotFound from '../NotFound';

class GetMolecule extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id } = this.props;
    return(
      <Query query={GET_MOLECULE} variables={{ id }} fetchPolicy="network-only">
        { ({ data, loading, error }) => {
          if (loading) return null;
          if (error) return <NotFound />;

          const { molecule } = data;
          return this.props.children(molecule);
        }}
      </Query>
    );
  }
}

GetMolecule.propTypes = {
  children: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired
};

export default GetMolecule;
