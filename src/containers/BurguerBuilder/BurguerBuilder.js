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
      price: {
        salad: 0.5,
          bacon: 1,
          cheese: 0.5,
          meat: 2,
      },
      totalPrice: 0,
      purchase: false
    };
  buttonState = {};

  buttonPurchaseState = (ingredients) => {
    const haveIngredient = Object.keys(ingredients).map((key) => {
      return ingredients[key];
    }).reduce((a, b) => {

      return a + b;

    }, 0)
    this.setState({purchase: haveIngredient > 0})

  }

  buttonManageState = () => {
    const newStateIngredients = { ...this.state.ingredients };

    for (let key in newStateIngredients){
      newStateIngredients[key]  = newStateIngredients[key]  <= 0
    }

    this.buttonState = newStateIngredients;
  }

  priceUpdate = (type, action) => {
    const totalPrice = this.state.totalPrice;
    const newValue = action ? (totalPrice + this.state.price[type]) : (totalPrice - this.state.price[type]);
    this.setState({ totalPrice: newValue });
  }

  addIndredient = (type) => {
    const { ingredients, ...restState } = this.state;
    let ingredientUpdate = ingredients[type]++;

    this.setState({
      ingredients: {
        ...ingredientUpdate,
        ...ingredients
      },
      ...restState
    });
    this.priceUpdate(type, true);
    this.buttonPurchaseState(this.state.ingredients);

  };

  removeIngredient = (type) => {
    if (this.state.ingredients[type] <= 0) {
      this.priceUpdate(type, false);
      return;
    }

    const { ingredients, ...restState } = this.state;
    let ingredientUpdate = ingredients[type]--;

    this.setState({
      ingredients: {
        ...ingredientUpdate,
        ...ingredients
      },
      ...restState
    });
    this.priceUpdate(type, false);
    this.buttonPurchaseState(this.state.ingredients);
  }

  render() {
    this.buttonManageState();
    return (
      <Aux>
        <Burguer
          ingredients={this.state.ingredients} />
        <BuilderControls
          addIndredient={this.addIndredient}
          removeIngredient={this.removeIngredient}
          buttonState={this.buttonState}
          totalPrice={this.state.totalPrice}
          purchase={this.state.purchase}/>
      </Aux>
    );
  }
}
