import { USERACTION } from '../types';

export interface IUser {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export interface IUserAction {
  type: USERACTION;
  payload?: any;
}

export const initialUserInfo: IUser = {
  name: '',
  email: ''
};

const userReducer = (state: IUser = initialUserInfo, action?: IUserAction) => {
  switch (action?.type) {
    case USERACTION.SIGNIN:
      return {
        ...state
      };
    case USERACTION.SIGNUP:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default userReducer;
