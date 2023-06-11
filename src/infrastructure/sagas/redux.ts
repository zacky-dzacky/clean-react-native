import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './pokemonSagas';
import reducers from '../reducer';

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    combineReducers(reducers),
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
