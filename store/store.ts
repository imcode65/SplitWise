import { createStore, applyMiddleware, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage
import thunk from 'redux-thunk'
import auth from './reducers/auth'
import events from './reducers/events'
import data from './reducers/data'

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['auth', 'data'], // elements that will be persisted
    blacklist: ['events', 'auth', 'data'] // elements that will not be persisted
}

const rootReducer = combineReducers({
    auth,
    events,
    data,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store)

export { store, persistor }

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
