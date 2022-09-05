import axios from 'axios';
import { AppDispatch } from 'store';
import { API_SERVER_URL } from 'config';
import { ACTION } from '../types';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';

export const sendInvite =
  (
    data: { id?: string; email1: string; email2: string; msg?: string },
    navigate: (path: string) => void
  ) =>
  async (dispatch: AppDispatch) => {
    axios
      .post(`${API_SERVER_URL}api/friends/register`, data)
      .then((res) => {
        if (res.data.status === 'fail') {
          toast.error(res.data.msg);
        } else {
          toast.success('Invite sent');
          getFriendsByID({ id: data.id })(dispatch);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const getFriendsByID = (data: { id?: string }) => async (dispatch: AppDispatch) => {
  axios
    .post(`${API_SERVER_URL}api/friends/getfriendsbyid`, data)
    .then((res) => {
      if (res.data.status === 'fail') {
        toast.error(res.data.msg);
      } else {
        dispatch({
          type: ACTION.SET_FRIENDS,
          payload: { friendsInfo: res.data }
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const removeFriend =
  (data: { id1?: string; id2?: string }, navigate: (path: string) => void) =>
  async (dispatch: AppDispatch) => {
    axios
      .post(`${API_SERVER_URL}api/friends/removefriend`, data)
      .then((res) => {
        if (res.data.status === 'success') {
          getFriendsByID({ id: data.id1 })(dispatch);
          navigate('/dashboard');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
