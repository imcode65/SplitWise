import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PencilIcon from 'components/icons/PencilIcon';
import NotificationBar from 'components/layouts/bars/NotificationsBar';
import PrivacyBar from 'components/layouts/bars/PrivacyBar';
import ProfileFooter from 'components/footers/ProfileFooter';
import FeaturesBar from 'components/layouts/bars/FeaturesBar';
import NormalButton from 'components/buttons/NormalButton';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import EditProfileModal from 'components/modals/EditProfileModal';
import { ISaveData } from 'components/modals/EditProfileModal';
import { updateUser } from 'store/actions/authActions';
import { CURRENCY_TYPES } from 'datas/currency';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { authInfo } = useAppSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [image, setImage] = useState<string>('');
  const [imageURL, setImageURL] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phonenumber, setPhonenumber] = useState<string>('');
  const [avatar, setAvatar] = useState<string>('');
  const [currency, setCurrency] = useState<string>('');

  const onImageChange = (e: any) => {
    setImage(e.target.files[0]);
    setImageURL(URL.createObjectURL(e.target.files[0]));
  };
  const onSaveModal = (data: ISaveData) => {
    updateUser(data)(dispatch);
    setIsOpen(false);
  };
  const onCloseModal = () => {
    setIsOpen(false);
  };
  const onSave = () => {
    const formData = new FormData();
    if (image) {
      formData.append('myImage', image);
    }
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phonenumber', phonenumber ? phonenumber : '');
    formData.append('walletaddress', authInfo.walletaddress);
    formData.append('currency', currency);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    updateUser(formData, config)(dispatch);
  };

  useEffect(() => {
    setName(authInfo.name);
    setEmail(authInfo.email);
    setPhonenumber(authInfo.phonenumber);
    setAvatar(authInfo.avatar);
    setCurrency(authInfo.currency);
  }, [authInfo]);
  return (
    <div className="container mx-auto">
      <div className="sm:px-16 sm:py-4 p-4">
        <span className="text-3xl font-bold">Your account</span>
        <div className="grid md:grid-cols-2">
          <div className="grid sm:grid-cols-2 py-4">
            <div className="p-1 text-center overflow-auto">
              {imageURL ? (
                <img src={imageURL} className="max-h-60 max-w-full mx-auto mb-2" />
              ) : (
                <img src={avatar} className="max-h-60 max-w-full mx-auto mb-2" />
              )}
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
                <span className="font-semibold">{name}</span>
              </div>
              <div className="m-1">
                <p>Your email address</p>
                <span className="font-semibold">{email}</span>
              </div>
              <div className="m-1">
                <p>Your phone number</p>
                <div className="flex items-center">
                  <span className="font-semibold">{phonenumber ? phonenumber : 'none'}</span>
                </div>
              </div>
              <div
                className="m-1 text-sm flex text-[#00F] items-center hover:cursor-pointer hover:underline"
                onClick={() => setIsOpen(true)}
              >
                <PencilIcon height={14} width={14} className="mx-1" />
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                  onChange={(e) => setCurrency(e.target.value)}
                >
                  {CURRENCY_TYPES.map((item, key) => {
                    return (
                      <option value={item} key={key}>
                        {item}
                      </option>
                    );
                  })}
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
                <NormalButton
                  text="Disconnect your external accounts"
                  className="text-sm"
                ></NormalButton>
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
            onClick={() => onSave()}
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
      <EditProfileModal isOpen={isOpen} onClose={onCloseModal} onSave={onSaveModal} />
    </div>
  );
};

export default ProfilePage;
