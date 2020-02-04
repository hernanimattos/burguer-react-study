import React from 'react';
import ProTypes from 'prop-types';
import classes from './BurgerIngredient.module.css';


const BurguerIngredient = (props) => {
  const ingredientsManage = () => {
    const ingredientsChoice = {
      'bread-top': (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds2} />
        </div>
      ),
      meat: <div className={classes.Meat} />,
      cheese: <div className={classes.Cheese} />,
      bacon: <div className={classes.Bacon} />,
      salad: <div className={classes.Salad} />,
      'bread-bottom': <div className={classes.BreadBottom} />,
    };

    return ingredientsChoice[props.type] || null;
  };


  // eslint-disable-next-line no-unused-vars
  // const ingredients = ingredientsManage();
  return ingredientsManage();
};

BurguerIngredient.protoTypes = {
  type: ProTypes.string.isRequired,
};

export default BurguerIngredient;
