import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage
import thunk from 'redux-thunk';

import auth from 'store/reducers/authReducer';
import friend from 'store/reducers/friendReducer';
import wallet from 'store/reducers/walletReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'friend', 'wallet'] // elements that will be persisted
  // blacklist: ['auth', 'friend'] // elements that will not be persisted
};

const rootReducer = combineReducers({
  auth,
  friend,
  wallet
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(persistedReducer, enhancer);
const persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
