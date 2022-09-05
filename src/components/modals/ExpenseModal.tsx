import { useState, Fragment, useEffect } from 'react';
import { Dialog, Portal, Transition } from '@headlessui/react';
export interface IModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ExpenseModal: React.FC<IModal> = (props) => {
  const [modalStatus, setModalStatus] = useState<boolean>(false);

  useEffect(() => {
    setModalStatus(props.isOpen);
  }, [props.isOpen]);

  const onSave = () => {
    props.onSave();
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
                  <div className="flex justify-between items-center px-4 py-2 rounded-t dark:border-gray-600 bg-teal-color border-b-1 border-gray-600">
                    <h3 className="text-lg font-semibold text-white dark:text-white">
                      Add an expense
                    </h3>
                    <button
                      type="button"
                      className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
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
                  <div className="p-4">
                    <div className="flex items-center mb-4">
                      <p className="text-sm">With you and: </p>
                      <input
                        className="w-72 bg-gray-200 border-2 ml-2 text-sm border-gray-200 rounded px-2 py-1 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-500"
                        type="email"
                        placeholder="Enter names or email addresses"
                      />
                    </div>
                    <div className="flex items-center justify-center pt-2 px-6 rounded-b border-t border-gray-200 my-2">
                      <img className="mr-2" src="/general@2x.png" />
                      <div className="flex flex-col">
                        <input
                          className="focus:outline-none text-xl border-b-2 border-dashed"
                          placeholder="Enter a description"
                        />
                        <div className="border-b-2 border-dashed mt-2">
                          <span className="mr-1">$</span>
                          <input
                            className="focus:outline-none text-3xl font-bold w-52"
                            placeholder="0.00"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center pt-2 space-x-2 rounded-b border-t border-gray-200 justify-end">
                      <button
                        type="button"
                        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                        onClick={props.onClose}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="text-white bg-teal-color hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        onClick={props.onSave}
                      >
                        Save
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

export default ExpenseModal;
