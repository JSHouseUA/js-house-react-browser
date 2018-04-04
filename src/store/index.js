import {createStore, compose} from 'redux';

import rootReduser from './reducers';

const store = createStore(
  rootReduser,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  )
);

export default store;
