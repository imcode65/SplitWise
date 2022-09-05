import { ACTION } from '../types';

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

export interface IFriendState {
  friends?: IFriend[];
}

export interface IUserAction {
  type: ACTION;
  payload?: any;
}

const initialAuthState: IFriendState = {
  friends: undefined
};

const friendReducer = (state = initialAuthState, action?: IUserAction) => {
  switch (action?.type) {
    case ACTION.SET_FRIENDS:
      return {
        ...state,
        friends: action.payload.friendsInfo
      };
    default:
      return state;
  }
};

export default friendReducer;
