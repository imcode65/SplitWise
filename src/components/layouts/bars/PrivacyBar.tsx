import NormalButton from 'components/buttons/NormalButton';

const PrivacyBar = () => {
  return (
    <div>
      <span className="text-3xl font-semibold">Privacy & Security</span>
      <div className="flex my-4 sm:justify-between flex-col sm:flex-row text-center">
        <NormalButton className="mb-1" text="Your apps"></NormalButton>
        <NormalButton className="mb-1" text="Recent visits"></NormalButton>
        <NormalButton className="mb-1" text="Log out on all devices"></NormalButton>
        <NormalButton className="mb-1" text="Manage your blocklist"></NormalButton>
      </div>
      <div className="flex mb-8">
        <input className="mr-2" type="checkbox" id="" name="" value="yes" />
        <span className=" text-sm">
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
