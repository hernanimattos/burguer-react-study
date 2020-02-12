import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {
    label: 'Salad',
    type: 'salad'
  },
  {
    label: 'Bacon',
    type: 'bacon'
  },
  {
    label: 'Meat',
    type: 'meat'
  },
  {
    label: 'Cheese',
    type: 'cheese'
  }
];

const buildControls = (props) => {

  return (

    <div className={classes.BuildControls}>
      <h3>Total:<strong>{props.totalPrice.toFixed(2)}</strong></h3>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          add={() => props.addIndredient(ctrl.type)}
          remove={() => props.removeIngredient(ctrl.type)}
          buttonState={props.buttonState[ctrl.type]} />
      ))}
      <button className={classes.OrderButton} disabled={!props.purchase} onClick={props.ordered}> Order Now</button>
    </div>
  )
};

export default buildControls;
