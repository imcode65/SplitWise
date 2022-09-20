import axios from 'axios';
import { ACTION } from '../types';
import { AppDispatch } from 'store';
import { API_SERVER_URL } from 'config';

export const getBalance =
  (data: { id: string; currency: string }) => async (dispatch: AppDispatch) => {
    axios
      .post(`${API_SERVER_URL}api/wallet/getbalance`, data)
      .then((res) => {
        dispatch({
          type: ACTION.SET_CURRENCY,
          payload: { walletInfo: res.data }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
