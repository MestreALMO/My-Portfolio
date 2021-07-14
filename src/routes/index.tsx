import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Frontpage from '../pages/Frontpage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Frontpage} />
  </Switch>
);

export default Routes;
