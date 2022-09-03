import NormalButton from 'components/buttons/NormalButton';

const FriendSetting = () => {
  return (
    <div>
      <NormalButton className="mb-2 w-52 text-left" text="Remove this friend"></NormalButton>
      <NormalButton className="mb-2 w-52 text-left" text="Send a balance reminder"></NormalButton>
      <NormalButton className="mb-2 w-52 text-left" text="Export as spreadsheet"></NormalButton>
    </div>
  );
};

export default FriendSetting;
