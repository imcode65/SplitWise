import { useState } from 'react';

const InviteFriendsForm = () => {
  const [email, setEmail] = useState('');
  return (
    <div className="overflow-auto">
      <div className="bg-teal-color text-white font-semibold px-2 py-1 border-1 border-teal-border">
        <span>Invite friends</span>
      </div>
      <div className="p-2 border-l-1 border-b-1 border-r-1 border-gray-500">
        <input
          className="bg-gray-200 border-2 mb-2 text-sm border-gray-200 rounded w-full px-2 py-1 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-500"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter a email address"
        />
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-2 py-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-full overflow-hidden"
        >
          Send Invite
        </button>
      </div>
    </div>
  );
};

export default InviteFriendsForm;
