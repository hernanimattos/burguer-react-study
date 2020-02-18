
import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

const layout = (props) => {
  const { children } = props || {};

  return (
    <Aux>
      <SideDrawer/>
      <Toolbar/>
      <main className={classes.Content}>{children}</main>
    </Aux>
  );
};

export default layout;
