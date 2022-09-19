import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAppSelector } from 'store/hooks';
import moment from 'moment';
import RightSideBar from 'components/layouts/RightSideBar';
import { API_SERVER_URL } from 'config';

const ActivityBar = () => {
  const [activitys, setActivitys] = useState<any[]>([]);
  const { auth } = useAppSelector((state) => state);

  useEffect(() => {
    getActivitys();
  }, []);

  const getActivitys = () => {
    console.log('getAcitivtys');
    const data = {
      id: auth.authInfo._id
    };
    axios
      .post(`${API_SERVER_URL}api/historys/by_user_id`, data)
      .then((res) => {
        console.log(res.data.data);
        setActivitys(res.data.data);
      })
      .catch((err) => {});
  };

  const onDeleteOrder = (_id: string) => {
    console.log(_id);
  };

  return (
    <div className="grid sm:grid-cols-4">
      <div className="col-span-3 border-l-1 border-r-1 border-gray-400 min-h-screen">
        <div className="bg-[#eee] flex py-2 px-4 border-b-1 border-gray-400 flex-wrap">
          <span className="md:text-3xl sm:text-xl font-semibold  my-2">Recent activity</span>
        </div>

        {activitys.length > 0 ? (
          activitys.map((val, key) => {
            return (
              <div className="flex px-2 py-1 space-y-2 border-b-1" key={key}>
                <div className="border-gray-500 w-full text-lg flex justify-between items-center cursor-pointer">
                  <div className="flex">
                    <img className="h-10 w-10 mr-2" src="../general@2x.png" />
                    <div className="flex flex-col text-sm">
                      {val.sender_id._id === auth.authInfo._id ? (
                        <span className="text-gray-400">you lent {val.receiver_id.name}</span>
                      ) : (
                        <span className="text-gray-400">{val.receiver_id.name} lent you</span>
                      )}
                      <p
                        className={`${
                          val.sender_id._id === auth.authInfo._id
                            ? 'text-teal-color'
                            : 'text-[#ff652f]'
                        }`}
                      >
                        <span className="font-semibold">
                          {val.sender_id._id === auth.authInfo._id
                            ? `You get back ${val.amount} ${val.currency}`
                            : `You owe ${val.amount} ${val.currency}`}
                        </span>
                      </p>
                      <div className="text-xs">
                        {moment(val.date).format('MMM')} {new Date(val.date).getDate()}
                      </div>
                    </div>
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
            );
          })
        ) : (
          <div className="px-4">
            <p className="text-lg text-gray-500 mt-4">
              There is no activity in your account yet. Try adding an expense!
            </p>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <RightSideBar />
      </div>
    </div>
  );
};

export default ActivityBar;
