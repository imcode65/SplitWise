import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { sendInvite } from 'store/actions';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import toast from 'react-hot-toast';

const InviteFriendsForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authInfo } = useAppSelector((state) => state.auth);
  const [email, setEmail] = useState<string>('');

  const onSendInvite = () => {
    if (email) {
      if (authInfo.email === email || authInfo.name === email) {
        toast.error('You inputed your email or username');
        return;
      }
      const data = {
        id: authInfo._id,
        email1: authInfo.email,
        email2: email
      };
      sendInvite(data)(dispatch);
      setEmail('');
    } else {
      toast.error('Input username or email');
    }
  };
  return (
    <div className="overflow-auto my-1">
      <div className="bg-teal-color text-white font-semibold px-2 py-1 border-1 border-teal-border">
        <span>Invite friends</span>
      </div>
      <div className="p-2 border-l-1 border-b-1 border-r-1 border-gray-500">
        <input
          className="bg-gray-200 border-2 mb-2 text-sm border-gray-200 rounded w-full px-2 py-1 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-500"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter a email address or username"
        />
        <button
          type="button"
          onClick={() => onSendInvite()}
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-2 py-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-full overflow-hidden"
        >
          Send Invite
        </button>
      </div>
    </div>
  );
};

export default InviteFriendsForm;
