import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { createStore } from 'redux';
import reducer from './redux/reducers';
import { Provider } from 'react-redux';
import history from './history';

import './styles/reset.scss';
import './styles/common.scss';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Router history={history}>
    <Provider store={store}>
      {/*<App />*/}
    </Provider>
  </Router>,
  document.getElementById('root')
);