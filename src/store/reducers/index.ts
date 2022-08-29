import { combineReducers } from 'redux';

import auth from 'store/reducers/authReducer';

const createReducer = () =>
  combineReducers({
    auth
  });

export default createReducer;
