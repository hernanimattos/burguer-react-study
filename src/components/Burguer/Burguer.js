import React from 'react';
import classes from './Burguer.module.css';
import BurguerIngredient from './BurguerIngredient/BurguerIngredient';

// eslint-disable-no-unused-vars
const burguer = (props) => {
  const { ingredients } = props || {};

  const ingredientsChoiced = Object.keys(ingredients).map((itemKey) => [
    ...Array(ingredients[itemKey]),
  ]);

  console.log(ingredientsChoiced);

  return (
    <div className={classes.Burguer}>
      <BurguerIngredient type="bread-top" />
      <BurguerIngredient type="cheese" />
      <BurguerIngredient type="meat" />
      <BurguerIngredient type="bread-bottom" />
    </div>
  );
};

export default burguer;
