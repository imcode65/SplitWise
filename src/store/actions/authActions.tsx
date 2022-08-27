import axios from 'axios';
import { USERACTION } from '../types';
import { AppDispatch } from 'store';
import { IUser } from 'store/reducers/userReducer';

export const setAuthUser = (authInfo: IUser) => async (dispatch: AppDispatch) => {
  dispatch({
    type: USERACTION.SIGNUP,
    payload: {
      authInfo: authInfo
    }
  });
};

export const registerUser = (userData: any, history: any) => async (dispatch: AppDispatch) => {
  console.log(userData);
  axios
    .post('/api/users/register', userData)
    .then((res) => history.push('/login'))
    .catch((err) =>
      dispatch({
        type: USERACTION.GET_ERRORS,
        payload: err.response.data
      })
    );
};
