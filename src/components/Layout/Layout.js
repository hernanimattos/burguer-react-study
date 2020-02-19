
import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{

  manageSideDrawer = () => {
    this.setState({showSideDrawer: false})
  }


  render(props) {
    const { children } = props || {};
    return (
      <Aux>
        <Toolbar/>
        <SideDrawer closed={this.manageSideDrawer}/>
        <main className={classes.Content}>{children}</main>
      </Aux>
    );
  }
}

export default Layout;
