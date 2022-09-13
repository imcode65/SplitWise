import axios from 'axios';
import { ACTION } from '../types';
import { AppDispatch } from 'store';
import { IAuthInfo } from 'store/reducers/authReducer';
import { API_SERVER_URL } from 'config';
import toast from 'react-hot-toast';

export interface IRegisterUser {
  email: string;
  name: string;
  password: string;
}

export const setAuthUser = (authInfo: IAuthInfo) => async (dispatch: AppDispatch) => {
  dispatch({
    type: ACTION.SIGNUP,
    payload: {
      authInfo: authInfo
    }
  });
};

export const registerUser =
  (userData: IRegisterUser, navigate: (path: string) => void) => async (dispatch: AppDispatch) => {
    axios
      .post(`${API_SERVER_URL}api/users/register`, userData)
      .then((res) => {
        toast.success('Successfully Registered');
        navigate('/login');
      })
      .catch((err) => {
        toast.success(err.response);
      });
  };

export const login =
  (data: { email: string; password: string }, navigate: (path: string) => void) =>
  async (dispatch: AppDispatch) => {
    axios
      .post(`${API_SERVER_URL}api/users/login`, data)
      .then((res) => {
        dispatch({
          type: ACTION.SET_AUTH_USER,
          payload: { authInfo: res.data.user, isLogged: true }
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

export const updateUser = (userData: any, config?: any) => async (dispatch: AppDispatch) => {
  axios
    .post(`${API_SERVER_URL}api/users/update`, userData, config)
    .then((res) => {
      toast.success('Successfully Updated');
      dispatch({
        type: ACTION.SET_AUTH_USER,
        payload: { authInfo: res.data, isLogged: true }
      });
    })
    .catch((err) => {
      toast.success(err.response);
    });
};

export const signOut = (navigate: (path: string) => void) => async (dispatch: AppDispatch) => {
  dispatch({
    type: ACTION.SET_AUTH_USER,
    payload: { authInfo: {}, isLogged: false }
  });
  navigate('/login');
};
