import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../../UI/Button/Button'

const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map(key => {
    return (
      <li key={key}>
        <span style={{ textTransform: 'capitalize' }}>{key}:</span>{' '}
        {props.ingredients[key]}
      </li>
    );
  });
  return (
    <Aux>
      <h1>Your order</h1>
      <ul>{ingredientsSummary}</ul>
      <h3>The price of sandwich: {props.price.toFixed(2)}</h3>
      <Button btnType="Danger" clicked={props.cancel}>Cancel</Button>
      <Button btnType="Success" clicked={props.continue}>Cancel</Button>
    </Aux>
  );
};

export default OrderSummary;
