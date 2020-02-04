import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burguer from '../../components/Burguer/Burguer';

export default class BuilderBurguer extends Component {
  constructor(props) {
    super(props)

    this.state = {
        ingredients: {
          salad: 1,
          bacon: 3,
          chees: 2,
          meat: 1,
        },
    };
  }

  render() {
    return (
      <Aux>
        <Burguer ingredients={this.state.ingredients} />
        <div>Builde burguer</div>
      </Aux>
    );
  }
}
