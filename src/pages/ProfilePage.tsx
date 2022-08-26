import { useState, useEffect } from 'react';
import Navbar from 'components/navbars/Navbar';
import PencilIcon from 'components/icons/PencilIcon';
import MailIcon from 'components/icons/MailIcon';

const ProfilePage = () => {
  const [image, setImage] = useState('');
  const [imageURL, setImageURL] = useState('');

  const onImageChange = (e: any) => {
    setImageURL(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="w-full">
      <Navbar showHome={true}></Navbar>
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
                <span className="font-semibold">star dev</span>
              </div>
              <div className="m-1">
                <p>Your email address</p>
                <span className="font-semibold">1@1.com</span>
              </div>
              <div className="m-1">
                <p>Your phone number</p>
                <span className="font-semibold">None</span>
              </div>
              <div className="m-1">
                <p>Your password</p>
                <span className="font-semibold">*****</span>
              </div>
              <div className="m-1 flex text-[#00F] items-center hover:cursor-pointer hover:underline">
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
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-1"
                >
                  <option selected value="US">
                    USD ($)
                  </option>
                  <option value="CA">CAD ($)</option>
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
                <button>Disconnect your external accounts</button>
              </div>
            </div>
            <div className="p-2">
              <div className="bg-gray-200 rounded-sm p-4 text-center">
                <div className="flex">
                  <img
                    className="mr-1"
                    height="20"
                    width="16"
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
        <span className="text-3xl font-semibold">Notifications</span>
        <div className="grid grid-cols-3">
          <div className="p-2">
            <p className="font-semibold text-gray-400 mb-2">GROUPS AND FRIENDS</p>
            <div className="flex justify-between items-center">
              <p>When someone adds me to a group</p>
              <MailIcon height={24} width={24}></MailIcon>
            </div>
            <div className="flex justify-between items-center">
              <p>When someone adds me as a friend</p>
              <MailIcon height={24} width={24}></MailIcon>
            </div>
          </div>
          <div className="p-2">
            <p className="font-semibold text-gray-400 mb-2">EXPENSES</p>
            <div className="flex justify-between items-center">
              <p>When an expense is added</p>
              <MailIcon height={24} width={24}></MailIcon>
            </div>
            <div className="flex justify-between items-center">
              <p>When an expense is edited/deleted</p>
              <MailIcon height={24} width={24}></MailIcon>
            </div>
            <div className="flex justify-between items-center">
              <p>When someone comments on an expense</p>
              <MailIcon height={24} width={24}></MailIcon>
            </div>
            <div className="flex justify-between items-center">
              <p>When an expense is due</p>
              <MailIcon height={24} width={24}></MailIcon>
            </div>
            <div className="flex justify-between items-center">
              <p>When someone pays me</p>
              <MailIcon height={24} width={24}></MailIcon>
            </div>
          </div>
          <div className="p-2">
            <p className="font-semibold text-gray-400 mb-2">NEWS AND UPDATES</p>
            <div className="flex justify-between items-center">
              <p>Monthly summary of my activity</p>
              <MailIcon height={24} width={24}></MailIcon>
            </div>
            <div className="flex justify-between items-center">
              <p>Major Splitwise news and updates</p>
              <MailIcon height={24} width={24}></MailIcon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
