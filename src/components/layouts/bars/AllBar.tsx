import { useState } from 'react';
import ExpenseModal from 'components/modals/ExpenseModal';

const AllBar = () => {
  const [showExpenseModal, setShowExpenseModal] = useState(false);

  return (
    <div>
      <div className="bg-[#eee] flex py-2 px-4 justify-between border-b-1 border-gray-600 flex-wrap">
        <span className="md:text-3xl sm:text-xl font-semibold">All expenses</span>
        <div>
          <button
            className="text-white my-1 bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2"
            onClick={() => setShowExpenseModal(true)}
          >
            Add an expense
          </button>
          <button className="cursor-pointer text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2">
            Settle up
          </button>
        </div>
      </div>
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
      <ExpenseModal
        show={showExpenseModal}
        onClose={() => setShowExpenseModal(false)}
        onSave={() => console.log('onSave')}
      />
    </div>
  );
};

export default AllBar;
