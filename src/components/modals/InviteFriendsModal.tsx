import { useState, Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Dialog, Transition } from '@headlessui/react';
import { useAppSelector } from 'store/hooks';
import { sendInvite } from 'store/actions/friendsActions';
import LogoIcon from 'components/icons/LogoIcon';
import toast from 'react-hot-toast';

export interface IModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const InvitieFriendsModal: React.FC<IModal> = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authInfo } = useAppSelector((state) => state.auth);
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [text, setText] = useState<string>('');

  useEffect(() => {
    setModalStatus(props.isOpen);
    setEmail('');
    setText('');
  }, [props.isOpen]);

  const onSave = () => {
    if (email) {
      const data = {
        id: authInfo._id,
        email1: authInfo.email,
        email2: email,
        msg: text
      };
      sendInvite(data, navigate)(dispatch);
      props.onSave();
    } else {
      toast.error("Input friend's email");
    }
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
                  <div className="flex justify-between items-start px-4 pt-4 rounded-t dark:border-gray-600">
                    <div className="flex items-center">
                      <LogoIcon height={20} width={20} className="mr-2" />
                      <span className="text-gray-800 text-2xl font-semibold">Invite Friends</span>
                    </div>
                    <button
                      type="button"
                      className="text-gray-800 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
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
                    <div className="flex items-center mb-2 border-1 border-gray-200 px-2 rounded-md">
                      <p className="text-sm">To: </p>
                      <input
                        className="w-full bg-white text-sm border-gray-200 rounded px-2 py-2 text-gray-700 focus:outline-none"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter a email address or username"
                      />
                    </div>
                    <textarea
                      placeholder="Include an optional message"
                      className="w-full h-20 bg-white text-sm border-gray-200 rounded px-2 py-2 text-gray-700 border-1 focus:outline-none"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    ></textarea>
                    <div className="flex items-center pt-2 space-x-2 rounded-b justify-end">
                      <button
                        type="button"
                        className="text-white bg-[#ff652f] hover:bg-[#f8561b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-md text-md px-5 py-2.5 text-center"
                        onClick={() => onSave()}
                      >
                        Send invites and add friends
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

export default InvitieFriendsModal;
