import { useParams, useNavigate } from 'react-router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'store/hooks';
import NormalButton from 'components/buttons/NormalButton';
import ConfirmModal from 'components/modals/ConfirmModal';
import { removeFriend } from 'store/actions';

const FriendSetting = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useAppSelector((state) => state);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { id } = useParams();

  const onDelete = () => {
    setIsOpen(false);
    const data = {
      id1: auth.authInfo._id,
      id2: id
    };
    removeFriend(data, navigate)(dispatch);
  };
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <NormalButton
        onClick={() => setIsOpen(true)}
        className="mb-2 w-full text-left"
        text="Remove this friend"
      ></NormalButton>
      <NormalButton className="mb-2 w-full text-left" text="Send a balance reminder"></NormalButton>
      <NormalButton className="mb-2 w-full text-left" text="Export as spreadsheet"></NormalButton>
      <ConfirmModal isOpen={isOpen} onClose={onClose} onSave={onDelete}></ConfirmModal>
    </div>
  );
};

export default FriendSetting;
