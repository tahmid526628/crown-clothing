import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default combineReducers({
    user: userReducer
}) // it'll return a giant object bounded by redux functionality