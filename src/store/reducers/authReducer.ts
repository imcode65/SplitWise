import { ACTION } from '../types';

export interface IAuthInfo {
  name?: string;
  email?: string;
  walletaddress?: string;
  phonenumber?: string;
  avatar?: string;
  timezone?: string;
  language?: string;
}

export interface IAuthState {
  isLogged: boolean;
  authInfo?: IAuthInfo;
}

export interface IUserAction {
  type: ACTION;
  payload?: any;
}

const initialAuthState: IAuthState = {
  isLogged: false,
  authInfo: undefined
};

const userReducer = (state = initialAuthState, action?: IUserAction) => {
  switch (action?.type) {
    case ACTION.SET_AUTH_USER:
      return {
        ...state,
        authInfo: action.payload.authInfo,
        isLogged: true
      };
    default:
      return state;
  }
};

export default userReducer;
