import { $CombinedState, applyMiddleware, compose, createStore, PreloadedState } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import rootSaga from './sagas';
import { MemberState } from '../ts';

// @ts-ignore
const composeEnhancers = typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({}) : compose;

const sagaMiddleware = createSagaMiddleware();

const configureStore = (preloadedState: PreloadedState<any>) => createStore(
    reducer,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware)),
);

const store = configureStore({});

export type AppDispatch = typeof store.dispatch;
export type RootState = { readonly [$CombinedState]?: undefined; } & { member: MemberState };

sagaMiddleware.run(rootSaga);

export default store;
