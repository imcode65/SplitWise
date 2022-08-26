import NormalButton from 'components/buttons/NormalButton';

const PrivacyBar = () => {
  return (
    <div>
      <span className="text-3xl font-semibold">Privacy & Security</span>
      <div className="flex mt-4 justify-between">
        <NormalButton text="Your apps"></NormalButton>
        <NormalButton text="Recent visits"></NormalButton>
        <NormalButton text="Log out on all devices"></NormalButton>
        <NormalButton text="Manage your blocklist"></NormalButton>
      </div>
    </div>
  );
};

export default PrivacyBar;
