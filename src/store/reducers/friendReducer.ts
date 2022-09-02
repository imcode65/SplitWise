import { USERACTION } from '../types';

export interface IFriend {
  id?: string;
  name?: string;
  email?: string;
  walletaddress?: string;
  phonenumber?: string;
  avatar?: string;
  timezone?: string;
  language?: string;
}

export interface IAuthState {
  friends?: IFriend[];
}

export interface IUserAction {
  type: USERACTION;
  payload?: any;
}

const initialAuthState: IAuthState = {
  friends: undefined
};

const friendReducer = (state = initialAuthState, action?: IUserAction) => {
  switch (action?.type) {
    case USERACTION.SET_FRIENDS:
      return {
        ...state,
        friends: action.payload.friendsInfo
      };
    default:
      return state;
  }
};

export default friendReducer;
