import { combineReducers } from 'redux';

import auth from 'store/reducers/authReducer';
import friend from 'store/reducers/friendReducer';

const createReducer = () =>
  combineReducers({
    auth,
    friend
  });

export default createReducer;
