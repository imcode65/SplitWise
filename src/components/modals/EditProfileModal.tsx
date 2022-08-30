import { useState, Fragment, useEffect } from 'react';
import { Dialog, Portal, Transition } from '@headlessui/react';
import { useAppSelector } from 'store/hooks';

export interface ISaveData {
  name?: string;
  email?: string;
  phonenumb?: string;
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
    console.log('onSave');
    const data = {
      name: name,
      email: email,
      phonenumber: phonenumber ? phonenumber : ''
    };
    console.log(data);
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title className="text-2xl font-medium leading-6 text-gray-900 text-center">
                    Edit Profile
                  </Dialog.Title>
                  <div className="my-4">
                    <div className="my-2">
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
