import SignUpForm from 'components/forms/SignUpForm';
// import LoginModal from 'components/modals/SignUpModal';

const SignUpPage = () => {
  return (
    <div className="">
      <div className="container mx-auto">
        <div className="lg:flex align-center justify-center items-center mt-4 mb-20 p-4">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
