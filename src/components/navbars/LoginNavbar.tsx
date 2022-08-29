import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import LogoIcon from 'components/icons/LogoIcon';
import MetaMaskIcon from 'components/icons/MetaMaskIcon';
import { hooks, metaMask } from 'components/web3/connectors/metaMask';

const {
  //  useChainId,
  useAccounts,
  useIsActivating
  // useIsActive,
  // useProvider,
  // useENSNames
} = hooks;

const LoginNavbar = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false);
  // const chainId = useChainId();
  const accounts = useAccounts();
  const isActivating = useIsActivating();
  // const isActive = useIsActive();
  // const provider = useProvider();
  // const ENSNames = useENSNames(provider);
  const onConnectWallet = () => {
    if (isActivating) return;
    metaMask
      .activate()
      .then((res) => {
        setIsConnected(true);
        console.log('success');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <nav className="flex items-center justify-between px-16 py-5 mx-auto w-full">
      <div className="flex items-center text-white mr-6">
        <LogoIcon width={48} height={48} className="mr-2" />
        <span className="text-gray-700 text-xl font-bold">Splitwise</span>
      </div>
      <button
        onClick={onConnectWallet}
        type="button"
        className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
      >
        <MetaMaskIcon height={20} width={20} className="mr-2" />
        {isConnected && accounts ? accounts : 'Connect Metamask'}
      </button>
    </nav>
  );
};

export default LoginNavbar;
