import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems  from '../../Navigation/NavigationItems/NavigationsItems';
import BackDrop from '../../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux'


import classes from './SideDrawer.module.css'


const SideDrawer = () => {


  return (
    <Aux>
      <BackDrop show/>
      <div className={classes.SideDrawer}>
      <div className={classes.Logo}>
        <Logo/>
      </div>
      <nav>
        <NavigationItems/>
      </nav>
    </div>
    </Aux>

  )
};

export default SideDrawer;
