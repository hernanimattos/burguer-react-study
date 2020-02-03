
import React from 'react';
import Aux from '../../hoc/Aux';

const layout = (props) => {
  const { children } = props || {};

  return (
    <Aux>
      <div>Tollbar, Sidbars, Backdrop</div>
      <main>{children}</main>
    </Aux>
  );
};

export default layout;
