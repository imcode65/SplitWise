import MailIcon from 'components/icons/MailIcon';

const NotificationBar = () => {
  return (
    <div>
      <span className="text-3xl font-semibold">Notifications</span>
      <div className="grid grid-cols-3">
        <div className="p-2">
          <p className="font-semibold text-gray-400 mb-2">GROUPS AND FRIENDS</p>
          <div className="flex justify-between items-center">
            <p>When someone adds me to a group</p>
            <MailIcon height={24} width={24} className="grow-0 shrink-0"></MailIcon>
          </div>
          <div className="flex justify-between items-center">
            <p>When someone adds me as a friend</p>
            <MailIcon height={24} width={24} className="grow-0 shrink-0"></MailIcon>
          </div>
        </div>
        <div className="p-2">
          <p className="font-semibold text-gray-400 mb-2">EXPENSES</p>
          <div className="flex justify-between items-center">
            <p>When an expense is added</p>
            <MailIcon height={24} width={24} className="grow-0 shrink-0"></MailIcon>
          </div>
          <div className="flex justify-between items-center">
            <p>When an expense is edited/deleted</p>
            <MailIcon height={24} width={24} className="grow-0 shrink-0"></MailIcon>
          </div>
          <div className="flex justify-between items-center">
            <p>When someone comments on an expense</p>
            <MailIcon height={24} width={24} className="grow-0 shrink-0"></MailIcon>
          </div>
          <div className="flex justify-between items-center">
            <p>When an expense is due</p>
            <MailIcon height={24} width={24} className="grow-0 shrink-0"></MailIcon>
          </div>
          <div className="flex justify-between items-center">
            <p>When someone pays me</p>
            <MailIcon height={24} width={24} className="grow-0 shrink-0"></MailIcon>
          </div>
        </div>
        <div className="p-2">
          <p className="font-semibold text-gray-400 mb-2">NEWS AND UPDATES</p>
          <div className="flex justify-between items-center">
            <p>Monthly summary of my activity</p>
            <MailIcon height={24} width={24} className="grow-0 shrink-0"></MailIcon>
          </div>
          <div className="flex justify-between items-center">
            <p>Major Splitwise news and updates</p>
            <MailIcon height={24} width={24} className="grow-0 shrink-0"></MailIcon>
          </div>
          <div className="flex justify-end mt-8">
            <button
              type="button"
              className="text-white bg-[#ff652f] hover:bg-[#f8561b] rounded-md text-sm px-5 py-2.5"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationBar;
