
import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

const layout = (props) => {
  const { children } = props || {};

  return (
    <Aux>
      <Toolbar/>
      <main className={classes.Content}>{children}</main>
    </Aux>
  );
};

export default layout;
