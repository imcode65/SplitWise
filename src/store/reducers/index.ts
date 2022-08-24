import { combineReducers } from 'redux';

import user from 'store/reducers/userReducer';

const createReducer = () =>
  combineReducers({
    user
  });

export default createReducer;
