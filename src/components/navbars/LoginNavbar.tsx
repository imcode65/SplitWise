import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import LogoIcon from 'components/icons/LogoIcon';
// import MetaMaskIcon from 'components/icons/MetaMaskIcon';
import { hooks, metaMask } from 'components/web3/connectors/metaMask';
// import { isSignUp } from 'store/actions';
// import { WalletAddressFormat } from 'methods/WalletAddressFormat';
// import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';

const LoginNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // void metaMask.connectEagerly().catch(() => {
    //   console.debug('Failed to connect eagerly to metamask');
    // });
  }, []);

  return (
    <nav className="flex items-center justify-between px-16 py-5 mx-auto w-full">
      <div className="flex items-center text-white sm:mr-6">
        <LogoIcon width={48} height={48} className="sm:mr-2" />
        <span className="text-gray-700 text-xl font-bold hidden sm:block">Splitwise</span>
      </div>
      {/* <button
        onClick={onConnectWallet}
        type="button"
        className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
      >
        <MetaMaskIcon height={20} width={20} className="mr-2" />
        {isConnected && accounts ? WalletAddressFormat(accounts[0]) : 'Connect Metamask'}
      </button> */}
      <div>
        <NavLink
          to="/login"
          type="button"
          className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          type="button"
          className="text-white bg-teal-color hover:bg-teal-600 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
        >
          Sign up
        </NavLink>
      </div>
    </nav>
  );
};

export default LoginNavbar;
