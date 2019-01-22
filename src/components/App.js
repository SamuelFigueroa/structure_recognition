import { ApolloProvider } from 'react-apollo';
import React, {Component, Fragment} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import client from '../client';
import Start from './Start';
import Molecule from './Molecule';
import GetMolecule from './queries/GetMolecule';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <ApolloProvider client={client}>
        <Router>
          <Fragment>
            <CssBaseline />
              <Route exact path="/" component={Start} />
              <Route exact path="/molecules/:id" render={({ match }) => (
                <GetMolecule id={match.params.id}>
                  { molecule => {
                    return <Molecule molecule={molecule} />;
                  }}
                </GetMolecule>
              )}/>
          </Fragment>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
