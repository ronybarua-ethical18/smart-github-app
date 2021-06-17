import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunk from 'redux-thunk';
import collectionReducer from '../collections/reducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['collections']
  }
const rootReducer:any = combineReducers({
        collections:collectionReducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistedStore = persistStore(store);
