import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems  from '../../Navigation/NavigationItems/NavigationsItems';
import classes from './SideDrawer.module.css'


const SideDrawer = () => {


  return (
    <div className={classes.SideDrawer}>
      <div className={classes.Logo}>
        <Logo/>
      </div>
      <nav>
        <NavigationItems/>
      </nav>
    </div>
  )
};

export default SideDrawer;
