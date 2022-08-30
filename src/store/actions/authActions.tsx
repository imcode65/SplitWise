import axios from 'axios';
import { USERACTION } from '../types';
import { AppDispatch } from 'store';
import { IAuthInfo } from 'store/reducers/authReducer';
import { API_SERVER_URL } from 'config';
import toast from 'react-hot-toast';

export const setAuthUser = (authInfo: IAuthInfo) => async (dispatch: AppDispatch) => {
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
      .then((res) => {
        toast.success('Successfully Registered');
        navigate('/dashboard');
        dispatch({
          type: USERACTION.SET_AUTH_USER,
          payload: { authInfo: res.data }
        });
      })
      .catch((err) => {
        toast.success(err.response);
      });
  };

export const isSignUp =
  (data: { walletaddress: string }, navigate: (path: string) => void) =>
  async (dispatch: AppDispatch) => {
    axios
      .post(`${API_SERVER_URL}api/users/issignup`, data)
      .then((res) => {
        dispatch({
          type: USERACTION.SET_AUTH_USER,
          payload: { authInfo: res.data.user }
        });
        if (res.data.status === 'success') {
          toast.success('Login Success');
          navigate('/dashboard');
        }
      })
      .catch((err) => {
        if (err.response.data.msg === 'wallet not found') {
          // toast.error(err.response.data.msg);
          navigate('/signup');
        }
      });
  };
