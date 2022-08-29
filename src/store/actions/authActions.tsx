import axios from 'axios';
import { USERACTION } from '../types';
import { AppDispatch } from 'store';
import { IUser } from 'store/reducers/userReducer';
import { API_SERVER_URL } from 'config';

export const setAuthUser = (authInfo: IUser) => async (dispatch: AppDispatch) => {
  dispatch({
    type: USERACTION.SIGNUP,
    payload: {
      authInfo: authInfo
    }
  });
};

export const registerUser =
  (userData: any, navigate: (path: string) => void) => async (dispatch: AppDispatch) => {
    axios
      .post(`${API_SERVER_URL}api/users/register`, userData)
      .then((res) => navigate('/login'))
      .catch((err) =>
        dispatch({
          type: USERACTION.GET_ERRORS,
          payload: err.response.data
        })
      );
  };

export const isSignUp =
  (data: { walletaddress: string }, navigate: (path: string) => void) =>
  async (dispatch: AppDispatch) => {
    axios
      .post(`${API_SERVER_URL}api/users/issignup`, data)
      .then((res) => {
        if (res.data.status === 'success') {
          navigate('/dashboard');
        }
      })
      .catch((err) => console.log('error'));
    console.log(data);
  };
