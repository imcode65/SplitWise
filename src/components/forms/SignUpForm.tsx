import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { registerUser } from 'store/actions';
import { hooks } from 'components/web3/connectors/metaMask';
import toast from 'react-hot-toast';

const {
  //  useChainId,
  useAccounts,
  useIsActivating
  // useIsActive,
  // useProvider,
  // useENSNames
} = hooks;

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const accounts = useAccounts();

  const onSignUp = () => {
    const data = {
      email: email,
      name: name,
      walletaddress: accounts && accounts.length > 0 ? accounts[0] : ''
    };
    if (data.walletaddress === '') {
      toast.error('Please Connect Wallet');
    } else {
      registerUser(data, navigate)(dispatch);
    }
  };

  return (
    <div className="lg:w-1/2 xl:w-1/2 px-4 md:px-16 shadow-lg border-1 border-gray-400">
      <div className="text-3xl font-mont my-4">Sign Up</div>
      <div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Jack"
          />
        </div>
        <div className="py-4 mb-8">
          <button
            onClick={onSignUp}
            value="Log in"
            className="w-full cursor-pointer text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
