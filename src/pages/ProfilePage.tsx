import Navbar from 'components/layouts/Navbar';

const ProfilePage = () => {
  return (
    <div className="w-full">
      <Navbar showHome={true}></Navbar>
      <div className="grid grid-cols-6 gap-4 px-16">
        <h1>PROFILE</h1>
      </div>
    </div>
  );
};

export default ProfilePage;
