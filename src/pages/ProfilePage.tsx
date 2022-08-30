import { useState, useEffect, Fragment } from 'react';
import PencilIcon from 'components/icons/PencilIcon';
import NotificationBar from 'components/layouts/bars/NotificationsBar';
import PrivacyBar from 'components/layouts/bars/PrivacyBar';
import ProfileFooter from 'components/footers/ProfileFooter';
import FeaturesBar from 'components/layouts/bars/FeaturesBar';
import NormalButton from 'components/buttons/NormalButton';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import EditProfileModal from 'components/modals/EditProfileModal';

const ProfilePage = () => {
  const { authInfo, isLogged } = useAppSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [image, setImage] = useState<string>('');
  const [imageURL, setImageURL] = useState<string>('');

  const onImageChange = (e: any) => {
    setImageURL(URL.createObjectURL(e.target.files[0]));
  };

  const onClose = () => {
    console.log('onClose');
  };
  const onSave = () => {
    console.log('onSave');
  };
  return (
    <div className="container mx-auto">
      <div className="sm:px-16 sm:py-4 p-4">
        <span className="text-3xl font-bold">Your account</span>
        <div className="grid md:grid-cols-2">
          <div className="grid sm:grid-cols-2 py-4">
            <div className="p-1 text-center overflow-auto">
              <img src={imageURL} className="max-h-60 max-w-full mx-auto mb-2" />
              <input
                className="mx-auto"
                type="file"
                multiple
                accept="*/*"
                onChange={onImageChange}
              />
            </div>
            <div className="p-1">
              <div className="m-1">
                <p>Your name</p>
                <span className="font-semibold">{authInfo.name}</span>
              </div>
              <div className="m-1">
                <p>Your email address</p>
                <span className="font-semibold">{authInfo.email}</span>
              </div>
              <div className="m-1">
                <p>Your phone number</p>
                <span className="font-semibold">
                  {authInfo.phonenumber ? authInfo.phonenumber : 'none'}
                </span>
              </div>
              <div
                onClick={() => setIsOpen(true)}
                className="m-1 flex text-[#00F] items-center hover:cursor-pointer hover:underline"
              >
                <PencilIcon height={16} width={16} className="mr-1" />
                <p> Edit </p>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 py-4">
            <div className="p-2">
              <div className="mb-2">
                <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Your default currency
                  <p className="text-xs text-gray-400">(for new expenses)</p>
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                >
                  <option selected value="US">
                    USDT
                  </option>
                  <option value="CA">USDC</option>
                </select>
              </div>
              <div className="mb-2">
                <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Your time zone
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                >
                  <option selected value="EST">
                    EST
                  </option>
                  <option value="JST">JST</option>
                </select>
              </div>
              <div className="mb-2">
                <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-400">
                  Language
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                >
                  <option selected value="US">
                    English
                  </option>
                  <option value="JP">Japanese</option>
                </select>
              </div>
              <div className="mb-2">
                <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-400">
                  You are connected with Google.
                </label>
                <NormalButton text="Disconnect your external accounts"></NormalButton>
              </div>
            </div>
            <div className="p-2">
              <div className="bg-[#eee] rounded-sm p-4 text-center">
                <div className="flex justify-center items-center">
                  <img
                    className="mr-1 max-h-6"
                    src="https://assets.splitwise.com/assets/pro/pro-feature-bb96212d04fed0e69b87f36c5c09128055727ae37824697ad64d49cb25f339ff.svg"
                  />
                  <p className="font-semibold text-gray-500">GET SPLITWISE PRO!</p>
                </div>
                <p className="font-semibold text-sm">
                  Subscribe to Splitwise Pro for charts, search, an ad-free experience, and more!
                </p>
                <button
                  type="button"
                  className="text-white bg-purple-500 hover:bg-purple-600 rounded-md text-sm px-5 py-2.5 mt-2"
                >
                  Get Splitwise Pro!
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end mb-4">
          <button
            type="button"
            className="text-white bg-[#ff652f] hover:bg-[#f8561b] rounded-md text-sm px-5 py-2.5 mr-2"
          >
            Save
          </button>
        </div>
        <hr className="my-4" />
        <NotificationBar />
        <hr className="my-4" />
        <PrivacyBar />
        <hr className="my-4" />
        <FeaturesBar />
      </div>
      <ProfileFooter />
      <EditProfileModal isOpen={isOpen} onClose={onClose} onSave={onSave} />
    </div>
  );
};

export default ProfilePage;
