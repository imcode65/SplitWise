import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from 'store/hooks';
import moment from 'moment';
import axios from 'axios';
import ExpenseModal from 'components/modals/ExpenseModal';
import RightSideBar2 from '../RightSideBar2';
import { API_SERVER_URL } from 'config';

const FriendBar = () => {
  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const { id } = useParams();
  const { auth, friend } = useAppSelector((state) => state);
  const [info, setInfo] = useState({
    _id: '',
    name: '',
    email: '',
    walletaddress: '',
    phonenumber: '',
    avatar: ''
  });
  const [sendOrders, setSendOrders] = useState<any[]>([]);
  const [receiveOrders, setReceiveOrders] = useState<any[]>([]);

  useEffect(() => {
    const idData = {
      id: id
    };
    axios
      .post(`${API_SERVER_URL}api/users/getbyid`, idData)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((err) => {});
    getOrders();
  }, [id]);

  const getOrders = () => {
    const data = {
      id1: auth.authInfo._id,
      id2: id
    };
    axios
      .post(`${API_SERVER_URL}api/orders/send_to_friend`, data)
      .then((res) => {
        setSendOrders(res.data);
      })
      .catch((err) => {});
    axios
      .post(`${API_SERVER_URL}api/orders/receive_from_friend`, data)
      .then((res) => {
        setReceiveOrders(res.data);
      })
      .catch((err) => {});
  };

  const onSave = () => {
    setShowExpenseModal(false);
    getOrders();
  };

  const onDeleteOrder = (_id: string) => {
    const data = {
      id: _id
    };
    axios
      .post(`${API_SERVER_URL}api/orders/deletebyid`, data)
      .then((res) => {
        getOrders();
      })
      .catch((err) => {});
    getOrders();
  };

  return (
    <div className="grid sm:grid-cols-4 overflow-hidden relative">
      <div className="col-span-3 border-l-1 border-r-1 border-gray-400 min-h-screen">
        <div className="bg-[#eee] flex py-2 px-4 justify-between border-b-1 border-gray-400 flex-wrap">
          <div className="flex md:text-3xl sm:text-xl font-semibold my-2">
            <img
              className="h-10 w-10 rounded-full mr-2"
              src={info.avatar ? info.avatar : '../avatar.png'}
            />
            {info.name}
          </div>
          <div>
            <button
              className="text-white my-2 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2"
              onClick={() => setShowExpenseModal(true)}
            >
              Add an expense
            </button>
            <button className="cursor-pointer text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2">
              Settle up
            </button>
          </div>
        </div>
        {sendOrders.length === 0 && receiveOrders.length === 0 ? (
          <div className="grid grid-cols-12 gap-4 p-8">
            <div className="sm:col-span-5 col-span-12">
              <img className="mx-auto" src="/1.png" />
            </div>
            <div className="sm:col-span-7 col-span-12">
              <p className="text-3xl font-semibold">You have not added any expenses yet.</p>
              <p className="text-lg text-gray-500 mt-4">
                To add a new expense, click the orange "Add an expense" button.
              </p>
            </div>
          </div>
        ) : (
          <>
            {sendOrders.map((val, key) => {
              return (
                <div className="flex px-2 py-1 space-y-2 border-b-1" key={key}>
                  <NavLink
                    className="border-gray-500 w-full text-lg flex justify-between items-center cursor-pointer"
                    to={`/friends/${val.receiver_id._id}`}
                  >
                    <div className="flex items-center">
                      <div className="flex flex-col items-center text-gray-400 mr-2">
                        <div className="text-xs">{moment(val.date).format('MMM')}</div>
                        <div>{new Date(val.date).getDate()}</div>
                      </div>
                      <img className="h-10 w-10 mr-2" src="../general@2x.png" />
                      <div>{val.description}</div>
                    </div>
                    <div className="flex space-x-4">
                      <div className="flex flex-col text-sm">
                        <span className="text-gray-400">you paid</span>
                        <p className="text-black">
                          <span className="font-semibold">
                            {val.total_pay} {val.currency}
                          </span>
                        </p>
                      </div>
                      <div className="flex flex-col text-sm">
                        <span className="text-gray-400">you lent {val.receiver_id.name}</span>
                        <p className="text-teal-color">
                          <span className="font-semibold">
                            {val.pay} {val.currency}
                          </span>
                        </p>
                      </div>
                      <div className="flex justify-center items-center">
                        <button
                          onClick={() => onDeleteOrder(val._id)}
                          type="button"
                          className="text-white hover:text-red-500 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
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
                    </div>
                  </NavLink>
                </div>
              );
            })}
            {receiveOrders.map((val, key) => {
              return (
                <div className="flex px-2 py-1 border-b-1" key={key}>
                  <div className="border-gray-500 w-full text-lg flex justify-between items-center cursor-pointer">
                    <div className="flex items-center">
                      <div className="flex flex-col items-center text-gray-400 mr-2">
                        <div className="text-xs">{moment(val.date).format('MMM')}</div>
                        <div>{new Date(val.date).getDate()}</div>
                      </div>
                      <img className="h-10 w-10 mr-2" src="../general@2x.png" />
                      <div>{val.description}</div>
                    </div>
                    <div className="flex space-x-4">
                      <div className="flex flex-col text-sm">
                        <span className="text-gray-400">{val.sender_id.name} paid</span>
                        <p className="text-black">
                          <span className="font-semibold">
                            {val.total_pay} {val.currency}
                          </span>
                        </p>
                      </div>
                      <div className="flex flex-col text-sm">
                        <span className="text-gray-400">{val.sender_id.name} lent you</span>
                        <p className="text-teal-color">
                          <span className="font-semibold text-[#ff652f]">
                            {val.pay} {val.currency}
                          </span>
                        </p>
                      </div>
                      <div className="flex justify-center items-center">
                        <button
                          onClick={() => onDeleteOrder(val._id)}
                          type="button"
                          className="text-white hover:text-red-500 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
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
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
      <div className="col-span-1">
        <RightSideBar2 />
      </div>
      <ExpenseModal
        isOpen={showExpenseModal}
        onClose={() => setShowExpenseModal(false)}
        onSave={onSave}
      />
    </div>
  );
};

export default FriendBar;
