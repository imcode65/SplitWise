import { useState, useEffect } from 'react';
export interface IID {
  show: boolean;
  onClose: () => void;
  onSave: () => void;
}

const ExpenseModal: React.FC<IID> = (props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(props.show);
  });
  return (
    <div
      aria-hidden="true"
      className={`${
        show ? '' : 'hidden'
      } overflow-y-auto overflow-x-hidden fixed z-50 w-full md:inset-0 h-modal md:h-full`}
    >
      <div className="relative p-4 w-full max-w-sm h-full md:h-auto left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex justify-between items-start p-2 rounded-t border-b dark:border-gray-600 bg-teal-color">
            <h3 className="text-lg font-semibold text-white dark:text-white">Add an expense</h3>
            <button
              type="button"
              className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
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
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="flex p-2 items-center">
            <span>With you and: </span>
            <input
              className="bg-gray-200 border-2 ml-2 text-sm border-gray-200 rounded px-2 py-1 text-gray-700 focus:outline-none focus:bg-white focus:border-blue-500"
              type="email"
              placeholder="Enter a email address"
            />
          </div>
          <div className="flex items-center p-4 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600 justify-end">
            <button
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              onClick={props.onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="text-white bg-teal-color hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={props.onSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseModal;
