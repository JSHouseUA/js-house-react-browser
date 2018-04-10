import React from 'react';
import { Switch, Route } from 'react-router';

import routes from './routes';

const App = () => (
  <Switch>
    { routes.map((item, i) => (
      <Route key={item.key || i} {...item} />
    ))}
  </Switch>
);

export default App;
