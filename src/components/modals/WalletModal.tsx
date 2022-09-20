import { useState, Fragment, useEffect } from 'react';
import axios from 'axios';
import { Dialog, Transition } from '@headlessui/react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { useAppSelector } from 'store/hooks';
import { CURRENCY_TYPES } from 'datas/currency';
import { getBalance } from 'store/actions';
import { API_SERVER_URL } from 'config';

export interface IModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const WalletModal: React.FC<IModal> = (props) => {
  const dispatch = useDispatch();
  const { auth, wallet } = useAppSelector((state) => state);
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const [currency, setCurrency] = useState<string>('USDT');
  const [page, setPage] = useState<string>('deposit');
  const [withdrawAddress, setWithdrawAddress] = useState<string>('');
  const [withdrawAmount, setWithdrawAmount] = useState<number>(1);

  useEffect(() => {
    setModalStatus(props.isOpen);
    if (auth.authInfo) {
      const data = {
        id: auth.authInfo._id,
        currency: currency
      };
      getBalance(data)(dispatch);
    }
  }, [auth.authInfo, currency, dispatch, props.isOpen]);

  useEffect(() => {
    if (auth.authInfo) {
      const data = {
        id: auth.authInfo._id,
        currency: currency
      };
      getBalance(data)(dispatch);
    }
  }, [auth.authInfo, currency, dispatch]);

  const onCopy = () => {
    navigator.clipboard.writeText(auth.authInfo.walletaddress);
    toast.success('copied');
  };

  const onChangeCurrency = (e: any) => {
    setCurrency(e.target.value);
    const data = {
      id: auth.authInfo._id,
      currency: e.target.value
    };
    getBalance(data)(dispatch);
  };

  const onWithdraw = () => {
    // const valid = WAValidator.validate(withdrawAddress, 'BTC');
    if (withdrawAddress === '') {
      toast.error('Please input valid Withdraw address');
      return;
    }
    if (withdrawAmount < 0) {
      toast.error('Withdrawal amount should be greater than the fee');
      return;
    }
    if (withdrawAmount > wallet.wallet.amount) {
      toast.error('Withdrawal amount should be less than your balance');
      return;
    }
    const data = {
      user_id: auth.authInfo._id,
      withdrawAddress: withdrawAddress,
      withdrawAmount: withdrawAmount,
      currency: currency
    };
    axios
      .post(`${API_SERVER_URL}api/wallet/withdraw`, data)
      .then(() => {
        toast.success('Withdraw Success');
        const dt = {
          id: auth.authInfo._id,
          currency: currency
        };
        getBalance(dt)(dispatch);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Transition appear show={modalStatus} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={props.onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all border-1 border-gray-600">
                  <div className="bg-teal-color">
                    <div className="w-full flex justify-between items-center px-4 py-2 rounded-t dark:border-gray-600 bg-teal-color border-gray-600">
                      <h3 className="text-lg font-bold text-white">Wallet</h3>
                      <button
                        type="button"
                        className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={props.onClose}
                      >
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Close modal</span>
                      </button>
                    </div>
                    <div className="flex items-baseline space-x-2 px-4 pb-2">
                      <div
                        onClick={() => setPage('deposit')}
                        className={`${
                          page === 'deposit' ? 'bg-teal-500' : ''
                        } text-white cursor-pointer hover:bg-teal-700 px-3 py-2 rounded-md text-sm font-medium border-1`}
                      >
                        Deposit
                      </div>
                      <div
                        onClick={() => setPage('withdraw')}
                        className={`${
                          page === 'withdraw' ? 'bg-teal-500' : ''
                        } text-white cursor-pointer hover:bg-teal-700 px-3 py-2 rounded-md text-sm font-medium border-1`}
                      >
                        Withdraw
                      </div>
                    </div>
                  </div>
                  <div className="px-6 py-2">
                    {page === 'deposit' ? (
                      <>
                        <div className="my-1">
                          <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
                            Currency
                          </label>
                          <div className="flex justify-between bg-gray-300 rounded-lg border-3 border-gray-300 py-1">
                            <div className="flex bg-gray-200 items-center px-1 rounded-md">
                              <img className="h-8 w-8" src={`/coin-logo/${currency}.png`} />
                              <select
                                className="bg-gray-200 text-gray-900 rounded-sm focus:ring-blue-500 w-20 px-1 focus:outline-none"
                                onChange={(e) => onChangeCurrency(e)}
                              >
                                {CURRENCY_TYPES.map((item, key) => {
                                  return (
                                    <option value={item} key={key}>
                                      {item}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm text-gray-700 font-semibold mr-1">
                                Balance
                              </span>
                              <span className="text-white font-bold text-center text-lg">
                                {wallet.wallet?.amount}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="my-2 rounded-lg bg-gray-300 p-4">
                          <p className="font-semibold">Deposit address:</p>
                          <p className="break-all">{auth.authInfo.walletaddress}</p>
                          <button
                            onClick={() => onCopy()}
                            type="button"
                            className="text-white mt-2 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                          >
                            Copy
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className="">
                        <div className="my-2">
                          <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
                            Currency
                          </label>
                          <div className="flex justify-between bg-gray-300 rounded-lg border-3 border-gray-300 py-1">
                            <div className="flex bg-gray-200 items-center px-1 rounded-md">
                              <img className="h-8 w-8" src={`/coin-logo/${currency}.png`} />
                              <select
                                className="bg-gray-200 text-gray-900 rounded-sm focus:ring-blue-500 w-20 px-1 focus:outline-none"
                                onChange={(e) => onChangeCurrency(e)}
                              >
                                {CURRENCY_TYPES.map((item, key) => {
                                  return (
                                    <option value={item} key={key}>
                                      {item}
                                    </option>
                                  );
                                })}
                              </select>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm text-gray-700 font-semibold mr-1">
                                Balance
                              </span>
                              <span className="text-white font-bold text-center text-lg">
                                {wallet.wallet?.amount}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="mb-4">
                          <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
                            Withdraw address
                          </label>
                          <input
                            type="text"
                            value={withdrawAddress}
                            onChange={(e) => setWithdrawAddress(e.target.value)}
                            className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
                            Withdraw amount
                          </label>
                          <div className="flex border-1 border-gray-300 rounded-lg">
                            <input
                              type="number"
                              value={withdrawAmount}
                              onChange={(e) => setWithdrawAmount(parseFloat(e.target.value))}
                              onBlur={(e) =>
                                e.target.value > wallet.wallet.amount
                                  ? setWithdrawAmount(wallet.wallet.amount)
                                  : setWithdrawAmount(parseFloat(e.target.value))
                              }
                              className="outline-none bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                            <button
                              onClick={() => setWithdrawAmount(1)}
                              type="button"
                              className="inline-block px-2 py-2 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-l-xl shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out border-1 border-white"
                            >
                              Min
                            </button>
                            <button
                              onClick={() => setWithdrawAmount(wallet.wallet.amount)}
                              type="button"
                              className="inline-block px-2 py-2 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded-r-xl shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out border-1 border-white"
                            >
                              Max
                            </button>
                          </div>
                        </div>
                        <div className="flex justify-center">
                          <button
                            onClick={() => onWithdraw()}
                            type="button"
                            className="text-white mt-2 w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg px-5 py-2.5 mr-2 mb-2"
                          >
                            Confirm
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default WalletModal;
