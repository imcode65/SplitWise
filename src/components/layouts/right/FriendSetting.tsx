import NormalButton from 'components/buttons/NormalButton';
import { useParams } from 'react-router';

const FriendSetting = () => {
  const { id } = useParams();

  const onDelete = () => {
    console.log('onDelete');
  };
  return (
    <div>
      {id}
      <NormalButton
        onClick={() => onDelete()}
        className="mb-2 w-52 text-left"
        text="Remove this friend"
      ></NormalButton>
      <NormalButton className="mb-2 w-52 text-left" text="Send a balance reminder"></NormalButton>
      <NormalButton className="mb-2 w-52 text-left" text="Export as spreadsheet"></NormalButton>
    </div>
  );
};

export default FriendSetting;
