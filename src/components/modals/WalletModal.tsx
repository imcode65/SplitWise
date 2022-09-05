import { useState, Fragment, useEffect } from 'react';
import { Dialog, Portal, Transition } from '@headlessui/react';
import { DEPOSIT_ADDRESS } from 'config';
import toast from 'react-hot-toast';
import { CURRENCY_TYPES } from 'datas/currency';

export interface IModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const WalletModal: React.FC<IModal> = (props) => {
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const [currency, setCurrency] = useState<string>('');

  useEffect(() => {
    setModalStatus(props.isOpen);
  });

  const onSave = () => {
    props.onSave();
  };

  const onCopy = () => {
    navigator.clipboard.writeText(DEPOSIT_ADDRESS);
    toast.success('copied');
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <div className="w-full flex justify-between items-start px-4 py-2 rounded-t border-b dark:border-gray-600 bg-teal-color">
                    <h3 className="text-lg font-semibold text-white dark:text-white">Wallet</h3>
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
                  <div className="p-6">
                    <div className="my-1">
                      <label>Deposit Currency</label>
                      <div className="flex justify-between bg-gray-400 rounded-lg border-3 border-gray-300 py-1 px-2">
                        <select
                          className="bg-gray-200 border border-gray-300 text-gray-900 rounded-sm focus:ring-blue-500 focus:border-gray-500 w-28 p-1"
                          onChange={(e) => setCurrency(e.target.value)}
                        >
                          {CURRENCY_TYPES.map((item, key) => {
                            return (
                              <option value={item} key={key}>
                                {item}
                              </option>
                            );
                          })}
                        </select>
                        <div className="flex flex-col">
                          <span className="text-sm">Balance</span>
                          <span className="text-white font-bold text-center text-lg">800</span>
                        </div>
                      </div>
                    </div>
                    <div className="my-2 rounded-lg bg-gray-400 p-4">
                      <p className="font-semibold">Deposit address:</p>
                      <span>{DEPOSIT_ADDRESS}</span>
                      <button
                        onClick={() => onCopy()}
                        type="button"
                        className="text-white mt-2 bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                      >
                        Copy
                      </button>
                    </div>
                    <div className="flex justify-end mt-4">
                      <button
                        type="button"
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2"
                        onClick={props.onClose}
                      >
                        Cancel
                      </button>
                    </div>
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
