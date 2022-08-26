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
        <div className="flex flex-wrap">
          <div className="sm:flex-1">
            <div className="flex flex-wrape py-4">
              <div className="flex-1 p-1 text-center overflow-auto">
                <img src={imageURL} className="max-h-60 max-w-full mx-auto mb-2" />
                <input
                  className="mx-auto"
                  type="file"
                  multiple
                  accept="*/*"
                  onChange={onImageChange}
                />
              </div>
              <div className="flex-1 p-1">
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
          </div>
          <div className="sm:flex-1">
            <div className="grid grid-cols-2 py-4">
              <div className="grid-cols-1">
                <div className="m-1">
                  <span>Your default currency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
