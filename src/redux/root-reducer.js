import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage'; // we can also import sessionStorage

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

// now have to configure storage
const persistConfig = {
    key: 'root',
    storage, // this storage mean local storage
    whitelist: ['cart'] // whitelist is the list of strings of which we want to store in local storage or sessionStorage
}

export const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
}) // it'll return a giant object bounded by redux functionality

export default persistReducer(persistConfig, rootReducer); 
// this will combined the rootReducer and the configuration and return to the top