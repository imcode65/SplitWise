import NormalButton from 'components/buttons/NormalButton';

const PrivacyBar = () => {
  return (
    <div>
      <span className="text-3xl font-semibold">Privacy & Security</span>
      <div className="flex my-4 justify-between">
        <NormalButton text="Your apps"></NormalButton>
        <NormalButton text="Recent visits"></NormalButton>
        <NormalButton text="Log out on all devices"></NormalButton>
        <NormalButton text="Manage your blocklist"></NormalButton>
      </div>
      <div className="flex mb-8">
        <span>
          Allow other Splitwise users who have my email address or phone number in their contact
          book to see that I use Splitwise
        </span>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="text-white bg-[#ff652f] hover:bg-[#f8561b] rounded-md text-sm px-5 py-2.5 mr-2"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PrivacyBar;
