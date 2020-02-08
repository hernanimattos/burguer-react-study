import React from 'react';
import classes from './Burguer.module.css';
import BurguerIngredient from './BurguerIngredient/BurguerIngredient';

const burguer = props => {
  const { ingredients } = props || {};

  const ingredientsChoiced = Object.keys(ingredients).map(itemKey => {
    return [...Array(ingredients[itemKey])].map((_, i) => {
      return <BurguerIngredient key={itemKey + i} type={itemKey} />;
    });
  });

  return (
    <div className={classes.Burguer}>
      <BurguerIngredient type="bread-top" />
      {ingredientsChoiced}
      <BurguerIngredient type="bread-bottom" />
    </div>
  );
};

export default burguer;
