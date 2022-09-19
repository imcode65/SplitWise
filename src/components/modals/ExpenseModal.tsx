import { useState, Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router';
import { Dialog, Portal, Transition } from '@headlessui/react';
import toast from 'react-hot-toast';
import NormalButton from 'components/buttons/NormalButton';
import { sendInvite } from 'store/actions';
import { useAppSelector } from 'store/hooks';
import { API_SERVER_URL } from 'config';
export interface IModal {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ExpenseModal: React.FC<IModal> = (props) => {
  const dispatch = useDispatch();
  const { authInfo } = useAppSelector((state) => state.auth);
  const { auth, friend } = useAppSelector((state) => state);
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [emails, setEmails] = useState<string[]>([]);
  const [ids, setIDs] = useState<string[]>([]);
  const [description, setDescription] = useState<string>('');
  const [pay, setPay] = useState<number>(0);
  const { id } = useParams();

  useEffect(() => {
    setModalStatus(props.isOpen);
    setEmails([]);
    setEmail('');
    if (id) {
      const data = {
        id: id
      };
      axios
        .post(`${API_SERVER_URL}api/users/getbyid`, data)
        .then((res) => {
          setEmails([res.data.name]);
          setIDs([res.data._id]);
        })
        .catch((err) => {});
    }
  }, [props.isOpen]);

  const onKeyDown = (e: any) => {
    if (e.key == 'Enter') {
      const data = {
        address: e.target.value
      };
      if (e.target.value === auth.authInfo.email || e.target.value === auth.authInfo.name) {
        toast.error('You inputed your email or username');
        return;
      }
      axios
        .post(`${API_SERVER_URL}api/users/exist`, data)
        .then((res) => {
          if (res.data.status === 'success') {
            setEmails((_emails) => [..._emails, res.data.data.name]);
            setIDs((_ids) => [..._ids, res.data.data._id]);
            setEmail('');
          } else {
            toast.error(res.data.msg);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onCloseEmail = (index: number) => {
    setEmails((_emails) =>
      _emails.filter((val, key) => {
        return key !== index;
      })
    );
    setIDs((_ids) =>
      _ids.filter((val, key) => {
        return key !== index;
      })
    );
  };

  const onSave = () => {
    console.log(pay);
    if (!pay || pay === 0) {
      toast.error('Invalid Amount');
      return;
    }
    emails.map((val, key) => {
      const data = {
        sender_id: authInfo._id,
        receiver_id: ids[key],
        description: description,
        total_pay: pay,
        pay: (pay / (emails.length + 1)).toFixed(2),
        currency: authInfo.currency,
        repeats: ''
      };
      axios
        .post(`${API_SERVER_URL}api/orders/save`, data)
        .then((res) => {
          if (res.data.status === 'success') {
            toast.success('Expense successfully added');
            let isFriend = false;
            friend.friends.map((value: any) => {
              if (
                value.user1._id === res.data.order.receiver_id ||
                value.user2._id === res.data.order.receiver_id
              ) {
                isFriend = true;
              }
              return;
            });
            if (isFriend === false) {
              const dt = {
                id: authInfo._id,
                email1: authInfo.email,
                email2: val
              };
              sendInvite(dt)(dispatch);
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    });
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
                  <div className="flex justify-between items-center px-4 py-2 rounded-t bg-teal-color border-b-1 border-gray-600">
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
                  <div className="flex items-center p-4">
                    <p className="text-sm">With you and: </p>
                    <div className="flex flex-wrap w-80">
                      {emails.map((val, key) => (
                        <div
                          key={key}
                          className="px-2 bg-gray-200 rounded-lg mx-2 mb-2 flex justify-between items-center"
                        >
                          <span>{val}</span>
                          <button
                            type="button"
                            className="text-gray-600 bg-transparent hover:text-gray-900 rounded-lg text-sm p-1 items-center"
                            onClick={() => onCloseEmail(key)}
                          >
                            <svg
                              aria-hidden="true"
                              className="w-3 h-3"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      ))}
                      <input
                        value={email}
                        className="text-sm rounded px-2 py-1 text-gray-700 focus:outline-none focus:bg-white"
                        type="email"
                        onKeyDown={(e) => onKeyDown(e)}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter names or email addresses"
                      />
                    </div>
                  </div>
                  <div
                    className={`px-4 mb-2 space-y-4 transition-all ${
                      emails.length > 0 ? 'h-68' : 'h-0'
                    }`}
                  >
                    <div className="flex items-center justify-center pt-2 px-6 rounded-b border-t border-gray-200">
                      <img className="mr-2" src="/general@2x.png" />
                      <div className="flex flex-col">
                        <input
                          className="focus:outline-none text-xl border-b-2 border-dashed"
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder="Enter a description"
                        />
                        <div className="border-b-2 border-dashed mt-2">
                          <input
                            type="number"
                            className="focus:outline-none text-3xl font-bold w-52"
                            onChange={(e) => setPay(parseFloat(e.target.value))}
                            placeholder="0.00"
                          />
                          <span className="mr-1">USDT</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col px-16 items-center text-sm">
                      <div>
                        Paid by{' '}
                        <span className="px-1 rounded-lg bg-gray-100 border-dashed border-1 border-gray-500 text-teal-color">
                          you
                        </span>{' '}
                        and split{' '}
                        <span className="px-1 rounded-lg bg-gray-100 border-dashed border-1 border-gray-500 text-teal-color">
                          equally
                        </span>
                        .
                      </div>
                      <div className="details">(${pay}/person)</div>
                    </div>
                    <div className="flex justify-center">
                      <NormalButton
                        className="rounded-xl px-4 text-sm"
                        text="September 6, 2022"
                      ></NormalButton>
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
                        onClick={() => onSave()}
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
