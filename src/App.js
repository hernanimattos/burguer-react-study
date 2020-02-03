import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurguerBuilder from './containers/BurguerBuilder/BurguerBuilder';
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Layout>
        <div>
          <BurguerBuilder />
        </div>
      </Layout>
    );
  }
}

export default App;
