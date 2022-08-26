import { useState, useEffect } from 'react';
import Navbar from 'components/navbars/Navbar';
import PencilIcon from 'components/icons/PencilIcon';

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
                <p className="font-semibold text-gray-500">GET SPLITWISE PRO!</p>
                <span className="font-semibold">
                  Subscribe to Splitwise Pro for charts, search, an ad-free experience, and more!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
