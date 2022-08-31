import axios from 'axios';
import { AppDispatch } from 'store';
import { API_SERVER_URL } from 'config';

export const sendInvite = (data: { email: string }) => async (dispatch: AppDispatch) => {
  console.log(data);
  // axios
  //   .post(`${API_SERVER_URL}api/users/issignup`, data)
  //   .then((res) => {
  //     dispatch({
  //       type: USERACTION.SET_AUTH_USER,
  //       payload: { authInfo: res.data.user }
  //     });
  //     if (res.data.status === 'success') {
  //       toast.success('Login Success');
  //       navigate('/dashboard');
  //     }
  //   })
  //   .catch((err) => {
  //     if (err.response.data.msg === 'wallet not found') {
  //       // toast.error(err.response.data.msg);
  //       navigate('/signup');
  //     }
  //   });
};
