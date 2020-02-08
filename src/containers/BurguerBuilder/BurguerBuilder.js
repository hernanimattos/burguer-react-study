import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burguer from '../../components/Burguer/Burguer';
import BuilderControls from '../../components/Burguer/BuildeControls/BuildControls'

export default class BuilderBurguer extends Component {
    state = {
        ingredients: {
          salad: 0,
          bacon: 0,
          cheese: 0,
          meat: 0,
        },
    };

  addIndredient = (type) => {
    const newState = this.state;
    let ingredientUpdate = newState.ingredients;
    ingredientUpdate[type]++;

    this.setState({
      ingredients: {
        ...newState,
        ...ingredientUpdate
      }
    })
  };

  removeIngedient = (type) => {

    const newState = this.state;
    let ingredientUpdate = newState.ingredients;
    ingredientUpdate[type]--;

    this.setState({
      ingredients: {
        ...newState,
        ...ingredientUpdate
      }
    })

  }

  render() {
    return (
      <Aux>
        <Burguer ingredients={this.state.ingredients} />
        <BuilderControls addIndredient={this.addIndredient} removeIngredient={this.removeIngedient}/>
      </Aux>
    );
  }
}
