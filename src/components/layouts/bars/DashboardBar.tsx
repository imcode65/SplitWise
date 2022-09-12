import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import ExpenseModal from 'components/modals/ExpenseModal';
import RightSideBar from 'components/layouts/RightSideBar';
import { useAppSelector } from 'store/hooks';
import { API_SERVER_URL } from 'config';
import ListIcon from 'components/icons/ListIcon';
import ChartIcon from 'components/icons/ChartIcon';

const DashboardBar = () => {
  const { authInfo } = useAppSelector((state) => state.auth);
  const [sendOrders, setSendOrders] = useState<any[]>([]);
  const [receiveOrders, setReceiveOrders] = useState<any[]>([]);
  const [showExpenseModal, setShowExpenseModal] = useState<boolean>(false);
  const [viewStatus, setViewStatus] = useState<string>('list');

  useEffect(() => {
    const data = {
      id: authInfo._id
    };
    axios
      .post(`${API_SERVER_URL}api/orders/get_send_order`, data)
      .then((res) => {
        if (res.data.status !== 'fail') {
          setSendOrders(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .post(`${API_SERVER_URL}api/orders/get_receive_order`, data)
      .then((res) => {
        if (res.data.status !== 'fail') {
          setReceiveOrders(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="grid sm:grid-cols-4">
      <div className="col-span-3 border-l-1 border-r-1 border-gray-600">
        <div className="bg-[#eee] flex py-2 px-4 justify-between border-b-1 border-gray-600 flex-wrap">
          <span className="md:text-3xl sm:text-xl font-semibold my-2">Dashboard</span>
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
              <p className="text-3xl font-semibold">You're all settled up.</p>
              <p className="text-3xl font-semibold">Awesome!</p>
              <p className="text-lg text-gray-500 mt-4">
                To add a new expense, click the orange "Add an expense" button.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 p-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500 font-semibold">YOU OWE</span>
                <div
                  onClick={() => setViewStatus('list')}
                  className={`flex ${
                    viewStatus === 'list' ? 'bg-[#eee]' : 'bg-white text-gray-400'
                  } cursor-pointer items-center px-2 rounded-l border-1 border-gray-500`}
                >
                  <ListIcon height={16} width={16} className="mr-1"></ListIcon>
                  view as list
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <div
                    onClick={() => setViewStatus('chart')}
                    className={`${
                      viewStatus === 'chart' ? 'bg-[#eee]' : 'bg-white text-gray-400'
                    } flex cursor-pointer items-center px-2 rounded-r border-y-1 border-r-1 border-gray-500`}
                  >
                    <ChartIcon height={16} width={16} className="mr-1"></ChartIcon>
                    view chart
                  </div>
                  <span className="text-gray-500 font-semibold">YOU ARE OWED</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col px-2 py-1 border-r-1 border-gray-400">
                {receiveOrders.length > 0 ? (
                  receiveOrders.map((val, key) => {
                    return (
                      <div
                        key={key}
                        className="border-gray-500 text-lg flex items-center cursor-pointer"
                      >
                        <img src={val.receiver_id.avatar} className="h-8 w-8 rounded-full mr-2" />
                        <div className="flex flex-col text-sm">
                          <span>{val.receiver_id.name}</span>
                          <p className="text-teal-color">
                            {' '}
                            ownes you{' '}
                            <span className="font-semibold">
                              {val.pay} {val.currency}
                            </span>
                          </p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <span className="text-gray-400 text-left">You do not owed anything</span>
                )}
              </div>
              <div className="flex flex-col px-2 py-1 space-y-2">
                {sendOrders.length > 0 ? (
                  sendOrders.map((val, key) => {
                    return (
                      <NavLink
                        key={key}
                        className="border-gray-500 text-lg flex items-center cursor-pointer"
                        to={`/friends/${val.receiver_id._id}`}
                      >
                        <img src={val.receiver_id.avatar} className="h-8 w-8 rounded-full mr-2" />
                        <div className="flex flex-col text-sm">
                          <span>{val.receiver_id.name}</span>
                          <p className="text-teal-color">
                            {' '}
                            ownes you{' '}
                            <span className="font-semibold">
                              {val.pay} {val.currency}
                            </span>
                          </p>
                        </div>
                      </NavLink>
                    );
                  })
                ) : (
                  <span className="text-gray-400 text-right">You are not owed anything</span>
                )}
              </div>
            </div>
          </>
        )}
      </div>
      <div className="col-span-1">
        <RightSideBar />
      </div>
      <ExpenseModal
        isOpen={showExpenseModal}
        onClose={() => setShowExpenseModal(false)}
        onSave={() => setShowExpenseModal(false)}
      />
    </div>
  );
};

export default DashboardBar;
