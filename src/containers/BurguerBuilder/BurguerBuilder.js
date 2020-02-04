/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burguer from '../../components/Burguer/Burguer';

class BuilderBurguer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 1,
        bacon: 3,
        chees: 2,
        meat: 1,
      },
    };
    // eslint-disable-next-line no-unused-vars
    const { ingredients } = this.state || {};
  }

  render() {
    return (
      <Aux>
        <Burguer ingredients={ingredients} />
        <div>Builde burguer</div>
      </Aux>
    );
  }
}

export default BuilderBurguer;
