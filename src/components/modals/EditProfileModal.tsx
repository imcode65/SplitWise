import { useState, Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useAppSelector } from 'store/hooks';

export interface ISaveData {
  name?: string;
  email?: string;
  phonenumber?: string;
  walletaddress: string;
  avatar?: string;
  timezone?: string;
  langauge?: string;
  currency?: string;
}
export interface IModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: ISaveData) => void;
}

const EditProfileModal: React.FC<IModal> = (props) => {
  const { authInfo } = useAppSelector((state) => state.auth);
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phonenumber, setPhonenumber] = useState<string>('');

  useEffect(() => {
    setModalStatus(props.isOpen);
  });

  const onSave = () => {
    const data = {
      name: name,
      email: email,
      phonenumber: phonenumber ? phonenumber : '',
      walletaddress: authInfo.walletaddress
    };
    props.onSave(data);
  };

  useEffect(() => {
    setName(authInfo.name);
    setEmail(authInfo.email);
    setPhonenumber(authInfo.phonenumber);
  }, [props.isOpen]);
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
                  <div className="w-full flex justify-between items-start px-4 py-2 rounded-t dark:border-gray-600 bg-teal-color  border-b-1 border-gray-600">
                    <h3 className="text-lg font-semibold text-white">Edit Profile</h3>
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
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Your name
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="name"
                      />
                    </div>
                    <div className="my-2">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Your email address
                      </label>
                      <input
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="email"
                      />
                    </div>
                    <div className="my-2">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Your phone number
                      </label>
                      <input
                        type="text"
                        onChange={(e) => setPhonenumber(e.target.value)}
                        value={phonenumber}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="phone"
                      />
                    </div>
                    <div className="flex justify-end mt-4">
                      <button
                        type="button"
                        className="text-white bg-[#ff652f] hover:bg-[#f8561b] rounded-md text-sm px-5 py-2.5 mr-2"
                        onClick={() => onSave()}
                      >
                        Save
                      </button>
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

export default EditProfileModal;
