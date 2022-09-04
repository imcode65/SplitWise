import axios from 'axios';
import { AppDispatch } from 'store';
import { API_SERVER_URL } from 'config';
import { USERACTION } from '../types';
import toast from 'react-hot-toast';

export const sendInvite =
  (data: { email1: string; email2: string; msg?: string }) => async (dispatch: AppDispatch) => {
    console.log(data);
    axios
      .post(`${API_SERVER_URL}api/friends/register`, data)
      .then((res) => {
        if (res.data.status === 'fail') {
          toast.error(res.data.msg);
        } else {
          toast.success('Invite sent');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const getFriendsByID = (data: { id: string }) => async (dispatch: AppDispatch) => {
  console.log(data);
  axios
    .post(`${API_SERVER_URL}api/friends/getfriendsbyid`, data)
    .then((res) => {
      if (res.data.status === 'fail') {
        toast.error(res.data.msg);
      } else {
        console.log(res.data);
        dispatch({
          type: USERACTION.SET_FRIENDS,
          payload: { friendsInfo: res.data }
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const removeFriend =
  (data: { id1?: string; id2?: string }) => async (dispatch: AppDispatch) => {
    axios
      .post(`${API_SERVER_URL}api/friends/removefriend`, data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
