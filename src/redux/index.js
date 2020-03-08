import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer'
import mySaga from './saga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
);

const store = createStore(reducer,enhancer);
sagaMiddleware.run(mySaga)

export default store;