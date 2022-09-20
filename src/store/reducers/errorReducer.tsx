import { ACTION } from '../types';

export interface IAuthInfo {
  name?: string;
  email?: string;
  password?: string;
}

export interface IErrorState {
  errors?: IAuthInfo;
}

export interface IUserAction {
  type: ACTION;
  payload?: any;
}

const initialAuthState: IErrorState = {
  errors: {}
};

const errorReducer = (state = initialAuthState, action?: IUserAction) => {
  switch (action?.type) {
    case ACTION.GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
};

export default errorReducer;
