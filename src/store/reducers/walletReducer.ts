import { ACTION } from '../types';

export interface IWallet {
  id?: string;
  currency?: string;
  amount?: number;
}

export interface IWalletState {
  wallet?: IWallet[];
}

export interface IWalletAction {
  type: ACTION;
  payload?: any;
}

const initialAuthState: IWalletState = {
  wallet: undefined
};

const walletReducer = (state = initialAuthState, action?: IWalletAction) => {
  switch (action?.type) {
    case ACTION.SET_FRIENDS:
      return {
        ...state,
        wallet: action.payload.walletInfo
      };
    default:
      return state;
  }
};

export default walletReducer;
