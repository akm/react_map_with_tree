import Redux, { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';

import { loadState, saveState } from './localStorage'

import RootReducer from './reducers';

const configureStore = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const persistedState = loadState() || {
    scripts: [
      {id: 1, startTime: 1.23, endTime: 2.30, text: "aaaaaaaaaaa"},
      {id: 2, startTime: 2.91, endTime: 3.52, text: "bbbbbbbbbbb"}
    ]
  };
  const store = createStore(
    RootReducer,
    persistedState,
    applyMiddleware(...middlewares)
  );

  store.subscribe(throttle(() => {
    saveState({
      scripts: store.getState().scripts
    });
  }, 1000));

  return store;
}

export default configureStore
