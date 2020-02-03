import React from 'react';
import classes from './BurgerIngredient.module.css';


const BurguerIngredient = (props) => {
  const ingredientsManage = () => {
    const ingredientsChoice = {
      'bread-botton': <div className={classes.BredBottom} />,
      'bread-top': (
        <div className={classes.BreadTop}>
          <div className={classes.Seed1} />
          <div className={classes.Seed2} />
        </div>
      ),
    };

    return ingredientsChoice[props.type];
  };


  const ingredients = ingredientsManage();
};

export default BurguerIngredient;
