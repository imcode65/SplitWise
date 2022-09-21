import axios from 'axios';
import { ACTION } from '../types';
import { AppDispatch } from 'store';
import { IAuthInfo } from 'store/reducers/authReducer';
import { API_SERVER_URL } from 'config';
import setAuthToken from 'utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import toast from 'react-hot-toast';

export interface IRegisterUser {
  email: string;
  name: string;
  password: string;
  currency: string;
  language: string;
  timezone: string;
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
      .then(() => {
        toast.success('Successfully Registered');
        navigate('/login');
      })
      .catch((err) => {
        dispatch({
          type: ACTION.GET_ERRORS,
          payload: err.response.data
        });
      });
  };

export const login =
  (data: { email: string; password: string }, navigate: (path: string) => void) =>
  async (dispatch: AppDispatch) => {
    axios
      .post(`${API_SERVER_URL}api/users/login`, data)
      .then((res) => {
        if (res.data.status === 'success') {
          const decoded = jwt_decode(res.data.token);
          setAuthToken(res.data.token);
          dispatch({
            type: ACTION.SET_AUTH_USER,
            payload: { authInfo: decoded, isLogged: true, token: res.data.token }
          });
          toast.success('Login Success');
          navigate('/dashboard');
        }
      })
      .catch((err) => {
        dispatch({
          type: ACTION.GET_ERRORS,
          payload: err.response.data
        });
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
  setAuthToken('');
  dispatch({
    type: ACTION.SET_AUTH_USER,
    payload: { authInfo: {}, isLogged: false, token: '' }
  });
  navigate('/login');
};
