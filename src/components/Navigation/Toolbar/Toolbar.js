import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationsItems'

const Toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <div>menu</div>
      <div className={classes.Logo}>
        <Logo/>
      </div>
      <nav>
        <NavigationItems/>
      </nav>
    </header>
  )
};

export default Toolbar;
