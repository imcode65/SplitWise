import axios from 'axios';
import { AppDispatch } from 'store';
import { API_SERVER_URL } from 'config';
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
