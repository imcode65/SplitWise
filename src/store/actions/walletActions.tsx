import axios from 'axios';
import { ACTION } from '../types';
import { AppDispatch } from 'store';
import { API_SERVER_URL } from 'config';
import toast from 'react-hot-toast';

export const getBalance =
  (data: { id: string; currency: string }) => async (dispatch: AppDispatch) => {
    axios
      .post(`${API_SERVER_URL}api/wallet/getbalance`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
