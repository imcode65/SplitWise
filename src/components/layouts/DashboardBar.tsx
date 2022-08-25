import { useState } from 'react';
import ExpenseModal from 'components/modals/ExpenseModal';

const DashboardBar = () => {
  const [showExpenseModal, setShowExpenseModal] = useState(false);

  return (
    <div>
      <div className="bg-[#eee] flex p-4 justify-between border-t-1 border-b-1 border-gray-600">
        <span className="text-3xl font-semibold">Dashboard</span>
        <div>
          <button
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
            onClick={() => setShowExpenseModal(true)}
          >
            Add an expense
          </button>
          <button className="cursor-pointer text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">
            Settle up
          </button>
        </div>
      </div>
      <ExpenseModal
        show={showExpenseModal}
        onClose={() => setShowExpenseModal(false)}
        onSave={() => console.log('onSave')}
      />
    </div>
  );
};

export default DashboardBar;
