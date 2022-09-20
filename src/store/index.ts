import { compose, createStore, PreloadedState } from 'redux';
import reducer from './reducers';

// @ts-ignore
const composeEnhancers = typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({}) : compose;

const configureStore = (preloadedState: PreloadedState<any>) => createStore(
    reducer,
    preloadedState,
    composeEnhancers(),
);

const store = configureStore({});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
