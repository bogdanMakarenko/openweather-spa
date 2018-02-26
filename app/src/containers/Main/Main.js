import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NoMatch } from 'Components';
import { Home } from 'Containers';

const Main = () => {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        {/*<Route path='/:city' component={City} />*/}
        <Route component={NoMatch} />
      </Switch>
    )
};
export default Main;